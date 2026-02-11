import { Request, Response } from "express";
import { healthOk } from "../../constants/healh";

export const healthConfirm = async (req: Request, res:Response) => {
    return '{"status":"ok","db":"ok"}'
}

