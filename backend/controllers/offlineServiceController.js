import db from "../config/db.js";

/* ===========================================
   GET ALL (Public + Admin)
=========================================== */
export const getAllOfflineServices = (req, res) => {
  const isAdmin = req.query.admin === "true";

  let query = "SELECT * FROM offline_services";

  if (!isAdmin) {
    query += " WHERE is_active = 1";
  }

  query += " ORDER BY display_order ASC";

  db.query(query, (err, results) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
};

/* ===========================================
   CREATE
=========================================== */
export const createService = (req, res) => {
  const { title, description, display_order } = req.body;

  const sql =
    "INSERT INTO offline_services (title, description, display_order) VALUES (?, ?, ?)";

  db.query(sql, [title, description, display_order], (err, result) => {
    if (err) {
      console.error("Insert Error:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Service added successfully" });
  });
};

/* ===========================================
   UPDATE
=========================================== */
export const updateService = (req, res) => {
  const { id } = req.params;
  const { title, description, display_order, is_active } = req.body;

  const sql = `
    UPDATE offline_services 
    SET title = ?, description = ?, display_order = ?, is_active = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [title, description, display_order, is_active, id],
    (err, result) => {
      if (err) {
        console.error("Update Error:", err);
        return res.status(500).json({ error: err.message });
      }

      res.json({ message: "Service updated successfully" });
    }
  );
};

/* ===========================================
   DELETE
=========================================== */
export const deleteService = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM offline_services WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("Delete Error:", err);
        return res.status(500).json({ error: err.message });
      }

      res.json({ message: "Service deleted successfully" });
    }
  );
};
