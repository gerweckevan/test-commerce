require('dotenv').config()

module.exports = {
  secret: "admin",
  DB_URI_DEV: "mongodb://localhost:27017/myFirstDatabase",
  DB_URI:
    "mongodb+srv://admin:admin@test-commerce-cad.ate4o.mongodb.net/CAD?retryWrites=true&w=majority",
};
