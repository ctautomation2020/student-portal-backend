module.exports = {
    Query: {
        async studentCourseEvalution(parent, {data}, {prisma}, info) {
            return prisma.$queryRaw`SELECT t1.weightage,t2.* FROM course_cacomp AS t1,course_evaluation AS t2 WHERE t2.reg_no=${data.reg_no} AND t1.group_ref=${data.group_ref} AND t1.session_ref=${data.session_ref} AND t1.course_code=${data.course_code} AND t1.type=t2.type AND t1.number=t2.number`;  
        }
    }
}   