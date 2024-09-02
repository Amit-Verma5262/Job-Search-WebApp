import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode =  jwt.verify(token, process.env.SECRET_KEY);
        // if(!decode){
        //     return res.status(401).json({
        //         message:"Invalid token",
        //         success:false
        //     })
        // };
        req.user=await User.findById(decode.id)
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;