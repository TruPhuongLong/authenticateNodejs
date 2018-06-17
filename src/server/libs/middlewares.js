import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
const MongoStore = require('connect-mongo')(session);

module.exports = app => {
    app.set("json spaces", 4);
    app.set("port", 3000);
    app.use(cors());
    app.use(bodyParser.json());

    //use sessions for tracking logins
    app.use(session({
        secret: 'work hard',
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: db
        })
    }))
}