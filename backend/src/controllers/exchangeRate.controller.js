import ExchangeRate from "../models/exchangeRate.js";

export const getCurrentRate = async (req, res) => {
  try {
    const rate = await ExchangeRate.findOne().sort({ createdAt: -1 });

    if (!rate) {
      return res.status(404).json({
        message: "No exchange rate available",
      });
    }

    res.status(200).json(rate);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching exchange rate",
      error: error.message,
    });
  }
};


