import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: [true, "Please provide stock symbol"],
    unique: true,
  },
  companyName: {
    type: String,
    required: [true, "Please provide company name"],
  },
  iconUrl: {
    type: String,
    required: [true, "Please provide icon URL"],
  },
  currentPrice: {
    type: Number,
    required: [true, "Please provide current price"],
  },
  lastDayTradedPrice: {
    type: Number,
    required: [true, "Please provide last day traded price"],
  },
});
