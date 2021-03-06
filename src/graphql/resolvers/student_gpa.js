import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentGpas(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No;
            return await prisma.student_gpa.findMany({
                where: {
                    Register_No
                }
            })
        },
        
        async studentGpa(parent,{data}, {prisma,req}, info){
            const Gpa_ID = data.Gpa_ID
            return await prisma.student_gpa.findOne({
                where: {
                    Gpa_ID
                }
            })
        }
    },

    Mutation: {
        
        async createStudentGpa(parent, {data}, {prisma,req}, info) {
            const {file,...ref_data} = data;
            const Register_No = getRegNo(req);

            const student_gpa = await prisma.student_gpa.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })
            const Gpa_ID = student_gpa.Gpa_ID;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentGradeSheet_"+Register_No+"_"+Gpa_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-grade-sheets", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-grade-sheets", fileName));
            }

            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-grade-sheets", fileName)))
                .on("close", res)
            );
            const Grade_Sheet =  path.join("student-grade-sheets", fileName);
            await prisma.student_gpa.update({
                where:{
                    Gpa_ID
                },
                data:{
                    Grade_Sheet
                }
            })
            student_gpa.Grade_Sheet = Grade_Sheet;
            return student_gpa;
        },

        async updateStudentGpa(parent, {data}, {prisma,req}, info) {
            const {Gpa_ID,file,...ref_data} = data;
            const Register_No = getRegNo(req);
            const student_gpa = await prisma.student_gpa.update({
                where:{
                    Gpa_ID
                },
                data:{
                    ...ref_data
                }
            })
            if(file != null){
                const { createReadStream, filename } = await file;
                const ext = filename.substr(filename.lastIndexOf('.') + 1);
                const fileName = "StudentGradeSheet_"+Register_No+"_"+Gpa_ID+"."+ext;

                if(fs.existsSync(path.join(__dirname, "../../files/student-grade-sheets", fileName))){
                    fs.unlinkSync(path.join(__dirname, "../../files/student-grade-sheets", fileName));
                }

                await new Promise(res =>
                    createReadStream()
                    .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-grade-sheets", fileName)))
                    .on("close", res)
                );
            }
            return student_gpa;
        },

        async deleteStudentGpa(parent, {data}, {prisma}, info) {
            
            const student_gpa = await prisma.student_gpa.delete({
                where:{
                    Gpa_ID: data.Gpa_ID
                }
            })
            if(fs.existsSync(path.join(__dirname, "../../files",student_gpa.Grade_Sheet))){
                fs.unlinkSync(path.join(__dirname, "../../files",student_gpa.Grade_Sheet));
            }
            return student_gpa;
        },
    }
    
}
