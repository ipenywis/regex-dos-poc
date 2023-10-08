import express from "express";
import getRoot from "../controllers/root/getRoot";
import addBlogPost from "../controllers/root/addBlogPost";

import { validateRequest } from "zod-express-middleware";
import { z } from "zod";

const root = express.Router();

root.get("/", getRoot);
root.post(
  "/blog/add",
  // validateRequest({
  //   body: z.object({
  //     title: z.string(),
  //     content: z.string(),
  //   }),
  // }),
  addBlogPost
);

export default root;
