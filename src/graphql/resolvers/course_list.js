module.exports={
    Query:{
        async courseList(parent, {data}, {prisma,req}, info){
            const course_code = data.course_code
            return await prisma.course_list.findOne({
                where: {
                    course_code
                }
            })
        }
    },
}