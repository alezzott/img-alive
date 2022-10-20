import path from "path";
import crypto from "crypto";

import * as multer from "multer";
import * as dotenv from "dotenv";

dotenv.config();

export const storageTypes = {
  local: multer.diskStorage({
    destination: function (req, file, callback): void {
      callback(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) throw new Error();

        __filename = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, __filename);
      });
    },
  }),
};

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: process.env.STORAGE_TYPE,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req: any, file: { mimetype: string }, callback: any) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      throw new Error("Invalid file Type");
    }
  },
};
