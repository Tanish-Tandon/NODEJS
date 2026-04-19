










import express from "express";
import { readFile, writeFile, rm } from "fs/promises";
import crypto from "crypto";
import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";
import { Db, ObjectId } from "mongodb";
import { dir, error } from "console";
import { get } from "https";
import { extension } from "mime-types";
import { createDirectory, deleteDirectory, getDirectoryById, renameDirectory } from "../controllers/directoryController.js";

const router = express.Router();



router.param("parentDirId", validateIdMiddleware);
router.param("id", validateIdMiddleware);





// =========================
// GET DIRECTORY
// =========================
router.get("/:id?", getDirectoryById);



















// =========================
// CREATE DIRECTORY
// =========================
router.post("/:parentDirId?", createDirectory);



















// =========================
// RENAME DIRECTORY
// =========================
router.patch("/:id", renameDirectory);


































// =========================
// DELETE DIRECTORY
// =========================
router.delete("/:id",deleteDirectory);




export default router;



