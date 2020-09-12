const db = require("../data/config")

function get() {
    return db("smurfs")
}

async function create(data) {
    const [id] = await db("smurfs").insert(data)
    return findById(id)
}

function findById(id) {
    return db("smurfs").where("id", id).first()
}

function remove(id) {
    return db("smurfs").where({ id }).delete()
}

module.exports = {
    get,
    create,
    findById,
    remove
}