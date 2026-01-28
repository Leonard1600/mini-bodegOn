import ExchangeRate from "../models/ExchangeRate.js";

export const getLatestRate = async (req, res) => {
  try {
    const rate = await ExchangeRate.findOne().sort({ date: -1 });
    res.json(rate);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exchange rate" });
  }
};
