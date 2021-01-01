module.exports = {
    Query: {
        async courseRegisteredStudent(parent, {data}, {prisma}, info){
            return await prisma.course_registered_students.findMany({
                where:{
                    reg_no: data.reg_no
                }
            })
        }
    },
}