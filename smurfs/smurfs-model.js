const db = require("../data/config")

function get() {
    return db("smurfs")
}

function insert(smurf) {
    return db("smurfs").insert(smurf, "id").then(([id]) => get(id))
}

function findById(id) {
    return db("smurfs").where("id", id).first()
}

function remove(id) {
    return db("smurfs").where({ id }).delete()
}

module.exports = {
    get,
    insert,
    findById,
    remove
}