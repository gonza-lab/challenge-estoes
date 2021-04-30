class NotFound extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 404;
    this.msg = message || 'Not Found: The resource is not found';
  }
}

module.exports = { NotFound };
