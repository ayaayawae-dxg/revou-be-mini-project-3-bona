import { Router, Request, Response } from "express";
import shorten from "./handlers/shorten";
import { successRes } from "./helpers/response";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  successRes(res, {
    status: 200,
    message: "URL Shortener API",
  });
});

router.get(["/shorten", "/shorten/:short_url"], shorten.get);
router.post("/shorten", shorten.create);

export default router;
