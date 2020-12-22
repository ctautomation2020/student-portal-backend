import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{

        async allStudents(parent, args, {prisma}, info) {
            return await prisma.student.findMany()
        },

        async student(parent, args, {prisma,req}, info){
            const Register_No = getRegNo(req)
            //console.log(Register_No);
            return await prisma.student.findOne({
                where: {
                    Register_No
                }
            })
        }

    },

    Mutation: {
        
        async createStudent(parent, {data}, {prisma}, info) {
            const{Gender_Ref, Community_Ref, Residential_Type_Ref, Programme_Ref, Branch_Ref, Registration_Mode_Ref, Blood_Group_Ref, Admission_Category_Ref, Scholarship_Received_Ref, NSS_NSO_YRC_Volunteer_Ref,...noref_data} = data
            const ref_data = noref_data
            if(Gender_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Gender_Ref={
                    connect:{
                        Reference_ID:Gender_Ref
                    }
                }
            }
            if(Community_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Community_Ref={
                    connect:{
                        Reference_ID:Community_Ref
                    }
                }
            }
            if(Residential_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Residential_Type_Ref={
                    connect:{
                        Reference_ID:Residential_Type_Ref
                    }
                }
            }
            if(Programme_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Programme_Ref={
                    connect:{
                        Reference_ID:Programme_Ref
                    }
                }
            }
            if(Branch_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Branch_Ref={
                    connect:{
                        Reference_ID:Branch_Ref
                    }
                }
            }
            if(Registration_Mode_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Registration_Mode_Ref={
                    connect:{
                        Reference_ID:Registration_Mode_Ref
                    }
                }
            }
            if(Blood_Group_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Blood_Group_Ref={
                    connect:{
                        Reference_ID:Blood_Group_Ref
                    }
                }
            }
            if(Admission_Category_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Admission_Category_Ref={
                    connect:{
                        Reference_ID:Admission_Category_Ref
                    }
                }
            }
            if(Scholarship_Received_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Scholarship_Received_Ref={
                    connect:{
                        Reference_ID:Scholarship_Received_Ref
                    }
                }
            }
            if(NSS_NSO_YRC_Volunteer_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_NSS_NSO_YRC_Volunteer_Ref={
                    connect:{
                        Reference_ID:NSS_NSO_YRC_Volunteer_Ref
                    }
                }
            }
            
            return await prisma.student.create({data:{
                ...ref_data
            }
            })
        },

        async updateStudent(parent, {data}, {prisma}, info) {
            const{Gender_Ref, Community_Ref, Residential_Type_Ref, Programme_Ref, Branch_Ref, Registration_Mode_Ref, Blood_Group_Ref, Admission_Category_Ref, Scholarship_Received_Ref, NSS_NSO_YRC_Volunteer_Ref,...noref_data} = data
            const ref_data = noref_data
            if(Gender_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Gender_Ref={
                    connect:{
                        Reference_ID:Gender_Ref
                    }
                }
            }
            if(Community_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Community_Ref={
                    connect:{
                        Reference_ID:Community_Ref
                    }
                }
            }
            if(Residential_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Residential_Type_Ref={
                    connect:{
                        Reference_ID:Residential_Type_Ref
                    }
                }
            }
            if(Programme_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Programme_Ref={
                    connect:{
                        Reference_ID:Programme_Ref
                    }
                }
            }
            if(Branch_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Branch_Ref={
                    connect:{
                        Reference_ID:Branch_Ref
                    }
                }
            }
            if(Registration_Mode_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Registration_Mode_Ref={
                    connect:{
                        Reference_ID:Registration_Mode_Ref
                    }
                }
            }
            if(Blood_Group_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Blood_Group_Ref={
                    connect:{
                        Reference_ID:Blood_Group_Ref
                    }
                }
            }
            if(Admission_Category_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Admission_Category_Ref={
                    connect:{
                        Reference_ID:Admission_Category_Ref
                    }
                }
            }
            if(Scholarship_Received_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_Scholarship_Received_Ref={
                    connect:{
                        Reference_ID:Scholarship_Received_Ref
                    }
                }
            }
            if(NSS_NSO_YRC_Volunteer_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_NSS_NSO_YRC_Volunteer_Ref={
                    connect:{
                        Reference_ID:NSS_NSO_YRC_Volunteer_Ref
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
        uploadPhoto: async (_, { file }) => {
            const { createReadStream, filename } = await file;
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../photos", filename)))
                .on("close", res)
            );
      
            //files.push(filename);
            console.log(createReadStream)


            return true;
          }
    },
    
}


//Gender_Ref, Community_Ref, Residential_Type_Ref, Programme_Ref, Branch_Ref, Registration_Mode_Ref, Blood_Group_Ref, Admission_Category_Ref, Scholarship_Received_Ref, NSS_NSO_YRC_Volunteer_Ref