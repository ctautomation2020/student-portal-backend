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
            const {Stiphend_Option_Ref,Selection_Mode_Ref,file,...ref_data} = data;
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

            const student_internship = await prisma.student_internship.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })
            const Internship_ID = student_internship.Internship_ID;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentInternship_"+Register_No+"_"+Internship_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-internships", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-internships", fileName))
            }
            
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-internships", fileName)))
                .on("close", res)
            );
            const Order_Copy = path.join("student-internships", fileName);
            await prisma.student_internship.update({
                where:{
                    Internship_ID
                },
                data:{
                    Order_Copy
                }
            })
            student_internship.Order_Copy = Order_Copy;
            return student_internship;
        },

        async updateStudentInternship(parent, {data}, {prisma,req}, info) {
            const {Internship_ID,Stiphend_Option_Ref,Selection_Mode_Ref,file,...ref_data} = data;
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
            const student_internship = await prisma.student_internship.update({
                where:{
                    Internship_ID
                },
                data:{
                    ...ref_data
                }
            })
            if(file != null){
                const { createReadStream, filename } = await file;
                const ext = filename.substr(filename.lastIndexOf('.') + 1);
                const fileName = "StudentInternship_"+Register_No+"_"+Internship_ID+"."+ext;

                if(fs.existsSync(path.join(__dirname, "../../files/student-internships", fileName))){
                    fs.unlinkSync(path.join(__dirname, "../../files/student-internships", fileName))
                }
                
                await new Promise(res =>
                    createReadStream()
                    .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-internships", fileName)))
                    .on("close", res)
                );
            }
            return student_internship;
        },

        async deleteStudentInternship(parent, {data}, {prisma}, info) {
            
            const student_internship = await prisma.student_internship.delete({
                where:{
                    Internship_ID: data.Internship_ID
                }
            })

            if(fs.existsSync(path.join(__dirname, "../../files",student_internship.Order_Copy)))
            {
                fs.unlinkSync(path.join(__dirname, "../../files",student_internship.Order_Copy));
            }

            return student_internship;
        },
    }
    
}
