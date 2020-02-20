import MyApp from "../src/MyApp"

describe("MyApp.ts", () => {

  it("should create an app", () => {
    const app = new MyApp();
    expect(app).toBeTruthy();
  })
})