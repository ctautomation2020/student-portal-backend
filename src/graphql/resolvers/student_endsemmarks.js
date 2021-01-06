import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{

        async studentEndsemsMarks(parent, {data}, {prisma,req}, info){
            const {Register_No}= data;
            return await prisma.student_endsemmarks.findMany({
                where: {
                    Register_No
                }
            })
        },

        async studentEndsemMarks(parent, {data}, {prisma,req}, info){
            const {Register_No,Semester}= data;
            return await prisma.student_endsemmarks.findMany({
                where: {
                    Register_No,
                    Semester
                }
            })
        },
        
        async studentEndsemMark(parent,{data}, {prisma,req}, info){
            const Mark_ID = data.Mark_ID
            return await prisma.student_endsemmarks.findOne({
                where: {
                    Mark_ID
                }
            })
        }
    },

    Mutation: {
        
        async createStudentEndsemMark(parent, {data}, {prisma,req}, info) {
            const {Session_Ref,...ref_data} = data;
            const Register_No = getRegNo(req);

            if(Session_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Session_Ref
                    }
                }
            }

            return await prisma.student_endsemmarks.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })
        },

        async updateStudentEndsemMark(parent, {data}, {prisma}, info) {
            const studentEndsemsMarks = [];
            for(var i=0;i<data.length;i++)
            {
                    const {Mark_ID,Session_Ref,...ref_data} = data[i];
                if(Session_Ref){
                    ref_data.person_reference_table={
                        connect:{
                            Reference_ID:Session_Ref
                        }
                    }
                }

                studentEndsemsMarks[i] =  await prisma.student_endsemmarks.update({
                    where:{
                        Mark_ID
                    },
                    data:{
                        ...ref_data
                    }
                })
            }
            return studentEndsemsMarks;
        },

        async deleteStudentEndsemMark(parent, {data}, {prisma}, info) {
            
            return await prisma.student_endsemmarks.delete({
                where:{
                    Mark_ID: data.Mark_ID
                }
            })
        }
    }
    
}
