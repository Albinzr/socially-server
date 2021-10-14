const express = require("express");
const axios = require("axios");
//
const router = express.Router();

const permission = [
  "pages_show_list",
  "pages_manage_posts",
  "pages_read_engagement",
  "pages_read_user_content",
  "public_profile",

  "publish_to_groups",
  "user_photos",
  "user_posts",
  "user_videos",
].join();

const baseUrl = "https://graph.facebook.com/v12.0/";

export class Facebook {
  constructor() {}

  getUserToken() {}

  getPageTokens() {
    //take user token and apply for page token
  }

  createNewpost() {
    //description
    //images
    //video
    //mension
    //photo tags
    //sponser info
    //location info
  }
}

const fb = Facebook();
router.get("/userDetails", function (req, res, next) {
  res.send({ title: "Express" });
});

module.exports = router;
