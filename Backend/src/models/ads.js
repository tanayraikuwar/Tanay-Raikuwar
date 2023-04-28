const mongoose = require("mongoose");
const adsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ads", adsSchema);
