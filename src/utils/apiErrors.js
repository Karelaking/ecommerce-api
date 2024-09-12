class CustomError extends Error {
  constructor(message, statusCode) {
    // Pass the message to the parent Error class
    super(message);

    // Set the name property to the name of this class
    this.name = this.constructor.name;

    // Custom property to store the status code
    this.statusCode = statusCode;

    // Capture the stack trace (excluding the constructor call from it)
    Error.captureStackTrace(this, this.constructor);
  }
}

// Example usage:
try {
  throw new CustomError("Something went wrong!", 400);
} catch (err) {
  console.error(err.name); // CustomError
  console.error(err.message); // Something went wrong!
  console.error(err.statusCode); // 400
  console.error(err.stack); // Stack trace
}
