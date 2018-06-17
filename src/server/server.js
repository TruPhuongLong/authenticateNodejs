import express from 'express';
import consign from 'consign';

const app = express();



consign()
    .include("src/server/models")
    .then("src/server/libs/middlewares.js")
    .then("src/server/routes")
    .then("src/server/libs/boot.js")
    .into(app);




