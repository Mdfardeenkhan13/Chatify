import express from "express";
import authRoutes from "./routes/authRoute.js"
import messageRoutes from "./routes/messageRoute.js"
import path from "path";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js"

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
    connectDB();
});