const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema3 = new Schema(
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
    collection: "visits3",
  }
);

module.exports = mongoose.model("Visits3", visitsSchema3);