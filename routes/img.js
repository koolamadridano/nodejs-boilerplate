const express = require("express");
const router = express.Router();

const protected = require("../middleware/authentication");
const imgUploadController = require("../controllers/imgUploadController");

// [POST] api/img
// @Description: Create/Upload Img file
router.post("/img", protected.auth, (req, res) => {
  imgUploadController.uploadImg(req, res);
});

// [DELETE] api/img
// @Description: Delete img at cloudinary and db
router.delete("/img",  protected.auth, (req, res) => {
  imgUploadController.deleteImg(req, res);
});

module.exports = router;
