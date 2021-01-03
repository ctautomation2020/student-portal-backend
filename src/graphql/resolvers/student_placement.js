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
            const {Placement_Type_Ref,...ref_data} = data;
            const Register_No = getRegNo(req);
            if(Placement_Type_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Placement_Type_Ref
                    }
                }
            }
            return await prisma.student_placement.create({
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
        async updateStudentPlacement(parent, {data}, {prisma}, info) {
            const {Placement_ID,Placement_Type_Ref,...ref_data} = data;
            if(Placement_Type_Ref){
                ref_data.person_reference_table={
                    connect:{
                        Reference_ID:Placement_Type_Ref
                    }
                }
            }
            return await prisma.student_placement.update({
                where:{
                    Placement_ID
                },
                data:{
                    ...ref_data
                }
            })
        },
        async deleteStudentPlacement(parent, {data}, {prisma}, info) {
            
            return await prisma.student_placement.delete({
                where:{
                    Placement_ID: data.Placement_ID
                }
            })
        },

        uploadStudentPlacement: async (_, { data },{req}) => {
            const{file,Placement_ID} = data;
            const { createReadStream, filename } = await file;
            const ext = filename.substr(filename.lastIndexOf('.') + 1);
            const fileName = "StudentPlacement_"+getRegNo(req)+"_"+Placement_ID+"."+ext;

            fs.unlinkSync(path.join(__dirname, "../../files/student-placements", fileName))
            
            await new Promise(res =>
                createReadStream()
                .pipe(fs.createWriteStream(path.join(__dirname, "../../files/student-placements", fileName)))
                .on("close", res)
            );
      
            //files.push(filename);
            console.log(createReadStream)


            return true;
        }
    }
    
}