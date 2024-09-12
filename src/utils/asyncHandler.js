const asyncHandler = (func) => {
  return (error, req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
