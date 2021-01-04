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
            const {...ref_data} = data;
            const Register_No = getRegNo(req);

            return await prisma.student_gpa.create({
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

        async updateStudentGpa(parent, {data}, {prisma}, info) {
            const {Gpa_ID,...ref_data} = data;
            return await prisma.student_gpa.update({
                where:{
                    Gpa_ID
                },
                data:{
                    ...ref_data
                }
            })
        },

        async deleteStudentGpa(parent, {data}, {prisma}, info) {
            
            return await prisma.student_gpa.delete({
                where:{
                    Gpa_ID: data.Gpa_ID
                }
            })
        },

        uploadStudentGpa: async (_, { data },{req}) => {
            const{Gpa_ID,file} = data;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentGradeSheet_"+getRegNo(req)+"_"+Gpa_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-grade-sheets", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-grade-sheets", fileName));
            }

            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-grade-sheets", fileName)))
                .on("close", res)
            );
            const Grade_Sheet =  path.join("files/student-grade-sheets", fileName);
            await prisma.student_gpa.delete({
                where:{
                    Gpa_ID
                },
                data:{
                    Grade_Sheet
                }
            })
            //files.push(filename);
            console.log(createReadStream)


            return Grade_Sheet;
        }
    }
    
}
