const usersmodel = require("../models/usersmodel");

const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const getdata = await usersmodel.findOne({
            where : {username:username}
        })

        if(!getdata) res.status(400).send('username atau password tidak sesuai')
        const resultLogin = bcrypt.compareSync(password,getdata.password)
        
        if(!resultLogin) res.status(400).send('username atau password tidak sesuai')
        return res.send('Berhasil')

    } catch (error) {
        res.status(400).send('ERROR Bos')
    }
}
const register = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hashSync(password,salt)

        const users = new usersmodel({
            username: username,
            password: hashedPassword,
            email: email,
        })
        const savedUser = await users.save();
        res.json(savedUser);
    } catch (error) {
        res.status(400).send('ERROR Bos')
    }
}

module.exports = {
    register,
    login
}

