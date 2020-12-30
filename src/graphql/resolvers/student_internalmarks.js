import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentInternalMarks(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No;
            return await prisma.student_internalmarks.findMany({
                where: {
                    Register_No
                }
            })
        },
        
        async studentInternalMark(parent,{data}, {prisma,req}, info){
            const InternalMark_ID = data.InternalMark_ID
            return await prisma.student_internalmarks.findOne({
                where: {
                    InternalMark_ID
                }
            })
        }
    },

    Mutation: {
        
        async createStudentInternalMark(parent, {data}, {prisma,req}, info) {
            const {...ref_data} = data;
            const Register_No = getRegNo(req);

            return await prisma.student_internalmarks.create({
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

        async updateStudentInternalMark(parent, {data}, {prisma}, info) {
            const {...ref_data} = data;
            
            return await prisma.student_internalmarks.update({
                where:{
                    InternalMark_ID
                },
                data:{
                    ...ref_data
                }
            })
        },

        async deleteStudentInternalMark(parent, {data}, {prisma}, info) {
            
            return await prisma.student_internalmarks.delete({
                where:{
                    InternalMark_ID: data.InternalMark_ID
                }
            })
        }
    }
    
}
