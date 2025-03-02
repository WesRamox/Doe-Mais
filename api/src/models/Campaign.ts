import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bloodTypesNeeded: {
    type: [String], // Exemplo: ["A+", "O-", "B-"]
    required: true
  },
  donors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donor"
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Campaign", CampaignSchema);
