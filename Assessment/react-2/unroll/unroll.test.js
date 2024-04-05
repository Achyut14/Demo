const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 4x4 square array correctly", function () {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(input)).toEqual(expected);
  });

  it("unrolls a 3x3 square array correctly", function () {
    const input = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(input)).toEqual(expected);
  });

  it("unrolls a 2x2 square array correctly", function () {
    const input = [
      [1, 2],
      [3, 4]
    ];
    const expected = [1, 2, 4, 3];
    expect(unroll(input)).toEqual(expected);
  });

  it("handles an empty array", function () {
    const input = [];
    const expected = [];
    expect(unroll(input)).toEqual(expected);
  });

  it("handles a 1x1 array", function () {
    const input = [[5]];
    const expected = [5];
    expect(unroll(input)).toEqual(expected);
  });

});
