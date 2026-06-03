import jwt from 'jsonwebtoken'

const admin_jwt_secret = process.env.admin_jwt_secret;

const adminMiddleware = (req,res,next)=>{
    const token = req.headers.token;
    const decoded = jwt.verify(token, admin_jwt_secret);

    if(decoded){
        req.adminId = decoded.adminId;
        next();
    }
    else{
        res.status(401).json({ message: "Unauthorized" });
    }   
}

export default adminMiddleware;