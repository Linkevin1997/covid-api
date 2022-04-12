import Case from "../models/case.js";

export const getCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCase = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Case.findById(id)
    
    if (result) {
      return res.json(result);
    }

    res.status(400).json({ message: "Case not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCase = async (req, res) => {
  try {
    const result = new Case(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCase = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Case.findByIdAndUpdate(id, req.body);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCase = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Case.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Case deleted!");
    }

    throw new Error("Case not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};