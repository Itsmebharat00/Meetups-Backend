/** @format */

const mongoose = require("mongoose");

const MeetUpSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    speakers: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    dressCode: {
      type: String,
      enum: ["Smart casual", "Formal", "Casual", "Other"],
    },
    ageRestrictions: {
      type: String,
    },
    minimumAge: {
      type: Number,
      default: 18,
      min: 0,
    },

    tags: {
      type: [String],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const MeetUp = mongoose.model("Meetup", MeetUpSchema);

module.exports = MeetUp;
