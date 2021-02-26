module.exports = {
    Query: {
        async assessment(parent, {data}, {prisma}, info){
            return await prisma.course_assessment.findMany({
                where:{
                    ...data
                },
                orderBy:[
                    {
                        section:'asc'
                    },
                    {
                        question_num:'asc'
                    }
                ]
            })
        },
        async session_assessments(parent, {data}, {prisma}, info){
            const a =  await prisma.course_assessment.findMany({
                where:{
                    ...data
                },
                orderBy:{
                    assess_num:'asc'
                },
                select: {
                    assess_num: true
                },
                distinct: ["assess_num"]
            })
            const assess = []
            a.forEach((a)=>{
                assess.push(a.assess_num)
            })

            return assess
        }

    },

    Mutation: {
        async createAssessment(parent, {data}, {prisma,auth,req}, info){
            const Person_ID = auth(req)
            const {course_code,group_ref,session_ref,assess_num,entry_date, ...remData} = data
            remData.section.forEach(async(sec)=>{
                sec.questions.forEach(async(ques)=>{
                    await prisma.course_assessment.create({
                        data:{
                            course_list:{
                                connect: {
                                    course_code
                                }
                            },
                            course_reference_table_course_assessment_group_refTocourse_reference_table:{
                                connect: {
                                    reference_id: group_ref
                                }
                            },
                            course_reference_table_course_assessment_session_refTocourse_reference_table:{
                                connect: {
                                    reference_id: session_ref
                                }
                            },
                            assess_num,
                            entry_date,
                            section: sec.name,
                            ...ques

                        }
                    })
                })
            })

        }
    }
}