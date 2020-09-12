const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")
const smurfsModel = require("../smurfs/smurfs-model")
const { expectCt } = require("helmet")

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
    })
})