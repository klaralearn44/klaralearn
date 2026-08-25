import { Router, type IRouter } from "express";
import healthRouter from "./health";
import publicTutorsRouter from "./public-tutors";

const router: IRouter = Router();

router.use(healthRouter);
router.use(publicTutorsRouter);

export default router;
