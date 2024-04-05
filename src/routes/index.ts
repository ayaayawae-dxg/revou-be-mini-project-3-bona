import { Router, Request, Response } from "express";
import shorten from "./handlers/shorten";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({
    status: "success",
    message: "URL Shortener API",
  });
});

router.get("/shorten/:short_url", shorten.getShorten)

export default router;
