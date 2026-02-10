// import db from "../config/db.js";

// export const getTestimonials = (req, res) => {
//   const sql = `
//     SELECT id, name, role, image, rating, message
//     FROM testimonials
//     WHERE status = 1
//     ORDER BY id DESC
//   `;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       console.error("❌ TESTIMONIAL FETCH ERROR:", err);
//       return res.status(500).json({ message: "Database error" });
//     }

//     res.json(rows);
//   });
// };


// export const addTestimonial = (req, res) => {
//   try {
//     const body = req.body || {};
//     const { name, role, rating, message } = body;

//     const image = req.file
//       ? `/uploads/testimonials/${req.file.filename}`
//       : null;

//     if (!name || !role || !message) {
//       return res.status(400).json({ message: "Required fields missing" });
//     }

//     const sql = `
//       INSERT INTO testimonials (name, role, rating, message, image)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     db.query(
//       sql,
//       [name, role, rating || 5, message, image],
//       (err) => {
//         if (err) {
//           console.error("DB ERROR:", err);
//           return res.status(500).json({ message: "Database error" });
//         }

//         res.status(201).json({ message: "Review added successfully" });
//       }
//     );
//   } catch (err) {
//     console.error("SERVER ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };






// // UPDATE REVIEW
// export const updateTestimonial = (req, res) => {
//   const { id } = req.params;
//   const body = req.body || {};
//   const { name, role, rating, message } = body;

//   const image = req.file
//     ? `/uploads/testimonials/${req.file.filename}`
//     : null;

//   let sql = `
//     UPDATE testimonials
//     SET name=?, role=?, rating=?, message=?
//     ${image ? ", image=?" : ""}
//     WHERE id=?
//   `;

//   const values = image
//     ? [name, role, rating, message, image, id]
//     : [name, role, rating, message, id];

//   db.query(sql, values, (err) => {
//     if (err) {
//       console.error("UPDATE ERROR:", err);
//       return res.status(500).json({ message: "Update failed" });
//     }

//     res.json({ message: "Review updated successfully" });
//   });
// };



// // DELETE REVIEW
// export const deleteTestimonial = (req, res) => {
//   const { id } = req.params;

//   db.query("DELETE FROM testimonials WHERE id=?", [id], (err) => {
//     if (err) {
//       console.error("❌ DELETE ERROR:", err);
//       return res.status(500).json({ message: "Delete failed" });
//     }

//     res.json({ message: "Review deleted" });
//   });
// };


// export const getTestimonialById = (req, res) => {
//   const { id } = req.params;

//   db.query(
//     "SELECT * FROM testimonials WHERE id=?",
//     [id],
//     (err, rows) => {
//       if (err) {
//         console.error("FETCH ONE ERROR:", err);
//         return res.status(500).json({ message: "Database error" });
//       }

//       if (rows.length === 0) {
//         return res.status(404).json({ message: "Review not found" });
//       }

//       res.json(rows[0]);
//     }
//   );
// };






import db from "../config/db.js";

/* ================= GET ALL TESTIMONIALS ================= */
export const getTestimonials = (req, res) => {
  const sql = `
    SELECT id, name, role, image, rating, message
    FROM testimonials
    WHERE status = 1
    ORDER BY id DESC
  `;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error("TESTIMONIAL FETCH ERROR:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(rows);
  });
};

/* ================= GET SINGLE TESTIMONIAL ================= */
export const getTestimonialById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM testimonials WHERE id=?",
    [id],
    (err, rows) => {
      if (err) {
        console.error("FETCH ONE ERROR:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (rows.length === 0) {
        return res.status(404).json({ message: "Review not found" });
      }

      res.json(rows[0]);
    }
  );
};

/* ================= ADD TESTIMONIAL ================= */
export const addTestimonial = (req, res) => {
  try {
    const { name, role, rating, message } = req.body;

    // ✅ Cloudinary image URL
    const image = req.file ? req.file.path : null;

    if (!name || !role || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const sql = `
      INSERT INTO testimonials
      (name, role, rating, message, image, status)
      VALUES (?, ?, ?, ?, ?, 1)
    `;

    db.query(
      sql,
      [name, role, rating || 5, message, image],
      (err) => {
        if (err) {
          console.error("ADD TESTIMONIAL ERROR:", err);
          return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({
          message: "Review added successfully",
        });
      }
    );
  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= UPDATE TESTIMONIAL ================= */
export const updateTestimonial = (req, res) => {
  const { id } = req.params;
  const { name, role, rating, message } = req.body;

  // ✅ New image optional
  const image = req.file ? req.file.path : null;

  let sql = `
    UPDATE testimonials
    SET name=?, role=?, rating=?, message=?
  `;

  const values = [name, role, rating, message];

  if (image) {
    sql += `, image=?`;
    values.push(image);
  }

  sql += ` WHERE id=?`;
  values.push(id);

  db.query(sql, values, (err) => {
    if (err) {
      console.error("UPDATE TESTIMONIAL ERROR:", err);
      return res.status(500).json({ message: "Update failed" });
    }

    res.json({ message: "Review updated successfully" });
  });
};

/* ================= DELETE TESTIMONIAL ================= */
export const deleteTestimonial = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM testimonials WHERE id=?",
    [id],
    (err) => {
      if (err) {
        console.error("DELETE TESTIMONIAL ERROR:", err);
        return res.status(500).json({ message: "Delete failed" });
      }

      res.json({ message: "Review deleted successfully" });
    }
  );
};
