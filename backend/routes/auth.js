const router = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs");

//Sign Up

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body
        const hashpassword = bcrypt.hashSync(password)
        const user = new User({ email, username, password: hashpassword })
        await user.save().then(() => res.status(200).json({ message: "Sign Up Successful." })
        )
    } catch (error) {
        res.status(200).json({ message: "User Already Exists" })
    }
})

//Sign In

router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json({ message: "Please sign up first." })
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Password is not correct" })
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ others })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "An error occurred during sign-in" })
    }

})

module.exports = router