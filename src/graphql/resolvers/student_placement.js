import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentPlacement(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No
            return await prisma.student_placement.findOne({
                where: {
                    Register_No
                }
            })
        }
    },

    Mutation: {
        
        async createStudentPlacement(parent, {data}, {prisma,req}, info) {
            const {Placement_Type_Ref,...ref_data} = data;
            const Register_No = getRegNo(req);
            if(Placement_Type_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Placement_Type_Ref
                    }
                }
            }
            return await prisma.student_placement.create({
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
        async updateStudentPlacement(parent, {data}, {prisma}, info) {
            const {Placement_ID,Placement_Type_Ref,...ref_data} = data;
            if(Placement_Type_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Placement_Type_Ref
                    }
                }
            }
            return await prisma.student_placement.update({
                where:{
                    Placement_ID
                },
                data:{
                    ...ref_data
                }
            })
        }
    }
    
}