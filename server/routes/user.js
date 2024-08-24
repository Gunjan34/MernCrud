const express = require("express");
const {getAllUsers,createUser,getSingleUser,updateUser,deleteUser} = require('../controllers/user');
const router = express.Router();


//All Routes are Here

router.get('/users',getAllUsers);

router.post('/users',createUser);

router.get('/users/single/:id',getSingleUser);

router.put("/users/:id",updateUser);

router.delete("/users/:id",deleteUser);
module.exports = router;