import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentFamilyDetails(parent, args, {prisma,req}, info){
            const Register_No = getRegNo(req)
            return await prisma.student_family_details.findOne({
                where: {
                    Register_No
                }
            })
        }

    },

    Mutation: {
        
        async createStudentFamilyDetails(parent, {data}, {prisma}, info) {
            const {Family_ID,Register_No,...refdata} = data;
            console.log(refdata);
            return await prisma.student_family_details.create({
                data:{
                    student:{
                        connect:{
                            Register_No:data.Register_No
                        }
                    },
                    ...refdata
                }
            })
        },
        async updateStudentFamilyDetails(parent, {data}, {prisma}, info) {
            const {Family_ID,Register_No,...ref_data} = data;
            console.log(ref_data);
            return await prisma.student_family_details.update({
                where:{
                    Family_ID:data.Family_ID
                },
                data:{
                    ...ref_data
                }
            })
        }
    }
    
}
