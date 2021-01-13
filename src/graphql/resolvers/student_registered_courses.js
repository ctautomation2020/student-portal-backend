const { TransformQuery } = require("graphql-tools");

module.exports={
    Query:{
        async studentRegisteredCourses(parent,{data}, {prisma,req}, info){
            const reg_no = data.Register_No
            return  await prisma.course_registered_students.findMany({
                include: {
                    course_list: true
                },
                where:{
                    ...data
                }
            })
        }

    },
}