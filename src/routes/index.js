const {Router} = require("express")
const helloRouter = Router()
const {
    addUser,
    // findUser,
    updateUser,
    deleteUser, 
    login
} = require("../controllers")
const {testMiddle, hashPassword, decryptPassword} = require("../middleware")

// helloRouter.get("/user", findUser)
helloRouter.post("/user", hashPassword, addUser)
helloRouter.patch("/user", hashPassword, updateUser)
helloRouter.delete("/user/:email", deleteUser)
helloRouter.post("/user/login", login)

module.exports = helloRouter