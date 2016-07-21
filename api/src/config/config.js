// Some configuration options will be here

module.exports = {
  "app": {
    "root": "/",
    "port": 3001,
    "env": "development",
    "keys": ["your-session-secret"]
  },
  "mongo": {
      "url": "mongodb://localhost/notebook_online"
  }
};