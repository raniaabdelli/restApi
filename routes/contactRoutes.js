const express= require("express")
const router=express.Router()
const{getContact,addContact,updateContact,deleteContact}=require('../controllers/contactControllers')
//10. In the server.js create four routes : 
//GET :  RETURN ALL USERS 
//POST :  ADD A NEW USER TO THE DATABASE 
//PUT : EDIT A USER BY ID 
//DELETE : REMOVE A USER BY ID 

router.get('/',getContact)
router.post("/post",addContact)
router.put("/put/:id",updateContact)
router.delete("/delete/:id",deleteContact)

module.exports=router