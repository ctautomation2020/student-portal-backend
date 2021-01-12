module.exports={
    Query:{
        async staffAlloted(parent, {data}, {prisma,req}, info){
            const staff = await prisma.subj_allot.findMany({
                where: {
                    ...data
                },
                select:{
                    staff_id: true,
                    sallot_id: true
                }
            })
            return staff[0]
        }
    },
}