import { Router, Request, Response } from "express";
import shorten from "./handlers/shorten";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const status = 200;
  res.status(status).send({
    success: true,
    status: status,
    message: "URL Shortener API",
  });
});

router.get(["/shorten", "/shorten/:short_url"], shorten.get);
router.post("/shorten", shorten.create);

export default router;
