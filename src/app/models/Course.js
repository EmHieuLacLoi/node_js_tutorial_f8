const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require('slugify');

const Course = new Schema({
  name: { type: String, required: true }, // Ensure name is required
  des: { type: String },
  videoId: { type: String },
  img: { type: String },
  slug: { type: String, unique: true }
}, {
  timestamps: true
});

// Middleware to generate slug before saving
Course.pre('save', function(next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("courses", Course);
