// import db from "../config/db.js";

// /* GET ALL BLOGS */
// export const getBlogs = (req, res) => {
//   db.query(
//     "SELECT * FROM blogs ORDER BY id DESC",
//     (err, rows) => {
//       if (err) {
//         console.error("BLOG FETCH ERROR:", err);
//         return res.status(500).json({ message: "DB error" });
//       }
//       res.json(rows);
//     }
//   );
// };

// /* GET SINGLE BLOG */
// export const getBlogById = (req, res) => {
//   db.query(
//    "SELECT * FROM blogs WHERE id=?",

//     [req.params.id],
//     (err, rows) => {
//       if (err || rows.length === 0) {
//         return res.status(404).json({ message: "Blog not found" });
//       }
//       res.json(rows[0]);
//     }
//   );
// };

// /* ADD BLOG */
// export const addBlog = (req, res) => {
//   const {
//     title,
//     category,
//     author,
//     short_desc,
//     content,
//   } = req.body;

//   const image = req.file
//     ? `/uploads/blogs/${req.file.filename}`
//     : null;

//   if (!title || !content) {
//     return res
//       .status(400)
//       .json({ message: "Required fields missing" });
//   }

//   const sql = `
//     INSERT INTO blogs
//     (title, category, author, short_desc, content, image, status)
//     VALUES (?, ?, ?, ?, ?, ?, 1)
//   `;

//   db.query(
//     sql,
//     [
//       title,
//       category,
//       author,
//       short_desc,
//       content,
//       image,
//     ],
//     (err) => {
//       if (err) {
//         console.error("ADD BLOG ERROR:", err);
//         return res.status(500).json({ message: "DB error" });
//       }
//       res.json({ message: "Blog added" });
//     }
//   );
// };

// /* UPDATE BLOG */
// export const updateBlog = (req, res) => {
//   const {
//     title,
//     category,
//     author,
//     short_desc,
//     content,
//   } = req.body;

//   const image = req.file
//     ? `/uploads/blogs/${req.file.filename}`
//     : null;

//   if (!title || !content) {
//     return res
//       .status(400)
//       .json({ message: "Required fields missing" });
//   }

//   let sql = `
//     UPDATE blogs SET
//       title=?,
//       category=?,
//       author=?,
//       short_desc=?,
//       content=?
//   `;

//   const values = [
//     title,
//     category,
//     author,
//     short_desc,
//     content,
//   ];

//   if (image) {
//     sql += `, image=?`;
//     values.push(image);
//   }

//   sql += ` WHERE id=?`;
//   values.push(req.params.id);

//   db.query(sql, values, (err) => {
//     if (err) {
//       console.error("UPDATE BLOG ERROR:", err);
//       return res
//         .status(500)
//         .json({ message: "Update failed" });
//     }
//     res.json({ message: "Blog updated" });
//   });
// };

// /* DELETE BLOG */
// export const deleteBlog = (req, res) => {
//   db.query(
//     "DELETE FROM blogs WHERE id=?",
//     [req.params.id],
//     (err) => {
//       if (err) {
//         console.error("DELETE BLOG ERROR:", err);
//         return res
//           .status(500)
//           .json({ message: "Delete failed" });
//       }
//       res.json({ message: "Blog deleted" });
//     }
//   );
// };

import db from "../config/db.js";

/* ================= GET ALL BLOGS ================= */
export const getBlogs = (req, res) => {
  db.query(
    "SELECT * FROM blogs ORDER BY id DESC",
    (err, rows) => {
      if (err) {
        console.error("BLOG FETCH ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json(rows);
    }
  );
};

/* ================= GET BLOG BY SLUG ================= */
export const getBlogBySlug = (req, res) => {
  db.query(
    "SELECT * FROM blogs WHERE slug = ? AND status = 1",
    [req.params.slug],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ message: "DB error" });
      }

      if (!rows.length) {
        return res.status(404).json({ message: "Blog not found" });
      }

      res.json(rows[0]);
    }
  );
};

/* ================= ADD BLOG ================= */
export const addBlog = (req, res) => {
  const {
    title,
    slug,
    category,
    author,
    short_desc,
    content,
  } = req.body;

  const image = req.file ? req.file.path : null;

  if (!title || !content || !slug) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const sql = `
    INSERT INTO blogs
    (title, slug, category, author, short_desc, content, image, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, 1)
  `;

  db.query(
    sql,
    [
      title,
      slug,
      category,
      author,
      short_desc,
      content,
      image,
    ],
    (err) => {
      if (err) {
        console.error("ADD BLOG ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json({ message: "Blog added successfully" });
    }
  );
};

/* ================= UPDATE BLOG ================= */
export const updateBlog = (req, res) => {
  const {
    title,
    slug,
    category,
    author,
    short_desc,
    content,
  } = req.body;

  const image = req.file ? req.file.path : null;

  if (!title || !content || !slug) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  let sql = `
    UPDATE blogs SET
      title=?,
      slug=?,
      category=?,
      author=?,
      short_desc=?,
      content=?
  `;

  const values = [
    title,
    slug,
    category,
    author,
    short_desc,
    content,
  ];

  if (image) {
    sql += `, image=?`;
    values.push(image);
  }

  sql += ` WHERE id=?`;
  values.push(req.params.id);

  db.query(sql, values, (err) => {
    if (err) {
      console.error("UPDATE BLOG ERROR:", err);
      return res.status(500).json({ message: "Update failed" });
    }
    res.json({ message: "Blog updated successfully" });
  });
};

/* ================= DELETE BLOG ================= */
export const deleteBlog = (req, res) => {
  db.query(
    "DELETE FROM blogs WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) {
        console.error("DELETE BLOG ERROR:", err);
        return res.status(500).json({ message: "Delete failed" });
      }
      res.json({ message: "Blog deleted successfully" });
    }
  );
};



/* ================= GET BLOG BY ID ================= */
export const getBlogById = (req, res) => {
  db.query(
    "SELECT * FROM blogs WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ message: "DB error" });
      }

      if (!rows.length) {
        return res.status(404).json({ message: "Blog not found" });
      }

      res.json(rows[0]);
    }
  );
};
