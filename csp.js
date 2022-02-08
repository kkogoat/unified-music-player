module.exports = {
  dev: {
    "default-src": ["'self'"],
    "script-src": [
      "'self'",
    ],
    "style-src": [
      "'unsafe-inline'",
    ],
    "frame-src": [
      "www.youtube-nocookie.com",
    ],
    "media-src": [
      "blob:",
    ]
  },
  prod: {
    "default-src": "'self'",  // can be either a string or an array.
    "script-src": [
      "'self'",
    ],
  }
}