import UserDetails from "../model/userDetails.model.js";

// CREATE
export const createUserDetails = async (req, res) => {
  try {
    const userDetails = new UserDetails(req.body);
    const saved = await userDetails.save();
    return res.status(201).json({ message: "User details saved", data: saved });
  } catch (err) {
    console.error("Create error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// READ ALL
export const getAllUserDetails = async (req, res) => {
  try {
    const allUsers = await UserDetails.find().lean();
    return res.status(200).json({ data: allUsers });
  } catch (err) {
    console.error("Get all error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// READ ONE
export const getUserDetailsById = async (req, res) => {
  try {
    const user = await UserDetails.findById(req.params.id).lean();
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ data: user });
  } catch (err) {
    console.error("Get by ID error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE
export const updateUserDetails = async (req, res) => {
  try {
    const updated = await UserDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).lean();
    if (!updated) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ message: "User updated", data: updated });
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE
export const deleteUserDetails = async (req, res) => {
  try {
    const deleted = await UserDetails.findByIdAndDelete(req.params.id).lean();
    if (!deleted) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ message: "User deleted", data: deleted });
  } catch (err) {
    console.error("Delete error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserDetailsByQuery = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "ID query parameter is required" });
    }

    const user = await UserDetails.findById(id).lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ data: user });
  } catch (err) {
    console.error("Query search error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
