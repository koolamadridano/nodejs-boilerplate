const cloudinary = require("../services/img-upload/cloundinary");

module.exports = {
  async uploadImg(req, res) {
    try {
      if (req.file.path) {
        await cloudinary.uploader
          .upload(req.file.path, {
            folder: "avatar",
          })
          .then((value) => {
            return res.status(200).json(value);
          })
          .catch((err) => {
            res.status(400).json({ message: "Cannot upload file" });
          });
      }
    } catch (error) {
      console.log(error);
    }
  },

  async deleteImg(req, res) {
    try {
      const avatar_publicId = req.params.id;
      await cloudinary.uploader
        .destroy(`avatar/${avatar_publicId}`)
        .then((value) => {
          if (value.result == "ok") {
            return res.status(200).json(value);
          }
          return res.status(400).json({ message: "File did not exist" });
        })
        .catch((err) => {
          return res.status(400).json({ message: "Cannot delete file" });
        });
    } catch (error) {
      console.log(error);
    }
  },
};
