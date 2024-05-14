const User = require('../models/user-model');
// const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: 'Email Already exists' });
    }

    const userCreated = await User.create({ username, email, phone, password });
    // console.log('userCreated::', userCreated);
    // const token = await userCreated.generateToken();
    // console.log('token:', token);

    res.status(200).json({
      User: userCreated,
      token: await userCreated.generateToken(),
      // token: token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json('internal server error');
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // compare password
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: 'Login Successful',
        token: await userExist.generateToken(),
        // token: token,
        userId: userExist._id.toString(),
      });
    }
  } catch (error) {
    res.status(500).json('internal server error');
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from the user Route: ${error}`);
  }
};

module.exports = { register, login, user };
