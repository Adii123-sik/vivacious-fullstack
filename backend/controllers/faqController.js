import db from "../config/db.js";

/* GET ALL */
export const getFAQs = async (req, res) => {
  const [rows] = await db
    .promise()
    .query("SELECT * FROM faq WHERE status = 1 ORDER BY sort_order ASC");
  res.json(rows);
};

/* GET SINGLE */
export const getFAQById = async (req, res) => {
  const [rows] = await db
    .promise()
    .query("SELECT * FROM faq WHERE id = ?", [req.params.id]);
  res.json(rows[0]);
};

/* ADD */
export const addFAQ = async (req, res) => {
  const { question, answer, sort_order } = req.body;

  await db.promise().query(
    "INSERT INTO faq (question, answer, sort_order) VALUES (?, ?, ?)",
    [question, answer, sort_order || 0]
  );

  res.json({ success: true });
};

/* UPDATE */
export const updateFAQ = async (req, res) => {
  const { question, answer, sort_order, status } = req.body;

  await db.promise().query(
    `UPDATE faq SET question=?, answer=?, sort_order=?, status=? WHERE id=?`,
    [question, answer, sort_order, status, req.params.id]
  );

  res.json({ success: true });
};

/* DELETE */
export const deleteFAQ = async (req, res) => {
  await db.promise().query("DELETE FROM faq WHERE id = ?", [req.params.id]);
  res.json({ success: true });
};
