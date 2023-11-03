const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    imagePath: { type: String, required: true },
    thumbnailPath: { type: String },
    status: { type: String, enum: ['pending', 'processing', 'completed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;