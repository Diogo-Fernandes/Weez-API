const mongoose = require("mongoose");

// Schema variable
const Schema = mongoose.Schema;

// Tags
const watchedTagSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tag: {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    },
    
});

const WatchedTag = mongoose.model('WatchedTag', watchedTagSchema);

module.exports = WatchedTag;