import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import testControllerApi from "./routes/test.api";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", testControllerApi);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
