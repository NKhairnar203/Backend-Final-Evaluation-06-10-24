const User = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    res.status(200).json({ OneUser: user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

const updateUserByID = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, password }
    );
    res.status(200).json({ UpdateUser: user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching for update data.." });
  }
}

const deleteUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "User successfully Deleted.." });
  } catch (error) {
    res.status(500).json({ message: "Error Delete.." });
  }
};

module.exports = { getUsers, getUserByID, updateUserByID, deleteUserByID };
