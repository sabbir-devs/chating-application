const multer = require("multer");

function uploader(subfolder_path, allow_file_types, max_file_size, error_msg) {
  // file upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

  // define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const filename =
        file.originalname
          .replace(fileExt, "")
          .toLocaleLowerCase()
          .split("")
          .join("-") +
        "-" +
        Date.now();
      cb(null, filename + fileExt);
    },
  });

  // preapre the file multer upload object
  const upload = multer({
    storage: storage,
    limits: {
        fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
        if(allow_file_types.includes(file.mimetype)){
            cb(null, true);
        }
        else{
            cb(createError(error_msg))
        }
    }
  })

  return upload;
}
module.exports = uploader;
