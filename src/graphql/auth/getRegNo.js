const jwt=require('jsonwebtoken')

const getRegNo=(req)=>{
    const header = req.headers.authorization

    if(!header){
        throw new Error("invalid auth")
    }

    const token = header.replace('Bearer ','')
    const decoded = jwt.verify(token,"ct_admin")
    return 2018503557
    //return decoded.Register_No
}

export default getRegNo