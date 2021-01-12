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
            const res=[]
            session_arr.forEach(element => {
                res.push(element.session_ref)
            });
            return res
        }
    },
}