module.exports = {
    Query: {
        async assess_evaluation(parent, {data}, {prisma}, info) {
            return await prisma.course_assesseval.findMany({
                where:{
                    ...data
                },
                orderBy:{
                    question_num:'asc'
                }
            })
        },

        async assessIsEval(parent,{data},{prisma},info){
            const {reg_no,...refData} = data
            const ques = await prisma.course_assessment.findMany({
                where:{
                    ...refData
                }
            })
            const quesEval = await prisma.course_assesseval.findMany({
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
        async createAssess_evaluation(parent, {data}, {prisma,auth,req}, info) {
            const Person_ID = auth(req)
            const {course_code,group_ref,session_ref,assess_num,reg_no, ...remData} = data
            
            remData.questions.forEach(async(ques)=>{
                await prisma.course_assesseval.create({
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
                        person_reference_table_course_assesseval_group_refToperson_reference_table:{
                            connect: {
                                Reference_ID: group_ref
                            }
                        },
                        person_reference_table_course_assesseval_session_refToperson_reference_table:{
                            connect: {
                                Reference_ID: session_ref
                            }
                        },
                        assess_num,
                        ...ques
                    }
                })
            })

        },

        async updateAssess_evaluation(parent, {data}, {prisma,auth,req}, info) {
            const Person_ID = auth(req)
            const {course_code,group_ref,session_ref,assess_num,reg_no, ...remData} = data
            
            remData.questions.forEach(async(ques)=>{
                await prisma.course_assesseval.updateMany({
                    where:{
                        course_code,
                        group_ref,
                        session_ref,
                        assess_num,
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