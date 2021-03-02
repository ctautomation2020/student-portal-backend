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
                distinct: ["session_ref"],
            })
            const session_details = async(session_arr)=>{
                const ans =[];
                const all_session = await prisma.person_reference_table.findMany({
                    where:{
                        Category:"Session"
                    },
                    orderBy:[{
                        Ref_Name:'desc'
                    }]
                })
                for (let session1 of all_session){
                    for(let session2 of session_arr)
                    {
                        if(session1.Reference_ID===session2.session_ref)
                        {
                            ans.push(session1);
                            break;
                        }
                    }
                }
                return ans;
            }
            return session_details(session_arr);
        }
    },
}