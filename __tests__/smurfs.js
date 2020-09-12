const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")



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
        // expect(res.body).toBeGreaterThan(10)
        expect(res.body[0].name).toBe("Papa Smurf")
    })
    it("GET /smurfs/:id", async () => {
        const res = await supertest(server).get("/smurfs/2")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Smurfette")
    })
    it("POST /smurfs", async () => {
        const res = await supertest(server)
        .post("/smurfs")
        .send({ name: "Gargomel", age: 500})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Gargomel")
    })
    it("DELETES /smurf/:id", async () => {
        const res = await supertest(server).delete("/smurfs/9")
        expect(res.statusCode).toBe(204)
    })
})