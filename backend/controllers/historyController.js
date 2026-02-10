// import db from "../config/db.js";

// /* ================= GET ALL ================= */
// export const getAllHistory = async (req, res) => {
//   try {
//     const [rows] = await db
//       .promise()
//       .query(
//         "SELECT id, year, subtitle, title, description, image FROM history ORDER BY year ASC"
//       );

//     res.json(rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// /* ================= GET BY ID ================= */
// export const getHistoryById = async (req, res) => {
//   try {
//     const [rows] = await db.promise().query(
//       "SELECT * FROM history WHERE id = ?",
//       [req.params.id]
//     );
//     res.json(rows[0]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// /* ================= ADD ================= */
// export const addHistory = async (req, res) => {
//   try {
//     const image = req.file
//       ? `/uploads/history/${req.file.filename}`
//       : null;

//     const { year, subtitle, title, description } = req.body;

//     const sql = `
//       INSERT INTO history (year, subtitle, title, description, image)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     await db.promise().query(sql, [
//       year,
//       subtitle,
//       title,
//       description,
//       image,
//     ]);

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// /* ================= UPDATE ================= */
// export const updateHistory = async (req, res) => {
//   try {
//     const image = req.file
//       ? `/uploads/history/${req.file.filename}`
//       : req.body.image;

//     const { year, subtitle, title, description } = req.body;

//     const sql = `
//       UPDATE history
//       SET year=?, subtitle=?, title=?, description=?, image=?
//       WHERE id=?
//     `;

//     await db.promise().query(sql, [
//       year,
//       subtitle,
//       title,
//       description,
//       image,
//       req.params.id,
//     ]);

//     res.json({ success: true });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// /* ================= DELETE ================= */
// export const deleteHistory = async (req, res) => {
//   try {
//     await db.promise().query(
//       "DELETE FROM history WHERE id=?",
//       [req.params.id]
//     );
//     res.json({ success: true });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


import db from "../config/db.js";

/* ================= GET ALL ================= */
export const getAllHistory = async (req, res) => {
  try {
    const [rows] = await db
      .promise()
      .query(
        "SELECT id, year, subtitle, title, description, image FROM history ORDER BY year ASC"
      );

    res.json(rows);
  } catch (error) {
    console.error("GET HISTORY ERROR:", error);
    res.status(500).json({ error: "DB error" });
  }
};

/* ================= GET BY ID ================= */
export const getHistoryById = async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM history WHERE id = ?",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "History not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("GET HISTORY BY ID ERROR:", error);
    res.status(500).json({ error: "DB error" });
  }
};

/* ================= ADD ================= */
export const addHistory = async (req, res) => {
  try {
    // ✅ Cloudinary image URL
    const image = req.file ? req.file.path : null;

    const { year, subtitle, title, description } = req.body;

    if (!year || !title) {
      return res
        .status(400)
        .json({ message: "Required fields missing" });
    }

    const sql = `
      INSERT INTO history (year, subtitle, title, description, image)
      VALUES (?, ?, ?, ?, ?)
    `;

    await db.promise().query(sql, [
      year,
      subtitle,
      title,
      description,
      image,
    ]);

    res.json({ success: true, message: "History added" });
  } catch (error) {
    console.error("ADD HISTORY ERROR:", error);
    res.status(500).json({ error: "Insert failed" });
  }
};

/* ================= UPDATE ================= */
export const updateHistory = async (req, res) => {
  try {
    const { year, subtitle, title, description } = req.body;

    // ✅ New image optional
    const image = req.file ? req.file.path : null;

    if (!year || !title) {
      return res
        .status(400)
        .json({ message: "Required fields missing" });
    }

    let sql = `
      UPDATE history SET
        year=?,
        subtitle=?,
        title=?,
        description=?
    `;

    const values = [
      year,
      subtitle,
      title,
      description,
    ];

    // 👉 Image sirf tab update hogi jab nayi upload ho
    if (image) {
      sql += `, image=?`;
      values.push(image);
    }

    sql += ` WHERE id=?`;
    values.push(req.params.id);

    await db.promise().query(sql, values);

    res.json({ success: true, message: "History updated" });
  } catch (error) {
    console.error("UPDATE HISTORY ERROR:", error);
    res.status(500).json({ error: "Update failed" });
  }
};

/* ================= DELETE ================= */
export const deleteHistory = async (req, res) => {
  try {
    await db.promise().query(
      "DELETE FROM history WHERE id=?",
      [req.params.id]
    );

    res.json({ success: true, message: "History deleted" });
  } catch (error) {
    console.error("DELETE HISTORY ERROR:", error);
    res.status(500).json({ error: "Delete failed" });
  }
};
