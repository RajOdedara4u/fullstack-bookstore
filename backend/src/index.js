import express from "express";
const app = express();
import authRouter from "./router/auth-router.js";
import Userrouter from "./router/user-router.js";
import mongoCD from "./lib/db.js";
import { config } from "dotenv";
import errorMiddleware from "./middlewares/error-middleware.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
// CORS configuration
const coreOptions = {
  origin: process.env.NODE_ENV === "production" ? "*" : "http://localhost:5173",
  credentials: true,
};

app.use(cors(coreOptions));
config();
app.use(express.json());
app.use("/api", authRouter);
app.use("/api", Userrouter);
app.use(errorMiddleware);

// For access .env file secure data
dotenv.config();
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const PORT = process.env.PORT;
// Start the server after successful DB connection
mongoCD().then(() => {
  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
});
