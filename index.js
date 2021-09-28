import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import rootRouter from "./rootRouter";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

rootRouter(app);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
