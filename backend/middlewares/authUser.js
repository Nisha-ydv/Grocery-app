import jwt from "jsonwebtoken";
export const authUser=(req,res,next)=>{
   const {token}=req.cookies;
     if(!token){
       return res.status(401).json({message:"Unauthorised",success:false}); 
     }
    try {
     
     const decoded=jwt.verify(token,process.env.JWT_SECRET);
     req.user=decoded.id;
     next();  
    } catch (error) {
       console.log("Authentication error:",error);
       return res.status(401).json({message:"Unauthorized",success:false}) 
    }
}

export default authUser;