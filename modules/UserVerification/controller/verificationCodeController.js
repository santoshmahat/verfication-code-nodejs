import { validateVerificationCode } from "../validator/validateVerificationCode";
import constants from "../../../constants/constants";

const TEST_VERIFICATION_CODE = constants.TEST_VERIFICATION_CODE;

const verificationCodeController = {
    verifiyCode: (req, res) => {
        try {
            const error = validateVerificationCode(req.body);
            if (error) {
                return res.status(400).json({
                    error,
                    success: false,
                });
            }
            const { verificationCode } = req.body;
            // code to ckeck fromdatabase
            if (TEST_VERIFICATION_CODE !== verificationCode) {
                return res.status(400).json({
                    success: false,
                    error: {
                        field: "verification code",
                        message:
                            "Invalid verification code. Please check your input.",
                    },
                });
            }

            return res.status(200).json({
                success: true,
                message: "Successfully verified.",
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Server error, please try again later.",
            });
        }
    },
};

export default verificationCodeController;
