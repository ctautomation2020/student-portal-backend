const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports= {
    Query:{

        async login(parent,{data},{prisma},info){
            const user = await prisma.credentials.findOne({where:{
                Username:data.Username
            }})
            if(!user)
            throw new Error("username not found")
            const isMatch=await bcrypt.compare(data.Password,user.Password)
            if(!isMatch)
            throw "invalid password"
            const Register_No = user.Register_No
            const token = await jwt.sign({Register_No:user.Register_No},"ct_admin")
            return ({
                token,
                Register_No
            })
        }

    },

    Mutation:{
        
        async createUser(parent,{data},{prisma},info){
            data.Password = await bcrypt.hash(data.Password,8)
            const {Register_No,...refData} = data
            return await prisma.credentials.create({
                data:{
                    student:{
                        connect:{
                            Register_No:data.Register_No
                        }
                    },
                    ...refData
                }
            })
        },

        async updateUser(parent, {data}, {prisma}, info){
            if(data.Password){
                data.Password = await bcrypt.hash(data.Password,8)
            }
            const {Register_No,...refData} = data
            const cid = await prisma.credentials.findOne({where:{
                Register_No:data.Register_No
            }})
            return await prisma.credentials.update({
                where:{
                    Credentials_ID: cid.Credentials_ID
                },
                data:{
                    student:{
                        connect:{
                            Register_No:data.Register_No
                        }
                    },
                    ...refData
                }
            })
        }

    }
}