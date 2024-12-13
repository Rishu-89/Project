

// import jwt from 'jsonwebtoken'

//   export const isAdmin=async(req,res,next)=>{
 
  
//   try {

//     const {email,password}=req.body;
//    let Admin="admin@gmail.com";
//    let code=54321;
//   if(email!=Admin && code!=password){
//    return res.status(401).send({
//       sucess:false,
//       message:"Unauthorized acess",

//     })
//   }
//    else{
//    let Admin="admin@gmail.com"
//     let token=await jwt.sign({Admin},process.env.JWT_SECRET,{expiresIn:"7d"})
//     req.user=token;
//   next();
//   }
    
//   } catch (error) {
    
//     console.log(error)
//     res.status(401).send({
//       sucess:false,
//       message:"Error in adminMiddleware"
//     })
//   }
// }


// export const requireSignIn=(req,res,next)=>{


//   try {


   
//     const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);




// next();
//   } catch (error) {
    
//    console.log(error)
//    return res.send({
//     message:"Error in login",
//     success:false
//    })
   

//   }
// }






// import jwt from 'jsonwebtoken'

//   export const isAdmin=async(req,res,next)=>{
 
  
//   try {

//     const {email,password}=req.body;
    
//    let Admin="admin@gmail.com";
//    let code=54321;
//   if(email!=Admin && code!=password){

//    return res.status(401).send({
    
//       sucess:false,
//       message:"Unauthorized acess",

//     })
//   }
//    else{
   
//    let Admin="admin@gmail.com"
//     let token=await jwt.sign({Admin},process.env.JWT_SECRET,{expiresIn:"7d"})
//     req.user=token;
//   next();
//   }
    
//   } catch (error) {
    
//     console.log(error)
//     res.status(401).send({
//       sucess:false,
//       message:"Error in adminMiddleware"
//     })
//   }
// }






import jwt from 'jsonwebtoken';

export const isAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const adminEmail = "admin@gmail.com"; // Admin email
    const adminPassword = "54321"; // Admin password (plain text, ideally this would be hashed)

    // Check if email and password match
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized access",
      });
    }

    // Generate token
    const token = jwt.sign({ email: adminEmail }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Attach the token to the request object (optional)
    req.user = { email: adminEmail, token };

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};














export const requireSignIn=(req,res,next)=>{


  try {


   
    const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);




next();
  } catch (error) {
    
   console.log(error)
   return res.send({
    message:"Error in login",
    success:false
   })
   

  }
}