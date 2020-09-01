import * as express from "express";
import { mailGenerator ,sendMail } from "../../utils/nodemailer/nodemailerConfig";
import DB from "../../db";
import {HashContent} from "../../utils/security/hash";


const router = express.Router();

router.post("/", async (req: any, res, next) => {
    try {
        let user: any = req.body;
        user.password = HashContent(req.body.password);
        user.token = HashContent(req.body.email);
        let result: any = await DB.Users.Insert(user);
        let mailComposer = await mailGenerator();
        await sendMail(mailComposer,'<no-reply@blogaway.io>', req.body.email, 'Account Verification',
            `Welcome to the Blog Away family, we are so happy to have you! For the next step in the registration process your must verify by logging in using this link only one time, then registration will be complete:
            http://localhost:4000/login?id=${user.token}`);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;
