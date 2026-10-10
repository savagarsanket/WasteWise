
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const wasteRoutes = require("./routes/wasteRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS: allow configured frontend origin.
// Without FRONTEND_ORIGIN, allow local development origins.
const allowedOrigins = (
  process.env.FRONTEND_ORIGIN ||
  "http://localhost:5500,http://127.0.0.1:5500"
)
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin(origin, callback) {
      // Requests without Origin include local tools such as curl.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin is not allowed by CORS"));
    }
  })
);

app.use(express.json({ limit: "20kb" }));

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to WasteWise API!",
    endpoints: {
      health: "GET /api/health",
      categories: "GET /api/categories",
      analyzeWaste: "POST /api/waste"
    }
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "WasteWise backend is running",
    timestamp: new Date().toISOString()
  });
});

// All waste-related routes
app.use("/api", wasteRoutes);

// Unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
});

// Central error handler (must be registered last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`WasteWise backend running at http://localhost:${PORT}`);
});
