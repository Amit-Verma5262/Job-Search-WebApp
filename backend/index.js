import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import bodyParser from "body-parser";

dotenv.config({});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded());

// Updated CORS Configuration

const corsOptions = {
  origin: ['https://jobsearchui-git-main-amit-verma-s-projects.vercel.app','https://jobsearch-mav6i75p3-amit-verma-s-projects.vercel.app','http://localhost:5173'], // Add any other allowed origins here 
  methods:['GET','POST','PUT','DELETE'],
  Access-Control-Allow-Credentials: true,
  credentials: true, // Allow credentials (cookies, etc.),
};

// Apply CORS middleware
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
