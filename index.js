const app = require("./app");

app.listen(process.env.DATABASE_URL || process.env.PORT || 3000);
