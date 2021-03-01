module.exports = {
    Query: {
        async courseRegisteredStudent(parent, {data}, {prisma}, info){
            return await prisma.course_registered_students.findMany({
                where:{
                    ...data
                }
            })
        },

        async studentSessions(parent, {data}, {prisma}, info){
            const session_arr = await prisma.course_registered_students.findMany({
                where:{
                    reg_no: data.reg_no
                },
                select: {
                    session_ref: true
                },
                distinct: ["session_ref"]
            })
            const session_details = async(session_arr)=>{
                const ans =[];
                for (let element of session_arr){
                    const session = await prisma.course_reference_table.findOne({
                        where:{
                            reference_id : element.session_ref
                        }
                    })
                    ans.push(session)
                }
                return ans;
            }
            return session_details(session_arr);
        }
    },
}