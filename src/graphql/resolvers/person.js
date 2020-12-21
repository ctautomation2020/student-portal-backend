module.exports={
    Query:{

        async allPersons(parent, args, {prisma}, info) {
            return await prisma.person.findMany()
        },
    },
}

