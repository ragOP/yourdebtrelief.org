const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema2 = new Schema(
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
    collection: "visits2",
  }
);

module.exports = mongoose.model("Visits2", visitsSchema2);