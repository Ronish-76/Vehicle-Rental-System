const multer = require('multer');
const path = require('path');

// Storage strategy
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = 'uploads/';
    
    // Choose destination based on fieldname or other criteria
    if (file.fieldname === 'profileImage') {
      uploadPath += 'users/';
    } else if (file.fieldname === 'carImage') {
      uploadPath += 'cars/';
    } else if (file.fieldname === 'bikeImage') {
      uploadPath += 'bikes/';
    } else {
      uploadPath += 'others/';
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

// File validation
const checkFileType = (file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB Limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = upload;
