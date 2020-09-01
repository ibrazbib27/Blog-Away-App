import * as express from "express";

import DB from "../../db";

const router = express.Router();

router.put(
    "/",
    async (req: any, res) => {
        try {
            let results: any = await DB.Users.Update(req.body);
            res.json(results);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
);

export default router;