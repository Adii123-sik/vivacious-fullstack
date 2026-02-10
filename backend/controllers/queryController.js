import db from "../config/db.js";

// SUBMIT QUERY
export const submitQuery = (req, res) => {
  const { name, phone, email, message, service, source } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const sql = `
    INSERT INTO queries (name, phone, email, message, service, source)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      phone,
      email || null,
      message,
      service || null,
      source || "contact",
    ],
    (err) => {
      if (err) {
        console.error("❌ DB ERROR:", err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({ message: "Query submitted successfully" });
    }
  );
};

// GET ALL QUERIES
export const getAllQueries = (req, res) => {
  db.query("SELECT * FROM queries ORDER BY id DESC", (err, rows) => {
    if (err) {
      console.error("❌ FETCH ERROR:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json(rows);
  });
};

// DELETE QUERY
export const deleteQuery = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM queries WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("❌ DELETE ERROR:", err);
      return res.status(500).json({ message: "Delete failed" });
    }

    res.json({ message: "Query deleted" });
  });
};
