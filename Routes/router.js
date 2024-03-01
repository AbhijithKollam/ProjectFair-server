//  path to resolve each client request
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerConfig = require('../Middlewares/multerMiddleware')

// 1. import express 
const express = require("express");

// 2. create an object for the class router in express 
const router = new express.Router();

// 3. define paths 

                                        // syntax:
                                        // router.http_req_method("path to resolve", ()=>{
                                        //     how to resolve the request (controller function)
                                        // })
// user registration
router.post('/user/register',userController.register)

// user login
router.post('/user/login',userController.login)

// add new project
router.post('/project/add', jwtMiddleware, multerConfig.single('projectImage'),projectController.addProject)

// get project for home page
router.get('/project/home-project',projectController.getHomeProject)

// get all projects
router.get('/project/all-project',jwtMiddleware,projectController.getAllProject)

// get user projects
router.get('/project/user-project',jwtMiddleware,projectController.getUserProject)

// edit user project
router.put('/project/edit/:id',jwtMiddleware,multerConfig.single("projectImage"),projectController.editUserProject)

// delete user project
router.delete('/project/remove/:id',jwtMiddleware,projectController.deleteUserProject)
    

// 4. export router
module.exports = router;