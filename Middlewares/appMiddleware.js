const appMiddleware= (req, res, next)=>{
    console.log("Inside App Middleware");
    next();     //mandatory
}
module.exports=appMiddleware