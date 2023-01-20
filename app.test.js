const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/CreateQueue/alan")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/SendMessage/alan/1000/helloworld")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/ReceiveMessage/alan")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/DeleteMessage/alan/0")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
