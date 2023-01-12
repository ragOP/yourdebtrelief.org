const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema4 = new Schema(
  {
    visits: {
        type: Number,
        },
    views: {
        type: Number,
        },
    positives: {
      type: Number,
      },
    negatives: {
      type: Number,
      },  
    calls: {
        type: Number,
        }, 
  },
  {
    collection: "visits4",
  }
);

module.exports = mongoose.model("Visits4", visitsSchema4);