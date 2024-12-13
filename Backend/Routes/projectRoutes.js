import express from "express"
import { registerController } from "../Controllers/userRegister.js";

import  formidable from 'express-formidable';
import { isAdmin, requireSignIn } from "../middleware/adminAuth.js";
import { getProject, projectController } from "../Controllers/project.js";



let router=express.Router();






router.post('/create-project',formidable(),projectController);

router.get('/getProjects',getProject)









export default router;