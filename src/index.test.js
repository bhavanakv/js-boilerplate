import {expect} from "chai";
import {JSDOM} from "jsdom";
import fs from "fs";

describe("Our first test", () => {
    it("should pass", () => {
        expect(true).to.equal(true);
    });
});

describe("index.html", () => {
    it("should say Hello", (done) => {
        const index = fs.readFileSync("./src/index.html", "utf-8");
        const doc = new JSDOM(index.toString());

        const h1 = doc.window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("Hello World!");
        done();
    });
});
