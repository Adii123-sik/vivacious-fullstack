import db from "../config/db.js";

/* ================= GET ALL ================= */
export const getPricing = (req, res) => {
  const sql = `
    SELECT *
    FROM pricing_plans
    WHERE status = 1
    ORDER BY id DESC
  `;

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

/* ================= GET SINGLE ================= */
export const getPricingById = (req, res) => {
  const sql = "SELECT * FROM pricing_plans WHERE id=?";

  db.query(sql, [req.params.id], (err, rows) => {
    if (err) return res.status(500).json(err);
    if (!rows.length)
      return res.status(404).json({ message: "Not found" });

    res.json(rows[0]);
  });
};

/* ================= ADD ================= */
export const addPricing = (req, res) => {
  const {
    service_name,
    service_slug,
    plan_name,
    price,
    currency,
    features,
  } = req.body;

  const sql = `
    INSERT INTO pricing_plans
    (service_name, service_slug, plan_name, price, currency, features)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      service_name,
      service_slug,
      plan_name,
      price,
      currency || "₹",
      features,
    ],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Pricing plan added" });
    }
  );
};

/* ================= UPDATE ================= */
export const updatePricing = (req, res) => {
  const {
    service_name,
    service_slug,
    plan_name,
    price,
    currency,
    features,
    status,
  } = req.body;

  const sql = `
    UPDATE pricing_plans SET
      service_name=?,
      service_slug=?,
      plan_name=?,
      price=?,
      currency=?,
      features=?,
      status=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      service_name,
      service_slug,
      plan_name,
      price,
      currency || "₹",
      features,
      status ?? 1,
      req.params.id,
    ],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Pricing plan updated" });
    }
  );
};

/* ================= DELETE ================= */
export const deletePricing = (req, res) => {
  const sql = "DELETE FROM pricing_plans WHERE id=?";

  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Pricing plan deleted" });
  });
};
