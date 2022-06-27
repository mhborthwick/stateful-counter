import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser());

/**
 * Check server health
 */
app.get("/", (_, res) => {
  res.send("Health Check: GOOD");
});

/**
 * Get user
 */
app.get("/user", async (req, res) => {});

/**
 * Create user
 */
app.post("/user/create", async (req, res) => {});

/**
 * Get count
 */
app.get("/count", async (req, res) => {});

/**
 * Increment count
 */
app.post("/increment", async (req, res) => {});

/**
 * Decrement count
 */
app.post("/decrement", async (req, res) => {});

/**
 * Reset count
 */
app.post("/reset", (req, res) => {});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
