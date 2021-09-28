export const validateVerificationCode = (inputs = {}) => {
    const { verificationCode } = inputs;
    if (!verificationCode) {
        return {
            field: "verification code",
            message: "Verification code is empty.",
        };
    }
};
