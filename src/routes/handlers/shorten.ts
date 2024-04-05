import { Request, Response, NextFunction } from "express";
import { createError } from "../helpers/createError";

const shortenList = new Map();

const getShorten = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { short_url } = req.params;
    const findShorten = shortenList.get(short_url)

    if (!short_url || !findShorten) {
      createError({ message: "short_url not found", statusCode: 404 })
    }

    res.redirect(301, findShorten);
  } catch (error) {
    next(error)
  }
};

export default { getShorten };
