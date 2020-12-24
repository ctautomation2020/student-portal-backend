import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentFamilyDetails(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No
            return await prisma.student_family_details.findOne({
                where: {
                    Register_No
                }
            })
        }
    },

    Mutation: {
        
        async createStudentFamilyDetails(parent, {data}, {prisma,req}, info) {
            const {Register_No,...ref_data} = data;
            return await prisma.student_family_details.create({
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
        async updateStudentFamilyDetails(parent, {data}, {prisma}, info) {
            const {Family_ID,...ref_data} = data;
            return await prisma.student_family_details.update({
                where:{
                    Family_ID
                },
                data:{
                    ...ref_data
                }
            })
        }
    }
    
}