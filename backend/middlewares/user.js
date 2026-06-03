import jwt from 'jsonwebtoken'

const user_jwt_secret = process.env.user_jwt_secret;

const userMiddleware = (req,res,next)=>{
    const token = req.headers.token;
    const decoded = jwt.verify(token, user_jwt_secret);

    if(decoded){
        req.userId = decoded.userId;
        next();
    }
    else{
        res.status(401).json({ message: "Unauthorized" });
    }   
}

export default userMiddleware;

