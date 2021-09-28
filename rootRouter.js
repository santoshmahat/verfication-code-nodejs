import verificationCodeRoute from "./modules/UserVerification/routes/verificationCodeRoute";

const rootRouter = (app) => {
    app.use("/api/user", verificationCodeRoute);
};

export default rootRouter;
