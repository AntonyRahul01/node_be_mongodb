const userSchema = require("../model/user");
const userController = {
  insertUser: async (req, res) => {
    try {
      const { firstname, lastname, phone, email } = req.body;
      const result = await userSchema.create({
        firstname,
        lastname,
        phone,
        email,
      });
      
      res.status(200).json({
        status: 200,
        isSuccess: true,
        message: "User successfully created!",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        isSuccess: false,
        message: error.message,
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const result = await userSchema.find({});
      res.status(200).json({
        status: 200,
        isSuccess: true,
        message: "User successfully created!",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        isSuccess: false,
        message: error.message,
      });
    }
  },
};

module.exports = userController;
