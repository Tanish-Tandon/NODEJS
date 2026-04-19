










































import express from "express";
import { createWriteStream } from "fs";
import { rm, writeFile } from "fs/promises";
import path from "path";
import directoriesData from "../directoriesDB.json" with { type: "json" };
import filesData from "../filesDB.json" with { type: "json" };

import crypto from "crypto";
import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";
import { ObjectId } from "mongodb";
import { error } from "console";
import { deleteFile, getFile, renameFile, uploadFile } from "../controllers/fileController.js";















const router = express.Router();

router.param("parentDirId", validateIdMiddleware);
router.param("id", validateIdMiddleware);










router.post("/:parentDirId?", uploadFile);























// =========================
// GET FILE
// =========================
router.get("/:id", getFile);































// =========================
// RENAME FILE
// =========================
router.patch("/:id",renameFile);




























// =========================
// DELETE FILE
// =========================
router.delete("/:id",deleteFile);















export default router;


















