const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports= {
    Query:{

        async student_auth_login(parent,{data},{prisma},info){
            const [user] = await prisma.user_info.findMany({where:{
                username: data.username
                },
            })
            if(!user)
            throw new Error("username not found")
            const isMatch=await bcrypt.compare(data.password,user.password)
            if(!isMatch)
            throw "invalid password"
            
            const token = await jwt.sign({"username":user.username,"user_role": user.user_role},"ct_admin")
            //console.log(token)
            return ({
                token,
                Register_No:user.username,
                user_role: user.user_role
            })
        }

    },

    Mutation:{
        
        async auth_createUser(parent,{data},{prisma},info){
            data.password = await bcrypt.hash(data.password,8)
            
            return await prisma.user_info.create({
                data:{
                    ...data
                }
            })
        },

        async auth_updateUser(parent, {data}, {prisma}, info){
            if(data.password){
                data.password = await bcrypt.hash(data.password,8)
            }
            
            const cid = await prisma.user_info.findOne({where:{
                username:data.username
            }})
            return await prisma.user_info.update({
                where:{
                    user_ID: cid.user_ID
                },
                data:{
                    ...data
                }
            })
        }

    }
}