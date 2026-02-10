// import db from "../config/db.js";
// import fs from "fs";

// /* ================= CREATE SERVICE ================= */
// export const createService = (req, res) => {
//   try {
//     const data = req.body;

//     if (req.file) {
//       data.service_banner_image = `/uploads/services/${req.file.filename}`;
//     }

//     const sql = "INSERT INTO services SET ?";
//     db.query(sql, data, (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Insert failed" });
//       }
//       res.json({
//         message: "Service created successfully",
//         id: result.insertId,
//       });
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Create service failed" });
//   }
// };

// /* ================= GET ALL SERVICES ================= */
// export const getServices = (req, res) => {
//   const sql = `
//     SELECT 
//     *
//     FROM services
//     ORDER BY id DESC
//   `;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Fetch failed" });
//     }
//     res.json(rows);
//   });
// };

// /* ================= GET SINGLE SERVICE ================= */
// export const getServiceById = (req, res) => {
//   db.query(
//     "SELECT * FROM services WHERE id = ?",
//     [req.params.id],
//     (err, rows) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Fetch failed" });
//       }

//       if (!rows.length) {
//         return res.status(404).json({ message: "Service not found" });
//       }

//       res.json(rows[0]);
//     }
//   );
// };

// /* ================= UPDATE SERVICE ================= */
// export const updateService = (req, res) => {
//   try {
//     const data = { ...req.body };

//     delete data.id;
//     delete data.created_at;
//     delete data.updated_at;

//     if (req.file) {
//       data.service_banner_image = `/uploads/services/${req.file.filename}`;
//     }

//     db.query(
//       "UPDATE services SET ? WHERE id = ?",
//       [data, req.params.id],
//       (err) => {
//         if (err) return res.status(500).json(err);
//         res.json({ message: "Service updated successfully" });
//       }
//     );
//   } catch {
//     res.status(500).json({ message: "Update failed" });
//   }
// };


// /* ================= DELETE SERVICE ================= */
// export const deleteService = (req, res) => {
//   db.query(
//     "SELECT service_banner_image FROM services WHERE id = ?",
//     [req.params.id],
//     (err, rows) => {
//       if (rows?.[0]?.service_banner_image) {
//         const imgPath = `.${rows[0].service_banner_image}`;
//         fs.unlink(imgPath, () => {});
//       }

//       db.query(
//         "DELETE FROM services WHERE id = ?",
//         [req.params.id],
//         (err2) => {
//           if (err2) {
//             console.error(err2);
//             return res.status(500).json({ message: "Delete failed" });
//           }
//           res.json({ message: "Service deleted successfully" });
//         }
//       );
//     }
//   );
// };



import db from "../config/db.js";

/* CREATE SERVICE */
export const createService = (req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.service_banner_image = req.file.path;
    }

    db.query("INSERT INTO services SET ?", data, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Insert failed" });
      }
      res.json({
        message: "Service created successfully",
        id: result.insertId,
      });
    });
  } catch {
    res.status(500).json({ message: "Create service failed" });
  }
};

/* GET ALL SERVICES */
export const getServices = (req, res) => {
  db.query("SELECT * FROM services ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ message: "Fetch failed" });
    res.json(rows);
  });
};

/* GET SINGLE SERVICE */
export const getServiceById = (req, res) => {
  db.query(
    "SELECT * FROM services WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.status(500).json({ message: "Fetch failed" });
      if (!rows.length)
        return res.status(404).json({ message: "Service not found" });
      res.json(rows[0]);
    }
  );
};

/* UPDATE SERVICE */
export const updateService = (req, res) => {
  try {
    const data = { ...req.body };

    delete data.id;
    delete data.created_at;
    delete data.updated_at;

    if (req.file) {
      data.service_banner_image = req.file.path;
    }

    db.query(
      "UPDATE services SET ? WHERE id = ?",
      [data, req.params.id],
      (err) => {
        if (err) return res.status(500).json({ message: "Update failed" });
        res.json({ message: "Service updated successfully" });
      }
    );
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
};

/* DELETE SERVICE */
export const deleteService = (req, res) => {
  db.query(
    "DELETE FROM services WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: "Delete failed" });
      res.json({ message: "Service deleted successfully" });
    }
  );
};
