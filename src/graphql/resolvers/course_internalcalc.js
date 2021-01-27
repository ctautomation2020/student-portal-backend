module.exports = {
    Query: {
        async studentCourseInternalcalc(parent, {data}, {prisma}, info) {
            const res = await prisma.course_internalcalc.findMany({
                where:{
                    ...data
                }
            })
            return res[0];
        }
    }
}