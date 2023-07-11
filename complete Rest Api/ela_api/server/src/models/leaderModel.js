const {Schema, model, models}=require('mongoose')


const leaderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports=model("leader",leaderSchema)

// Leaders = models.leader ||model('Leader', leaderSchema)
// module.exports=Leaders
