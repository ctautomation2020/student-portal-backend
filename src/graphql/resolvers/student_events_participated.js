import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentEventsParticipated(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No;
            return await prisma.student_events_participated.findMany({
                where: {
                    Register_No
                }
            })
        },
        
        async studentEventParticipated(parent,{data}, {prisma,req}, info){
            const Event_ID = data.Event_ID
            return await prisma.student_events_participated.findOne({
                where: {
                    Event_ID
                }
            })
        }
    },

    Mutation: {
        
        async createEventParticipated(parent, {data}, {prisma,req}, info) {
            const {Event_Type_Ref,Participation_Type_Ref,file,...ref_data} = data;
            const Register_No = getRegNo(req);

            if(Event_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_events_participated_Event_Type_Ref={
                    connect:{
                        Reference_ID:Event_Type_Ref
                    }
                }
            }

            if(Participation_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_events_participated_Participation_Type_Ref={
                    connect:{
                        Reference_ID:Participation_Type_Ref
                    }
                }
            }

            const student_event_participated = await prisma.student_events_participated.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })
            const Event_ID = student_event_participated.Event_ID;
            console.log(student_event_participated);
            console.log(data)
            const { createReadStream, filename } = await data.file;
            console.log(data.file)
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            console.log(createReadStream,filename); 
            const fileName = "StudentEventParticipated_"+Register_No+"_"+Event_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-events-participated", fileName)))
            {
                fs.unlinkSync(path.join(__dirname, "../../files/student-events-participated", fileName));
            }
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-events-participated", fileName)))
                .on("close", res)
            );
            const Certificate_Copy = path.join("student-events-participated", fileName);
            await prisma.student_events_participated.update({
                where:{
                    Event_ID
                },
                data:{
                    Certificate_Copy: Certificate_Copy
                }
            });
            student_event_participated.Certificate_Copy = Certificate_Copy;
            return student_event_participated;

        },

        async updateEventParticipated(parent, {data}, {prisma,req}, info) {
            const {Event_ID,Event_Type_Ref,Participation_Type_Ref,file,...ref_data} = data;
            const Register_No = getRegNo(req)
            if(Event_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_events_participated_Event_Type_Ref={
                    connect:{
                        Reference_ID:Event_Type_Ref
                    }
                }
            }
                                    
            if(Participation_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_events_participated_Participation_Type_Ref={
                    connect:{
                        Reference_ID:Participation_Type_Ref
                    }
                }
            }
            const student_event_participated = await prisma.student_events_participated.update({
                where:{
                    Event_ID
                },
                data:{
                    ...ref_data
                }
            })

            console.log(data)
            const { createReadStream, filename } = await file;
            console.log(data.file)
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentEventParticipated_"+Register_No+"_"+Event_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-events-participated", fileName)))
            {
                fs.unlinkSync(path.join(__dirname, "../../files/student-events-participated", fileName));
            }
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-events-participated", fileName)))
                .on("close", res)
            );
            const Certificate_Copy = path.join("student-events-participated", fileName);
            student_event_participated.Certificate_Copy = Certificate_Copy;
            return student_event_participated;
        },

        async deleteEventParticipated(parent, {data}, {prisma}, info) {
            
            const student_event_participated = await prisma.student_events_participated.delete({
                where:{
                    Event_ID: data.Event_ID
                }
            })
            if(fs.existsSync(path.join(__dirname, "../../files",student_event_participated.Certificate_Copy)))
            {
                fs.unlinkSync(path.join(__dirname, "../../files",student_event_participated.Certificate_Copy));
            }
            return student_event_participated;
        },

        uploadEventParticipated: async (_, { data },{prisma,req}) => {
            const{file,Event_ID} = data;
            console.log(data)
            const { createReadStream, filename } = await file;
            console.log(file)
            console.log(data.file)
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentEventParticipated_"+getRegNo(req)+"_"+Event_ID+"."+ext;
            
            if(fs.existsSync(path.join(__dirname, "../../files/student-events-participated", fileName)))
            {
                fs.unlinkSync(path.join(__dirname, "../../files/student-events-participated", fileName));
            }
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-events-participated", fileName)))
                .on("close", res)
            );
                
            const Certificate_Copy = path.join("student-events-participated", fileName);
            await prisma.student_events_participated.update({
                where:{
                    Event_ID
                },
                data:{
                    Certificate_Copy: Certificate_Copy
                }
            });
           return Certificate_Copy
        }
    }
    
}
