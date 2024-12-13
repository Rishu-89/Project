




// import userModel from "../Model/userModel.js";

// export const registerController = async (req, res) => {
//   try {
//     let { name, email, phone, city } = req.body;
//     console.log(name, email, phone, city);
//     if (!name) {
//       return res.status(400).send({ message: "Name is Required" });
//     }
//     if (!email) {
//       return res.status(400).send({ message: "Email is Required" });
//     }
//     if (!phone) {
//       return res.status(400).send({ message: "Phone is Required" });
//     }
//     if (!city) {
//       return res.status(400).send({ message: "City is Required" });
//     }

//     const user = await new userModel({
//       name,
//       email,
//       phone,
//       city,
//     }).save();

//     res.status(201).send({
//       success: true,
//       message: "Submitted Successfully",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in registration",
//       error,
//     });
//   }
// };






import userModel from "../Model/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

  

    // Validating inputs
    if (!name) {
      return res.status(400).send({ message: "Full Name is required" });
    }
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!phone) {
      return res.status(400).send({ message: "Mobile number is required" });
    }
    if (!city) {
      return res.status(400).send({ message: "Area/City is required" });
    }

    // Saving to the database
    const user = await new userModel({
      name,// Matching the backend schema
      email,
      phone, // Matching the backend schema
      city // Matching the backend schema
    }).save();

    res.status(201).send({
      success: true,
      message: "Submitted successfully",
      user,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};











export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting users",
      error,
    });
  }
};
