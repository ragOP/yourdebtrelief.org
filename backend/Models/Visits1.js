const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema1 = new Schema(
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
    collection: "visits1",
  }
);

module.exports = mongoose.model("Visits1", visitsSchema1);