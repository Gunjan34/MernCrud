const userModel = require("../models/user")
async function getAllUsers(req,res){
    try {
     const allUsers = await userModel.find({});
     if(allUsers){
        return res.status(200).json(allUsers);
    }
   } catch (error) {
     return res.status(400).json(error);
   }
//  res.send("hello i am gunjan");
}
  
async function createUser(req,res){
  const {name,email,age} = req.body;
  try {
    if(name && email && age){
      const newUser = userModel({
        name:name,
        email:email,
        age:age,
      });
      const saved_user = await newUser.save();
      return res.status(201).json({msg:"success"});
    }else{
      return res.status(400).json({msg:"All fields are required.."})
    }
    
  } catch (error) {
    return res.status(400).json({error})
  }
}

async function getSingleUser(req,res){
const {id}= req.params;
try {
  if (id){
    const getSingleData = await userModel.findById(id);
    return res.status(200).json(getSingleData);
  }else{
     return res.status(400).json({msg:"id not found"});
  }
} catch (error) {
  return res.status(400).json(error);
}
}
async function updateUser(req,res){
  const {id}= req.params;
  try {
    if (id){
      const getUpdateData = await userModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json(getUpdateData);
    }else{
       return res.status(400).json({msg:"id not found"});
    }
  } catch (error) {
    return res.status(400).json(error);
  }
}
async function deleteUser(req,res){
 const {id} = req.params;
 try {
  if (id){
    const deleteUserData = await userModel.findByIdAndDelete(id);
    return res.status(200).json(deleteUserData);
  }else{
     return res.status(400).json({msg:"id not found"});
  }
} catch (error) {
  return res.status(400).json(error);
}
}
module.exports={
    getAllUsers,createUser,getSingleUser,updateUser,deleteUser
};   