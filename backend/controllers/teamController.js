// import db from "../config/db.js";

// /* GET ALL TEAM MEMBERS */
// export const getTeam = (req, res) => {
//   db.query(
//     "SELECT * FROM team_members ORDER BY id DESC",
//     (err, rows) => {
//       if (err) {
//         console.error("TEAM FETCH ERROR:", err);
//         return res.status(500).json({ message: "DB error" });
//       }
//       res.json(rows);
//     }
//   );
// };

// /* GET SINGLE TEAM MEMBER */
// export const getTeamById = (req, res) => {
//   db.query(
//     "SELECT * FROM team_members WHERE id=?",
//     [req.params.id],
//     (err, rows) => {
//       if (err || rows.length === 0) {
//         return res.status(404).json({ message: "Not found" });
//       }
//       res.json(rows[0]);
//     }
//   );
// };

// /* ADD TEAM MEMBER */
// export const addTeam = (req, res) => {
//   const {
//     name,
//     role,
//     facebook,
//     twitter,
//     instagram,
//     linkedin,
//   } = req.body;

//   const image = req.file
//     ? `/uploads/team/${req.file.filename}`
//     : null;

//   if (!name || !role) {
//     return res.status(400).json({ message: "Required fields missing" });
//   }

//   const sql = `
//     INSERT INTO team_members
//     (name, role, image, facebook, twitter, instagram, linkedin, status)
//     VALUES (?, ?, ?, ?, ?, ?, ?, 1)
//   `;

//   const values = [
//     name,
//     role,
//     image,
//     facebook || null,
//     twitter || null,
//     instagram || null,
//     linkedin || null,
//   ];

//   db.query(sql, values, (err) => {
//     if (err) {
//       console.error("ADD TEAM ERROR:", err);
//       return res.status(500).json({ message: "DB error" });
//     }
//     res.json({ message: "Team member added" });
//   });
// };

// /* UPDATE TEAM MEMBER */
// export const updateTeam = (req, res) => {
//   const {
//     name,
//     role,
//     facebook,
//     twitter,
//     instagram,
//     linkedin,
//   } = req.body;

//   const image = req.file
//     ? `/uploads/team/${req.file.filename}`
//     : null;

//   if (!name || !role) {
//     return res.status(400).json({ message: "Required fields missing" });
//   }

//   let sql = `
//     UPDATE team_members SET
//       name=?,
//       role=?,
//       facebook=?,
//       twitter=?,
//       instagram=?,
//       linkedin=?
//   `;

//   const values = [
//     name,
//     role,
//     facebook || null,
//     twitter || null,
//     instagram || null,
//     linkedin || null,
//   ];

//   if (image) {
//     sql += `, image=?`;
//     values.push(image);
//   }

//   sql += ` WHERE id=?`;
//   values.push(req.params.id);

//   db.query(sql, values, (err) => {
//     if (err) {
//       console.error("UPDATE TEAM ERROR:", err);
//       return res.status(500).json({ message: "Update failed" });
//     }
//     res.json({ message: "Team updated" });
//   });
// };

// /* DELETE TEAM MEMBER */
// export const deleteTeam = (req, res) => {
//   db.query(
//     "DELETE FROM team_members WHERE id=?",
//     [req.params.id],
//     (err) => {
//       if (err) {
//         console.error("DELETE TEAM ERROR:", err);
//         return res.status(500).json({ message: "Delete failed" });
//       }
//       res.json({ message: "Team deleted" });
//     }
//   );
// };





import db from "../config/db.js";

/* ================= GET ALL TEAM MEMBERS ================= */
export const getTeam = (req, res) => {
  db.query(
    "SELECT * FROM team_members ORDER BY id DESC",
    (err, rows) => {
      if (err) {
        console.error("TEAM FETCH ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json(rows);
    }
  );
};

/* ================= GET SINGLE TEAM MEMBER ================= */
export const getTeamById = (req, res) => {
  db.query(
    "SELECT * FROM team_members WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(404).json({ message: "Team member not found" });
      }
      res.json(rows[0]);
    }
  );
};

/* ================= ADD TEAM MEMBER ================= */
export const addTeam = (req, res) => {
  const {
    name,
    role,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = req.body;

  // ✅ Cloudinary image URL
  const image = req.file ? req.file.path : null;

  if (!name || !role) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const sql = `
    INSERT INTO team_members
    (name, role, image, facebook, twitter, instagram, linkedin, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, 1)
  `;

  const values = [
    name,
    role,
    image,
    facebook || null,
    twitter || null,
    instagram || null,
    linkedin || null,
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error("ADD TEAM ERROR:", err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json({ message: "Team member added successfully" });
  });
};

/* ================= UPDATE TEAM MEMBER ================= */
export const updateTeam = (req, res) => {
  const {
    name,
    role,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = req.body;

  // ✅ New image optional
  const image = req.file ? req.file.path : null;

  if (!name || !role) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  let sql = `
    UPDATE team_members SET
      name=?,
      role=?,
      facebook=?,
      twitter=?,
      instagram=?,
      linkedin=?
  `;

  const values = [
    name,
    role,
    facebook || null,
    twitter || null,
    instagram || null,
    linkedin || null,
  ];

  if (image) {
    sql += `, image=?`;
    values.push(image);
  }

  sql += ` WHERE id=?`;
  values.push(req.params.id);

  db.query(sql, values, (err) => {
    if (err) {
      console.error("UPDATE TEAM ERROR:", err);
      return res.status(500).json({ message: "Update failed" });
    }
    res.json({ message: "Team member updated successfully" });
  });
};

/* ================= DELETE TEAM MEMBER ================= */
export const deleteTeam = (req, res) => {
  db.query(
    "DELETE FROM team_members WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) {
        console.error("DELETE TEAM ERROR:", err);
        return res.status(500).json({ message: "Delete failed" });
      }
      res.json({ message: "Team member deleted successfully" });
    }
  );
};
