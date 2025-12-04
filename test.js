const request = require("supertest");
const app = require("./app");

describe("GET API Testing", () => {
    it("GET /", async () => {
        const res = await request(app).get("/");
        console.log(res.text);
    });

    it("GET /will", async () => {
        const res = await request(app).get("/will");
        console.log(res.text);
    });

    it("GET /ready", async () => {
        const res = await request(app).get("/ready");
        console.log(res.text);
    });
});
