import express from "express";
import accountRoutes from "./account";
import userRoutes from "./user";
import torrentRoutes from "./torrent";
import announcementRoutes from "./announcement";
import reportRoutes from "./report";
import adminRoutes from "./admin";
import requestRoutes from "./request";
import groupRoutes from "./group";
import wikiRoutes from "./wiki";
import protectTorrentRoutes from "./protectTorrent";
import { auth } from "../middleware/auth";
import { resendVerification } from "../controllers/resendVerification";
import reportRouter from "./report";

export {
  accountRoutes,
  userRoutes,
  torrentRoutes,
  announcementRoutes,
  reportRoutes,
  adminRoutes,
  requestRoutes,
  groupRoutes,
  wikiRoutes,
  protectTorrentRoutes,
};

const router = express.Router();

export const resendVerificationRoute = (mail) => {
  router.post("/account/resend-verification", auth, resendVerification(mail));
  return router;
};
