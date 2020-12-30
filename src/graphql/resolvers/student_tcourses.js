module.exports = {
    Query: {
        async studentTcourse(parent, {data}, {prisma}, info){
            return await prisma.student_tcourses.findMany({
                where:{
                    ...data
                }
            })
        }
    }
}