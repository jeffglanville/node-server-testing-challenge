const express = require("express")
const Smurfs = require("./smurfs-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Smurfs.get())
    }catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{
        const smurf = await Smurfs.findById(req.params.id)
        if(!smurf) {
            return res.status(404).json({
                message: "Sorry the Smurf can not be found"
            })
        }
        res.json(smurf)
    }catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const smurf = await Smurfs.create(req.body)
        res.status(201).json(smurf)
    }catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        await Smurfs.remove(req.params.id)
        res.status(204).end()
    }catch(err) {
        next(err)
    }
})

module.exports = router