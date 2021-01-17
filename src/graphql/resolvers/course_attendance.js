module.exports = {
    Query: {
        async studentAttendance(parent, {data}, {prisma}, info) {
            return await prisma.course_attendance.findMany({
                where:{
                    ...data
                }
            })
        }
    }
}   