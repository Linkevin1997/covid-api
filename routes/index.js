import { Router } from "express";
import casesRoutes from "./cases.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", casesRoutes);

export default router;