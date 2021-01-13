module.exports={
    Query:{
        async staffAlloted(parent, {data}, {prisma,req}, info){
            const staff = await prisma.subj_allot.findMany({
                include:{
                    person: true
                },
                where: {
                    ...data
                }
            })
            return staff[0]
        },
        async studentCourseDetails(parent,{data}, {prisma,req}, info){
            return await prisma.subj_allot.findOne({
                where: {
                    ...data
                }
            })
        }
    },
}