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

    test("deleting scheme returns message", async () => {
      const response = await request(server).delete("/api/schemes/8");
      expect(response.body).toMatchObject({ removed: 1 });
    });

    test("deleting scheme returns 404 Not Found when could not find id", async () => {
      const response = await request(server).delete("/api/schemes/8");
      console.log("hahahah status", response.status);
      expect(response.status).toBe(404);
    });
  });
});
