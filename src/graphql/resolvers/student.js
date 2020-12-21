import getRegNo from "../auth/getRegNo"

module.exports={
    Query:{

        async allStudents(parent, args, {prisma}, info) {
            return await prisma.student.findMany()
        },

        async student(parent, args, {prisma,req}, info){
            const Register_No = getRegNo(req)
            return await prisma.student.findOne({
                where: {
                    Register_No
                }
            })
        }

    },

    Mutation: {
        
        async createStudent(parent, {data}, {prisma}, info) {
            const {Gender_Ref, Community_Ref, Residential_Type_Ref, Programme_Ref, Branch_Ref, Registration_Mode_Ref, Blood_Group_Ref, Admission_Category_Ref, Scholarship_Received_Ref, NSO_NSS_YRC_Volunteer_Ref,...noref_data} = data
            const ref_data = noref_data
            if(Gender_Ref){
                ref_data.person_reference_table_person_Gender_RefToperson_reference_table={
                    connect:{
                        Reference_ID:Gender_Ref
                    }
                }
            }
            if(Community_Ref){
                ref_data.person_reference_table_person_Community_RefToperson_reference_table={
                    connect:{
                        Reference_ID:Community_Ref
                    }
                }
            }
            if(Residential_Type_Ref){
                ref_data.person_reference_table_person_Community_RefToperson_reference_table={
                    connect:{
                        Reference_ID:Community_Ref
                    }
                }
            }
            return await prisma.person.create({data:{
                ...ref_data
            }
            })
        },

        async updateStudent(parent, {data}, {prisma}, info) {
            const{Gender_Ref, Community_Ref, Residential_Type_Ref, Programme_Ref, Branch_Ref, Registration_Mode_Ref, Blood_Group_Ref, Admission_Category_Ref, Scholarship_Received_Ref, NSO_NSS_YRC_Volunteer_Ref,...noref_data} = data

            const ref_data = noref_data
            if(Community_Ref){
                ref_data.person_reference_table_person_Community_RefToperson_reference_table={
                    connect:{
                        Reference_ID:Community_Ref
                    }
                }
            }
            if(Gender_Ref){
                ref_data.person_reference_table_person_Gender_RefToperson_reference_table={
                    connect:{
                        Reference_ID:Gender_Ref
                    }
                }
            }
            if(Residential_Type_Ref){
                ref_data.person_reference_table_person_Residential_Type_RefToperson_reference_table={
                    connect:{
                        Reference_ID:Residential_Type_Ref
                    }
                }
            }
            
            return await prisma.student.update({
                where:{
                    Register_No:data.Register_No
                },
                data:{
                    ...ref_data
                }
            })
        },

    },
    /*
    Student: {

        async Person_Qualification(parent, {data}, {prisma}, info) {
            return await prisma.person_qualification.findMany({
                where: {
                    Person_ID: parent.Person_ID
                }
            })
        }
    }*/
}


//Gender_Ref, Community_Ref, Residential_Type_Ref, Programme_Ref, Branch_Ref, Registration_Mode_Ref, Blood_Group_Ref, Admission_Category_Ref, Scholarship_Received_Ref, NSO_NSS_YRC_Volunteer_Ref