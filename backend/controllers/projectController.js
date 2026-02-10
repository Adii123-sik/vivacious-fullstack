// import db from "../config/db.js";

// /* GET ALL PROJECTS */
// export const getProjects = (req, res) => {
//   db.query(
//     "SELECT * FROM projects ORDER BY id DESC",
//     (err, rows) => {
//       if (err) {
//         console.error("PROJECT FETCH ERROR:", err);
//         return res.status(500).json({ message: "DB error" });
//       }
//       res.json(rows);
//     }
//   );
// };

// /* GET SINGLE PROJECT */
// export const getProjectById = (req, res) => {
//   db.query(
//     "SELECT * FROM projects WHERE id=?",
//     [req.params.id],
//     (err, rows) => {
//       if (err || rows.length === 0) {
//         return res.status(404).json({ message: "Not found" });
//       }
//       res.json(rows[0]);
//     }
//   );
// };

// /* ADD PROJECT */
// export const addProject = (req, res) => {
//   const { title, category, website_link } = req.body;

//   const image = req.file
//     ? `/uploads/projects/${req.file.filename}`
//     : null;

//   if (!title || !category || !website_link) {
//     return res
//       .status(400)
//       .json({ message: "Required fields missing" });
//   }

//   const sql = `
//     INSERT INTO projects
//     (title, category, website_link, image, status)
//     VALUES (?, ?, ?, ?, 1)
//   `;

//   db.query(
//     sql,
//     [title, category, website_link, image],
//     (err) => {
//       if (err) {
//         console.error("ADD PROJECT ERROR:", err);
//         return res.status(500).json({ message: "DB error" });
//       }
//       res.json({ message: "Project added" });
//     }
//   );
// };

// /* UPDATE PROJECT */
// export const updateProject = (req, res) => {
//   const { title, category, website_link } = req.body;

//   const image = req.file
//     ? `/uploads/projects/${req.file.filename}`
//     : null;

//   if (!title || !category || !website_link) {
//     return res
//       .status(400)
//       .json({ message: "Required fields missing" });
//   }

//   let sql = `
//     UPDATE projects SET
//       title=?,
//       category=?,
//       website_link=?
//   `;

//   const values = [title, category, website_link];

//   if (image) {
//     sql += `, image=?`;
//     values.push(image);
//   }

//   sql += ` WHERE id=?`;
//   values.push(req.params.id);

//   db.query(sql, values, (err) => {
//     if (err) {
//       console.error("UPDATE PROJECT ERROR:", err);
//       return res
//         .status(500)
//         .json({ message: "Update failed" });
//     }
//     res.json({ message: "Project updated" });
//   });
// };

// /* DELETE PROJECT */
// export const deleteProject = (req, res) => {
//   db.query(
//     "DELETE FROM projects WHERE id=?",
//     [req.params.id],
//     (err) => {
//       if (err) {
//         console.error("DELETE PROJECT ERROR:", err);
//         return res
//           .status(500)
//           .json({ message: "Delete failed" });
//       }
//       res.json({ message: "Project deleted" });
//     }
//   );
// };


import db from "../config/db.js";

/* GET ALL PROJECTS */
export const getProjects = (req, res) => {
  db.query(
    "SELECT * FROM projects ORDER BY id DESC",
    (err, rows) => {
      if (err) {
        console.error("PROJECT FETCH ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json(rows);
    }
  );
};

/* GET SINGLE PROJECT */
export const getProjectById = (req, res) => {
  db.query(
    "SELECT * FROM projects WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(404).json({ message: "Not found" });
      }
      res.json(rows[0]);
    }
  );
};

/* ADD PROJECT */
export const addProject = (req, res) => {
  const { title, category, website_link } = req.body;
  const image = req.file ? req.file.path : null;

  if (!title || !category || !website_link) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const sql = `
    INSERT INTO projects
    (title, category, website_link, image, status)
    VALUES (?, ?, ?, ?, 1)
  `;

  db.query(
    sql,
    [title, category, website_link, image],
    (err) => {
      if (err) {
        console.error("ADD PROJECT ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json({ message: "Project added successfully" });
    }
  );
};

/* UPDATE PROJECT */
export const updateProject = (req, res) => {
  const { title, category, website_link } = req.body;
  const image = req.file ? req.file.path : null;

  if (!title || !category || !website_link) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  let sql = `
    UPDATE projects SET
      title=?,
      category=?,
      website_link=?
  `;

  const values = [title, category, website_link];

  if (image) {
    sql += `, image=?`;
    values.push(image);
  }

  sql += ` WHERE id=?`;
  values.push(req.params.id);

  db.query(sql, values, (err) => {
    if (err) {
      console.error("UPDATE PROJECT ERROR:", err);
      return res.status(500).json({ message: "Update failed" });
    }
    res.json({ message: "Project updated successfully" });
  });
};

/* DELETE PROJECT */
export const deleteProject = (req, res) => {
  db.query(
    "DELETE FROM projects WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) {
        console.error("DELETE PROJECT ERROR:", err);
        return res.status(500).json({ message: "Delete failed" });
      }
      res.json({ message: "Project deleted successfully" });
    }
  );
};
