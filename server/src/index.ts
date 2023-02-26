// Print stack trace on uncaught exceptions
process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1)
})

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import Logger from "./utils/logger";
import { GetServerMode, GetServerPort, ValidateEnv } from "./utils/env-handler";

ValidateEnv();

const SERVER_PORT = GetServerPort();
const SERVER_MODE = GetServerMode();

Logger.info(`Running server in "${SERVER_MODE}" mode!`);

const app = express();

app.use(morgan(SERVER_MODE === "prod" ? "combined" : "dev"))

app.listen(SERVER_PORT, () => {
  Logger.success(`Ecommerce Website server listening on port ${SERVER_PORT}!`);
  if (SERVER_MODE === "dev") {
    Logger.info(`You can access the server at: http://localhost:${SERVER_PORT}`)
  }
})
