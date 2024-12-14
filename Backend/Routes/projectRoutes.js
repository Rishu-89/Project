import express from "express"


import  formidable from 'express-formidable';

import { getProject, projectController } from "../Controllers/project.js";



let router=express.Router();






router.post('/create-project',formidable(),projectController);

router.get('/getProjects',getProject)









export default router;