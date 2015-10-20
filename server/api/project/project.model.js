'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  description: String,
  link: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  creator: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Project', ProjectSchema);