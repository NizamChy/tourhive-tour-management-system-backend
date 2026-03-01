/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);

    console.log("Connected to DB!");

    server = app.listen(envVars.PORT, () => {
      console.log(`Server is running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Promise.reject(new Error("Test unhandled rejection"));

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// throw new Error("Test uncaught exception");

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully...");
  if (server) {
    server.close(() => {
      console.log("Server closed. Exiting process.");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully...");
  if (server) {
    server.close(() => {
      console.log("Server closed. Exiting process.");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

process.on("SIGUSR2", () => {
  console.log("SIGUSR2 received, restarting server...");
  if (server) {
    server.close(() => {
      console.log("Server closed. Restarting process.");
      process.kill(process.pid, "SIGUSR2");
    });
  } else {
    process.kill(process.pid, "SIGUSR2");
  }
});

/**
 * unhandledRejection: This event is emitted whenever a Promise is rejected and no error handler is attached to the promise within a turn of the event loop. In this case, we log the error and gracefully shut down the server.
 * uncaughtException: This event is emitted when an uncaught JavaScript exception bubbles all the way back to the event loop. Similar to unhandledRejection, we log the error and shut down the server gracefully.
 * SIGTERM: This signal is sent to the process to request its termination. When the server receives this signal, we log a message and shut down the server gracefully.
 * SIGINT: This signal is sent when the user interrupts the process (e.g., by pressing Ctrl+C). We handle this signal similarly to SIGTERM, logging a message and shutting down the server gracefully.
 * SIGUSR2: This signal is often used by development tools (like nodemon) to indicate that the server should restart. When we receive this signal, we log a message, close the server, and then re-emit the signal to allow the process to restart.
 * By handling these events and signals, we ensure that our server can shut down gracefully, allowing any ongoing requests to complete and preventing potential data loss or corruption.
 */
