const {User} = require("../models")
const bcrypt = require("bcryptjs")

exports.addUser = async (req, res) => {
    try {
        console.log(req.user)
        const user = new User(req.body)
        await user.save()
        res.status(200).send({user: user, message: "User successfully added"})
    } catch (error) {
        res.status(500).send({err: error})
    }
}

exports.login = async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email })
        if (await bcrypt.compare(req.body.password, user.password)) {
        res.status(200).send({user, message: "login successful"})
        } else {
            throw new Error()
        }
    } catch(error) {
        res.status(500).send({err: error})
    }
}

exports.updateUser = async (req, res) => {
    try{
        await User.updateOne(
            {email: req.body.email},
            {$Set: {[req.body.key]: req.body.update}}
        )
        res.status(200).send({message: "successfully updated Email"})
    } catch(error) {
        res.status(500).send({err: error})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({email: req.params.email})
        res.status(200).send({message: `${email}'s account has been destroyed'`})
    } catch (error) {
        res.status(500).send({err: error})
    }
}