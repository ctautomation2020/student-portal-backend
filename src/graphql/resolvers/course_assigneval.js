module.exports = {
    Query: {
        async assign_evaluation(parent, {data}, {prisma}, info) {
            return await prisma.course_assigneval.findMany({
                where:{
                    ...data
                },
                orderBy:{
                    question_num:'asc'
                }
            })
        },
        async assignIsEval(parent,{data},{prisma},info){
            const {reg_no,...refData} = data
            const ques = await prisma.course_assignment.findMany({
                where:{
                    ...refData
                }
            })
            const quesEval = await prisma.course_assigneval.findMany({
                where:{
                    reg_no,
                    ...refData
                }
            })
            if(quesEval.length && ques.length)
            {
                return quesEval.length === ques.length
            }
            else{
                return false
            }
        }
    },

    Mutation: {
        async createAssign_evaluation(parent, {data}, {prisma,auth,req}, info) {
            const Person_ID = auth(req)
            const {course_code,group_ref,session_ref,assign_num,reg_no, ...remData} = data
            
            remData.questions.forEach(async(ques)=>{
                await prisma.course_assigneval.create({
                    data:{
                        course_list:{
                            connect: {
                                course_code
                            }
                        },
                        student_list:{
                            connect: {
                                reg_no
                            }
                        },
                        course_reference_table_course_assigneval_group_refTocourse_reference_table:{
                            connect: {
                                reference_id: group_ref
                            }
                        },
                        course_reference_table_course_assigneval_session_refTocourse_reference_table:{
                            connect: {
                                reference_id: session_ref
                            }
                        },
                        assign_num,
                        ...ques
                    }
                })
            })

        },

        async updateAssign_evaluation(parent, {data}, {prisma,auth,req}, info) {
            const Person_ID = auth(req)
            const {course_code,group_ref,session_ref,assign_num,reg_no, ...remData} = data
            
            remData.questions.forEach(async(ques)=>{
                await prisma.course_assigneval.updateMany({
                    where:{
                        course_code,
                        group_ref,
                        session_ref,
                        assign_num,
                        reg_no,
                        question_num: ques.question_num
                    },
                    data:{
                        mark:ques.mark
                    }
                })
            })
        }
    }
}