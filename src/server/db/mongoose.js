import mongoose from 'mongoose';

mongoose.PromiseProvider = global.Promise;
mongoose.connect('mongodb://localhost:27017/AlbumApp');

module.exports = {mongoose};