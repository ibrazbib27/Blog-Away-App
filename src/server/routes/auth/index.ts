import * as express from "express";

import loginRouter from "./login";
import registerRouter from "./register";
import verifyRouter from "./verify"

const router = express.Router();

router.use("/login", loginRouter);
router.use("/verify", verifyRouter);
router.use("/register", registerRouter);

export default router;
