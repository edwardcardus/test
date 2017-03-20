import {} from "jasmine";
import { TimeCode } from "../objects/time-code";

describe("The TimeCode class", () => {
  describe("add function", () => {
    let timeCode: TimeCode = new TimeCode(0, 59, 59, 24);
    timeCode.add(new TimeCode(0, 0, 0, 1), 25);

    it("should equal 01:00:00:00 when given 00:59:59:24 and 00:00:00:01 at 25fps", () => expect(timeCode).toEqual(new TimeCode(1, 0, 0, 0)));
  });

  describe("toString function", () => {
    let timeCode: TimeCode = new TimeCode(1, 2, 3, 25);

    it("should equal '01:02:03:25' when given 01:02:03:25", () => expect(timeCode.toString()).toBe("01:02:03:25"));
  });
});
