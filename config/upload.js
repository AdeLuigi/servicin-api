const multer = require('multer');
const path = require('path');
const crypto = require('multer');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'tmp'),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
