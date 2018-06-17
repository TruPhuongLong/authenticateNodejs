import express from 'express';
import consign from 'consign';

const app = express();


app.set("json spaces", 4);
app.set("port", 3000);

consign()
    .include("src/server/routes")
    .into(app);


app.listen(app.get("port"), () => console.log(`server listen on port ${app.get("port")}`));