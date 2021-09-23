const {User} = require("../models")

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

exports.findUser = async (req,res) => {
    try{
        const list = await User.find({})
        res.status(200).send({allUsers: list})
    } catch(error) {
        res.status(500).send({err: error})
    }
}

exports.updateUser = async (req, res) => {
    try{
        await User.updateOne(
            {name: req.body.filter},
            {$Set: {watched: req.body.update}}
        )
        res.status(200).send({user: update, email: req.params.email, message: "successfully updated Email"})
    } catch(error) {
        res.status(500).send({err: error})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const destroy = await User.findOneAndDelete({email: req.params.email})
        res.status(200).send({user: destroy, email: req.params.email, message: `${email}'s account has been destroyed'`})
    } catch (error) {
        res.status(500).send({err: error})
    }
}