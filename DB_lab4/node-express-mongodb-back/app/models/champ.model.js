module.exports = mongoose => {
    var schema = mongoose.Schema({
        full_name: String,
        age: String,
        gender: String,
        team: String
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Champ = mongoose.model("champ", schema);
    return Champ;
};