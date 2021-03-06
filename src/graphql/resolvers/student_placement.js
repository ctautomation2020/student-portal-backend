import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentPlacement(parent, {data}, {prisma,req}, info){
            const Placement_ID = data.Placement_ID
            return await prisma.student_placement.findOne({
                where: {
                    Placement_ID
                }
            })
        },
        async studentPlacements(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No;
            return await prisma.student_placement.findMany({
                where: {
                    Register_No
                }
            })
        }
    },

    Mutation: {
        
        async createStudentPlacement(parent, {data}, {prisma,req}, info) {
            const {Placement_Type_Ref,file,...ref_data} = data;
            const Register_No = getRegNo(req);
            if(Placement_Type_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Placement_Type_Ref
                    }
                }
            }
            const student_placement = await prisma.student_placement.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })
            const Placement_ID = student_placement.Placement_ID;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentPlacement_"+getRegNo(req)+"_"+Placement_ID+"."+ext;

            if(fs.existsSync(path.join(__dirname, "../../files/student-placements", fileName))){
                fs.unlinkSync(path.join(__dirname, "../../files/student-placements", fileName))
            }
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-placements", fileName)))
                .on("close", res)
            );
            const Appointment_Order_Copy = path.join("student-placements", fileName);
            await prisma.student_placement.update({
                where:{
                    Placement_ID
                },
                data:{
                    Appointment_Order_Copy
                }
            })
            student_placement.Appointment_Order_Copy = Appointment_Order_Copy;
            return student_placement;
        },
        async updateStudentPlacement(parent, {data}, {prisma,req}, info) {
            const {Placement_ID,Placement_Type_Ref,file,...ref_data} = data;
            const Register_No = getRegNo(req);
            if(Placement_Type_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Placement_Type_Ref
                    }
                }
            }
            const student_placement = await prisma.student_placement.update({
                where:{
                    Placement_ID
                },
                data:{
                    ...ref_data
                }
            })
            if(file != null){
                const { createReadStream, filename } = await file;
                const ext = filename.substr(filename.lastIndexOf('.') + 1);
                const fileName = "StudentPlacement_"+Register_No+"_"+Placement_ID+"."+ext;

                if(fs.existsSync(path.join(__dirname, "../../files/student-placements", fileName))){
                    fs.unlinkSync(path.join(__dirname, "../../files/student-placements", fileName))
                }
                await new Promise(res =>
                    createReadStream()
                    .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-placements", fileName)))
                    .on("close", res)
                );
            }
            return student_placement;
        },
        async deleteStudentPlacement(parent, {data}, {prisma}, info) {
            
            const student_placement = await prisma.student_placement.delete({
                where:{
                    Placement_ID: data.Placement_ID
                }
            })
            if(fs.existsSync(path.join(__dirname, "../../files",student_placement.Appointment_Order_Copy)))
            {
                fs.existsSync(path.join(__dirname, "../../files",student_placement.Appointment_Order_Copy))
            }
            return student_placement;
        },
    }
    
}