import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentInternships(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No;
            return await prisma.student_internship.findMany({
                where: {
                    Register_No
                }
            })
        },
        
        async studentInternship(parent,{data}, {prisma,req}, info){
            const Internship_ID = data.Internship_ID
            return await prisma.student_internship.findOne({
                where: {
                    Internship_ID
                }
            })
        }
    },

    Mutation: {
        
        async createStudentInternship(parent, {data}, {prisma,req}, info) {
            const {Stiphend_Option_Ref,Selection_Mode_Ref,...ref_data} = data;
            const Register_No = getRegNo(req);

            if(Selection_Mode_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_internship_Selection_Mode_Ref={
                    connect:{
                        Reference_ID:Selection_Mode_Ref
                    }
                }
            }

            if(Stiphend_Option_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_internship_Stiphend_Option_Ref={
                    connect:{
                        Reference_ID:Stiphend_Option_Ref
                    }
                }
            }

            return await prisma.student_internship.create({
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

        async updateStudentInternship(parent, {data}, {prisma}, info) {
            const {Internship_ID,Stiphend_Option_Ref,Selection_Mode_Ref,...ref_data} = data;
            
            if(Selection_Mode_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_internship_Selection_Mode_Ref={
                    connect:{
                        Reference_ID:Selection_Mode_Ref
                    }
                }
            }

            if(Stiphend_Option_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_internship_Stiphend_Option_Ref={
                    connect:{
                        Reference_ID:Stiphend_Option_Ref
                    }
                }
            }
            return await prisma.student_internship.update({
                where:{
                    Internship_ID
                },
                data:{
                    ...ref_data
                }
            })
        },

        async deleteStudentInternship(parent, {data}, {prisma}, info) {
            
            return await prisma.student_internship.delete({
                where:{
                    Internship_ID: data.Internship_ID
                }
            })
        },

        uploadStudentInternship: async (_, { data },{req}) => {
            const{file,Internship_ID} = data;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentInternship_"+getRegNo(req)+"_"+Internship_ID+"."+ext;
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-internships", fileName)))
                .on("close", res)
            );
      
            //files.push(filename);
            console.log(createReadStream)


            return true;
        }
    }
    
}
