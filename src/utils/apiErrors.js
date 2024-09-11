class ApiErrors extends Error {
  statusCode = 400;
  errors = [];
  message = "Something went wrong";
  stackt = "";
  constructor(message) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.message = message;
    this.data = null;
  }
}
