
import projectModel from "../Model/projectModel.js";
import fs from 'fs'

export const projectController=async(req,res)=>{
         
  try {
    const { name, projectName,location} =req.fields;

    const { photo } = req.files;
   
    
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !projectName:
        return res.status(500).send({ error: "projectName is Required" });
      case !location:
        return res.status(500).send({ error: "location is Required" });
      
      case photo && photo.size > 50000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 5mb" });
    }
    const project = new projectModel({name,projectName,location});

    if (photo) {
   
      project.photo.data = fs.readFileSync(photo.path);
 
      project.photo.contentType = photo.type;
    }
    await project.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      project,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating project",
    });
  }

}






export const getProject = async (req, res) => {
  try {
    const projects = await projectModel.find({});
    res.status(200).send({
      success: true,
      message: "All Projects",
      projects: projects.map(project => ({
        ...project._doc, 
        photo: project.photo ? `data:${project.photo.contentType};base64,${project.photo.data.toString('base64')}` : null,
      })),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting projects",
      error: error.message,
    });
  }
};
