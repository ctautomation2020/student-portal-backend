module.exports = {
    Query: {
        async studentCourseEvaluation(parent, {data}, {prisma}, info) {
            const ans = await prisma.course_evaluation.findMany({
                where:{
                    ...data
                }
            })
            return ans[0];
        }
    }
} 