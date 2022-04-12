import { Router } from "express";
import * as controllers from "../controllers/cases.js";

const router = Router();

router.get("/cases", controllers.getCases);
router.get("/cases/:id", controllers.getCase);
router.post("/cases", controllers.createCase);
router.put("/cases/:id", controllers.updateCase);
router.delete("/cases/:id", controllers.deleteCase);

export default router;