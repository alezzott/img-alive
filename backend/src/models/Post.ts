import { unlink } from "fs";
import { resolve } from "path";
import { promisify } from "util";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export interface PostImageData {
  name: string;
  size: number;
  key?: string;
  url: string;
}

export async function uploadImage({ name }: PostImageData) {
  await prisma.uploadImage.create({
    name,
  });
}

// PostSchema.pre("save", function () {
//   if (!this.url) {
//     this.url = `${process.env.APP_URL}/files/${this.key}`;
//   }*
// });

// PostSchema.pre("remove", function () {
//   if (process.env.STORAGE_TYPE === "local") {
//     return s3
//       .deleteObject({
//         Bucket: "local",
//         key: this.key,
//       })
//       .promise();
//   } else {
//     return promisify(unlink)(
//       resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
//     );
//   }
// });

// export default model();
