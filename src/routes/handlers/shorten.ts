import { Request, Response, NextFunction } from "express";
import { generate } from "shortid";
import { createError } from "../helpers/createError";
import { successRes } from "../helpers/response";

const shortenList = new Map();

const get = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { short_url } = req.params;
    const findShorten = shortenList.get(short_url);

    if (!short_url || !findShorten) {
      createError({ message: "short_url not found", status: 404 });
    }

    res.redirect(301, findShorten);
  } catch (error) {
    next(error);
  }
};

const create = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { url } = req.body;

    if (!url) {
      createError({ message: "url not specified", status: 400 });
    }

    const key = generate();
    shortenList.set(key, url);

    successRes(res, {
      status: 200,
      message: "URL shortened successfully",
      data: { short_url: key, long_url: url },
    });
  } catch (error) {
    next(error);
  }
};

export default { get, create };
