const server = require("./server");
const request = require("supertest");

describe("server.js", () => {
  describe("schemesRouter.js", () => {
    test("posting scheme returns json", async () => {
      const someData = {
        scheme_name: "testing json"
      };
      const response = await request(server)
        .post("/api/schemes/")
        .send(someData);
      expect(response.type).toMatch(/json/i);
    });

    test("posting scheme returns id", async () => {
      const someData = {
        scheme_name: "testing id"
      };
      const response = await request(server)
        .post("/api/schemes/")
        .send(someData);
      expect(response.body.id).toBeTruthy();
    });
  });
});
