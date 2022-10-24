import path from 'path'
import crypto from 'crypto'

import multer from 'multer'
import * as dotenv from 'dotenv'

dotenv.config()

export const storageTypes = {
    local: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(
                null,
                path.resolve(__dirname, '..', '..', 'tmp', 'uploads')
            )
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) throw new Error()

                const fileName = `${hash.toString(
                    'hex'
                )}-$(file.fieldname)${path.extname(file.originalname)}.`

                cb(null, fileName)

                console.log(fileName)
            })
        },
    }),
}

export default {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: { storageTypes: process.env.STORAGE_TYPE },
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req: any, file: { mimetype: string }, cb: any) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            throw new Error('Invalid file Type')
        }
    },
}
