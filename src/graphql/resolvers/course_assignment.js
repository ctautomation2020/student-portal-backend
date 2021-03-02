module.exports = {
    Query: {
        async assignment(parent, {data}, {prisma}, info){
            return await prisma.course_assignment.findMany({
                where:{
                    ...data
                },
                orderBy:{
                    question_num:'asc'
                }
            })
        },
        async session_assignments(parent, {data}, {prisma}, info){
            const a =  await prisma.course_assignment.findMany({
                where:{
                    ...data
                },
                select: {
                    assign_num: true
                },
                distinct: ["assign_num"]
            })
            const assign= []
            a.forEach((a)=>{
                assign.push(a.assign_num)
                
            })

            return assign
        }
    },

    Mutation: {
        async createAssignment(parent, {data}, {prisma,auth,req}, info){
            
            const Person_ID = auth(req)
            const {course_code,group_ref,session_ref,assign_num,entry_date,deadline, ...remData} = data
            
            remData.questions.forEach(async(ques)=>{
                await prisma.course_assignment.create({
                    data:{
                        course_list:{
                            connect: {
                                course_code
                            }
                        },
                        person_reference_table_course_assignment_group_refToperson_reference_table:{
                            connect: {
                                Reference_ID: group_ref
                            }
                        },
                        person_reference_table_course_assignment_session_refToperson_reference_table:{
                            connect: {
                                Reference_ID: session_ref
                            }
                        },
                        assign_num,
                        entry_date,
                        deadline,
                        ...ques

                    }
                })
            })
        }
    }
            
}