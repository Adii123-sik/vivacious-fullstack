// import multer from "multer";
// import path from "path";
// import fs from "fs";

// /**
//  * 🔥 Dynamic storage creator
//  * @param {"testimonials" | "team" | "projects" | "blogs"} folder
//  */
// const createStorage = (folder) =>
//   multer.diskStorage({
//     destination: (req, file, cb) => {
//       const uploadPath = `uploads/${folder}`;

//       // folder exist nahi karta to bana do
//       if (!fs.existsSync(uploadPath)) {
//         fs.mkdirSync(uploadPath, { recursive: true });
//       }

//       cb(null, uploadPath);
//     },

//     filename: (req, file, cb) => {
//       cb(null, Date.now() + path.extname(file.originalname));
//     },
//   });

// /* ================= TESTIMONIAL UPLOAD ================= */
// export const uploadTestimonial = multer({
//   storage: createStorage("testimonials"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });

// /* ================= TEAM MEMBER UPLOAD ================= */
// export const uploadTeam = multer({
//   storage: createStorage("team"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });

// /* ================= PROJECT UPLOAD ================= */
// export const uploadProject = multer({
//   storage: createStorage("projects"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });

// /* ================= BLOG UPLOAD ================= */
// export const uploadBlog = multer({
//   storage: createStorage("blogs"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });



// /* ================= PARTNER UPLOAD ================= */
// export const uploadPartner = multer({
//   storage: createStorage("partners"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });



// /* ================= SETTINGS IMAGE UPLOAD ================= */
// export const uploadSettings = multer({
//   storage: createStorage("settings"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });


// /* ================= HISTORY UPLOAD ================= */
// export const uploadHistory = multer({
//   storage: createStorage("history"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });


// /* ================= SERVICES UPLOAD ================= */
// export const uploadService = multer({
//   storage: createStorage("services"),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   },
// });

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

/**
 * 🔥 Dynamic Cloudinary Storage
 */
const createStorage = (folder) =>
  new CloudinaryStorage({
    cloudinary,
    params: {
      folder: `rewy/${folder}`,
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
      public_id: (req, file) =>
        Date.now() + "-" + file.originalname.split(".")[0],
    },
  });

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image/")) {
    cb(new Error("Only image files allowed"), false);
  }
  cb(null, true);
};

/* ================= UPLOADS ================= */

export const uploadTestimonial = multer({
  storage: createStorage("testimonials"),
  fileFilter,
});

export const uploadTeam = multer({
  storage: createStorage("team"),
  fileFilter,
});

export const uploadProject = multer({
  storage: createStorage("projects"),
  fileFilter,
});

export const uploadBlog = multer({
  storage: createStorage("blogs"),
  fileFilter,
});

export const uploadPartner = multer({
  storage: createStorage("partners"),
  fileFilter,
});

export const uploadSettings = multer({
  storage: createStorage("settings"),
  fileFilter,
});

export const uploadHistory = multer({
  storage: createStorage("history"),
  fileFilter,
});

export const uploadService = multer({
  storage: createStorage("services"),
  fileFilter,
});
