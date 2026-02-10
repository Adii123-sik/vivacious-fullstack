// import db from "../config/db.js";
// import fs from "fs";
// import path from "path";

// /* ================= GET ALL PARTNERS ================= */
// export const getPartners = (req, res) => {
//   db.query(
//     "SELECT * FROM partners ORDER BY id DESC",
//     (err, rows) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ message: "Failed to fetch partners" });
//       }
//       res.json(rows);
//     }
//   );
// };

// /* ================= GET SINGLE PARTNER ================= */
// export const getPartnerById = (req, res) => {
//   db.query(
//     "SELECT * FROM partners WHERE id = ?",
//     [req.params.id],
//     (err, rows) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ message: "Failed to fetch partner" });
//       }

//       if (!rows.length) {
//         return res
//           .status(404)
//           .json({ message: "Partner not found" });
//       }

//       res.json(rows[0]);
//     }
//   );
// };

// /* ================= ADD PARTNER ================= */
// export const addPartner = (req, res) => {
//   const { name } = req.body;
//   const logo = req.file
//     ? `/uploads/partners/${req.file.filename}`
//     : null;

//   if (!name || !logo) {
//     return res
//       .status(400)
//       .json({ message: "Name & logo required" });
//   }

//   db.query(
//     "INSERT INTO partners (name, logo) VALUES (?, ?)",
//     [name, logo],
//     (err) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ message: "Failed to add partner" });
//       }

//       res.json({ message: "Partner added successfully" });
//     }
//   );
// };

// /* ================= UPDATE PARTNER ================= */
// export const updatePartner = (req, res) => {
//   const { name } = req.body;
//   const { id } = req.params;

//   db.query(
//     "SELECT logo FROM partners WHERE id = ?",
//     [id],
//     (err, rows) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ message: "Failed to fetch partner" });
//       }

//       if (!rows.length) {
//         return res
//           .status(404)
//           .json({ message: "Partner not found" });
//       }

//       let logo = rows[0].logo;

//       if (req.file) {
//         // delete old image
//         if (logo) {
//           const filePath = path.join(
//             process.cwd(),
//             logo
//           );
//           if (fs.existsSync(filePath)) {
//             fs.unlinkSync(filePath);
//           }
//         }

//         logo = `/uploads/partners/${req.file.filename}`;
//       }

//       db.query(
//         "UPDATE partners SET name = ?, logo = ? WHERE id = ?",
//         [name, logo, id],
//         (err) => {
//           if (err) {
//             return res
//               .status(500)
//               .json({ message: "Failed to update partner" });
//           }

//           res.json({
//             message: "Partner updated successfully",
//           });
//         }
//       );
//     }
//   );
// };

// /* ================= DELETE PARTNER ================= */
// export const deletePartner = (req, res) => {
//   const { id } = req.params;

//   db.query(
//     "SELECT logo FROM partners WHERE id = ?",
//     [id],
//     (err, rows) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ message: "Failed to fetch partner" });
//       }

//       if (!rows.length) {
//         return res
//           .status(404)
//           .json({ message: "Partner not found" });
//       }

//       const logo = rows[0].logo;

//       if (logo) {
//         const filePath = path.join(
//           process.cwd(),
//           logo
//         );
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }

//       db.query(
//         "DELETE FROM partners WHERE id = ?",
//         [id],
//         (err) => {
//           if (err) {
//             return res
//               .status(500)
//               .json({ message: "Failed to delete partner" });
//           }

//           res.json({
//             message: "Partner deleted successfully",
//           });
//         }
//       );
//     }
//   );
// };


import db from "../config/db.js";

/* ================= GET ALL PARTNERS ================= */
export const getPartners = (req, res) => {
  db.query(
    "SELECT * FROM partners ORDER BY id DESC",
    (err, rows) => {
      if (err) {
        console.error("GET PARTNERS ERROR:", err);
        return res
          .status(500)
          .json({ message: "Failed to fetch partners" });
      }
      res.json(rows);
    }
  );
};

/* ================= GET SINGLE PARTNER ================= */
export const getPartnerById = (req, res) => {
  db.query(
    "SELECT * FROM partners WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.error("GET PARTNER ERROR:", err);
        return res
          .status(500)
          .json({ message: "Failed to fetch partner" });
      }

      if (!rows.length) {
        return res
          .status(404)
          .json({ message: "Partner not found" });
      }

      res.json(rows[0]);
    }
  );
};

/* ================= ADD PARTNER ================= */
export const addPartner = (req, res) => {
  const { name } = req.body;

  // ✅ Cloudinary image URL
  const logo = req.file ? req.file.path : null;

  if (!name || !logo) {
    return res
      .status(400)
      .json({ message: "Name & logo required" });
  }

  db.query(
    "INSERT INTO partners (name, logo) VALUES (?, ?)",
    [name, logo],
    (err) => {
      if (err) {
        console.error("ADD PARTNER ERROR:", err);
        return res
          .status(500)
          .json({ message: "Failed to add partner" });
      }

      res.json({
        message: "Partner added successfully",
      });
    }
  );
};

/* ================= UPDATE PARTNER ================= */
export const updatePartner = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  // ✅ New logo optional
  const newLogo = req.file ? req.file.path : null;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Name is required" });
  }

  let sql = `
    UPDATE partners SET
      name=?
  `;

  const values = [name];

  // 👉 Logo sirf tab update hogi jab nayi upload ho
  if (newLogo) {
    sql += `, logo=?`;
    values.push(newLogo);
  }

  sql += ` WHERE id=?`;
  values.push(id);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("UPDATE PARTNER ERROR:", err);
      return res
        .status(500)
        .json({ message: "Failed to update partner" });
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Partner not found" });
    }

    res.json({
      message: "Partner updated successfully",
    });
  });
};

/* ================= DELETE PARTNER ================= */
export const deletePartner = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM partners WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("DELETE PARTNER ERROR:", err);
        return res
          .status(500)
          .json({ message: "Failed to delete partner" });
      }

      if (result.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Partner not found" });
      }

      res.json({
        message: "Partner deleted successfully",
      });
    }
  );
};
