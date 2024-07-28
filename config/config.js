require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 8083,
  },
  db: {
    url: process.env.DB_URL,
  },
};

module.exports = dev;
