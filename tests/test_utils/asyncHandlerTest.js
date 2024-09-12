import asyncHandler from "../../src/utils/asyncHandler.js";

describe("asyncHandler", () => {
  it("should call the passed function with req, res, and next", async () => {
    const mockFunc = jest.fn().mockResolvedValue("success");
    const req = {};
    const res = {};
    const next = jest.fn();

    const handler = asyncHandler(mockFunc);
    await handler(req, res, next);

    expect(mockFunc).toHaveBeenCalledWith(req, res, next);
  });

  it("should handle resolved promises correctly", async () => {
    const mockFunc = jest.fn().mockResolvedValue("success");
    const req = {};
    const res = {};
    const next = jest.fn();

    const handler = asyncHandler(mockFunc);
    await handler(req, res, next);

    expect(next).not.toHaveBeenCalled();
  });

  it("should catch errors and pass them to next", async () => {
    const error = new Error("Something went wrong");
    const mockFunc = jest.fn().mockRejectedValue(error);
    const req = {};
    const res = {};
    const next = jest.fn();

    const handler = asyncHandler(mockFunc);
    await handler(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
