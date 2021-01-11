import { CLIENT_RENEG_LIMIT } from "tls"
import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentHigherStudies(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No
            return await prisma.student_higherstudies.findMany({
                where: {
                    Register_No
                }
            })
        },
        async studentHigherStudy(parent, {data}, {prisma,req}, info){
            const HigherStudies_ID = data.HigherStudies_ID
            console.log(HigherStudies_ID)
            return await prisma.student_higherstudies.findOne({
                where: {
                    HigherStudies_ID
                }
            })
        }
    },

    Mutation: {
        
        async createStudentHigherStudy(parent, {data}, {prisma,req}, info) {
            const {Admission_Mode_Ref,file,...ref_data} = data;
            const Register_No = getRegNo(req);
            
            if(Admission_Mode_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Admission_Mode_Ref
                    }
                };
            }

            const student_higherstudies = await prisma.student_higherstudies.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })
            const HigherStudies_ID = student_higherstudies.HigherStudies_ID;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentHigherStudies_"+Register_No+"_"+HigherStudies_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-higher-studies", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-higher-studies", fileName))
            }
            
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-higher-studies", fileName)))
                .on("close", res)
            );
            const Score_Card_Copy = path.join("student-higher-studies", fileName);

            await prisma.student_higherstudies.update({
                where:{
                    HigherStudies_ID
                },
                data:{
                    Score_Card_Copy
                }
            })
            student_higherstudies.Score_Card_Copy = Score_Card_Copy;
            
            return student_higherstudies;

        },
        async updateStudentHigherStudy(parent, {data}, {prisma,req}, info) {
            const {HigherStudies_ID,Admission_Mode_Ref,file,...ref_data} = data;
            const Register_No = getRegNo(req);
            if(Admission_Mode_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Admission_Mode_Ref
                    }
                };
            }
            
            const student_higherstudies = await prisma.student_higherstudies.update({
                where:{
                    HigherStudies_ID
                },
                data:{
                    ...ref_data
                }
            })
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentHigherStudies_"+Register_No+"_"+HigherStudies_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-higher-studies", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-higher-studies", fileName))
            }
            
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-higher-studies", fileName)))
                .on("close", res)
            );
            return student_higherstudies;

        },
        async deleteStudentHigherStudy(parent, {data}, {prisma}, info) {
            const student_higherstudies = await prisma.student_higherstudies.delete({
                where:{
                    HigherStudies_ID: data.HigherStudies_ID
                }
            })
            if(fs.existsSync(path.join(__dirname, "../../files",student_higherstudies.Score_Card_Copy)))
            {
                fs.unlinkSync(path.join(__dirname, "../../files",student_higherstudies.Score_Card_Copy))
            }
            return student_higherstudies;
        },
        
        uploadStudentHigherStudy: async (_, { data },{prisma,req}) => {
            const{file,HigherStudies_ID} = data;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentHigherStudies_"+getRegNo(req)+"_"+HigherStudies_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-higher-studies", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-higher-studies", fileName))
            }
            
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-higher-studies", fileName)))
                .on("close", res)
            );
            const Score_Card_Copy = path.join("student-higher-studies", fileName);

            await prisma.student_higherstudies.update({
                where:{
                    HigherStudies_ID
                },
                data:{
                    Score_Card_Copy
                }
            })
            //files.push(filename);
            console.log(createReadStream)


            return Score_Card_Copy;
        }
    }
    
}