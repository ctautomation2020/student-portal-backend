import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentAwards(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No;
            return await prisma.student_awards.findMany({
                where: {
                    Register_No
                }
            })
        },
        
        async studentAward(parent,{data}, {prisma,req}, info){
            const Award_ID = data.Award_ID
            return await prisma.student_awards.findOne({
                where: {
                    Award_ID
                }
            })
        }
    },

    Mutation: {
        
        async createStudentAward(parent, {data}, {prisma,req}, info) {
            const {file,Award_Type_Ref,Award_Category_Ref,...ref_data} = data;
            const Register_No = getRegNo(req);

            if(Award_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_awards_Award_Type_Ref={
                    connect:{
                        Reference_ID:Award_Type_Ref
                    }
                }
            }

            if(Award_Category_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_awards_Award_Category_Ref={
                    connect:{
                        Reference_ID:Award_Category_Ref
                    }
                }
            }

            const student_awards = await prisma.student_awards.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })

            const Award_ID = student_awards.Award_ID;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentAward_"+Register_No+"_"+Award_ID+"."+ext;
            if(fs.existsSync(path.join(__dirname, "../../files/student-awards", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-awards", fileName))
            }  
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-awards", fileName)))
                .on("close", res)
            );
            
            const Certificate_Copy = path.join("student-awards", fileName);
            await prisma.student_awards.update({
                where: {
                    Award_ID
                },
                data:{
                    Certificate_Copy
                }
            })
            student_awards.Certificate_Copy = Certificate_Copy;
            return student_awards;
        },

        async updateStudentAward(parent, {data}, {prisma,req}, info) {
            const {file,Award_ID,Award_Type_Ref,Award_Category_Ref,...ref_data} = data;
            const Register_No = getRegNo(req)
            if(Award_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_awards_Award_Type_Ref={
                    connect:{
                        Reference_ID:Award_Type_Ref
                    }
                }
            }

            if(Award_Category_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_awards_Award_Category_Ref={
                    connect:{
                        Reference_ID:Award_Category_Ref
                    }
                }
            }
            const student_awards = await prisma.student_awards.update({
                where:{
                    Award_ID
                },
                data:{
                    ...ref_data
                }
            })
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentAward_"+Register_No+"_"+Award_ID+"."+ext;
            if(fs.existsSync(path.join(__dirname, "../../files/student-awards", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-awards", fileName))
            }  
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-awards", fileName)))
                .on("close", res)
            );
            return student_awards;
        },

        async deleteStudentAward(parent, {data}, {prisma}, info) {
            
            const student_awards =  await prisma.student_awards.delete({
                where:{
                    Award_ID: data.Award_ID
                }
            })
            if(fs.existsSync(path.join(__dirname, "../../files",student_awards.Certificate_Copy)))
            {
                fs.unlinkSync(path.join(__dirname, "../../files",student_awards.Certificate_Copy));
            }
            return student_awards
        },

        uploadStudentAward: async (_, { data },{prisma,req}) => {
            const{file,Award_ID} = data;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentAward_"+getRegNo(req)+"_"+Award_ID+"."+ext;
            if(fs.existsSync(path.join(__dirname, "../../files/student-awards", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-awards", fileName))
            }  
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-awards", fileName)))
                .on("close", res)
            );
            
            const Certificate_Copy = path.join("student-awards", fileName);
            await prisma.student_awards.update({
                where: {
                    Award_ID
                },
                data:{
                    Certificate_Copy
                }
            })
            //files.push(filename);
            console.log(createReadStream)


            return Certificate_Copy;
        }
    }
    
}
