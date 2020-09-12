const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")
const smurfsModel = require("../smurfs/smurfs-model")


beforeEach(async () => {
    await db.seed.run
})

afterAll(async () => {
    await db.destroy()
})

describe("smurfs integration tests", () => {
    it("GET /smurfs", async () => {
        const res = await supertest(server).get("/smurfs")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(3)
        expect(res.body[0].name).toBe("Papa Smurf")
        console.log(res)
    })
})