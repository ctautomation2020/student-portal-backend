import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentHigherStudies(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No
            return await prisma.student_higherstudies.findOne({
                where: {
                    Register_No
                }
            })
        }
    },

    Mutation: {
        
        async createStudentHigherStudies(parent, {data}, {prisma,req}, info) {
            const {Admission_Mode_Ref,...ref_data} = data;
            const Register_No = getRegNo(req);
            
            if(Admission_Mode_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Admission_Mode_Ref
                    }
                };
            }

            return await prisma.student_higherstudies.create({
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
        async updateStudentHigherStudies(parent, {data}, {prisma}, info) {
            const {HigherStudies_ID,Admission_Mode_Ref,...ref_data} = data;
            
            if(Admission_Mode_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Admission_Mode_Ref
                    }
                };
            }
            
            return await prisma.student_higherstudies.update({
                where:{
                    HigherStudies_ID
                },
                data:{
                    ...ref_data
                }
            })
        }
    }
    
}