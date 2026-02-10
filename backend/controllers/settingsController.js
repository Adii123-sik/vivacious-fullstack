// import db from "../config/db.js";

// /* ================= GET SETTINGS ================= */
// export const getSettings = async (req, res) => {
//   try {
//     const [rows] = await db.promise().query(
//       "SELECT * FROM settings WHERE id = 1"
//     );

//     if (!rows.length) {
//       return res.status(404).json({ message: "Settings not found" });
//     }

//     res.json(rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch settings" });
//   }
// };

// /* ================= UPDATE SETTINGS ================= */
// export const updateSettings = async (req, res) => {
//   try {
//     const whyImage = req.files?.why_image
//       ? `/uploads/settings/${req.files.why_image[0].filename}`
//       : req.body.why_image;

//     const logoImage = req.files?.logo_image
//       ? `/uploads/settings/${req.files.logo_image[0].filename}`
//       : req.body.logo_image;

//     const sql = `
//       UPDATE settings SET
//         /* META */
//         meta_title = ?, meta_keyword = ?, meta_description = ?,

//         /* CONTACT */
//         contact_number = ?, whatsapp_number = ?, email = ?, opening_time = ?, address = ?,

//         /* SOCIAL */
//         facebook_link = ?, twitter_link = ?, instagram_link = ?, youtube_link = ?, linkedin_link = ?,

//         /* COUNTERS */
//         point1 = ?, value1 = ?, point2 = ?, value2 = ?, point3 = ?, value3 = ?,

//         /* WHY CHOOSE US */
//         why_point1 = ?, why_value1 = ?,
//         why_point2 = ?, why_value2 = ?,
//         why_point3 = ?, why_value3 = ?,
//         why_point4 = ?, why_value4 = ?,
//         why_point5 = ?, why_value5 = ?,
//         why_point6 = ?, why_value6 = ?,
//         why_point7 = ?, why_value7 = ?,
//         why_point8 = ?, why_value8 = ?,
//         why_point9 = ?, why_value9 = ?,

//         /* IMAGES */
//         why_image = ?, logo_image = ?,

//         /* ABOUT US */
//         about_subtitle = ?, about_heading = ?,
//         about_description_top = ?, about_description_bottom = ?,

//         about_feature1_title = ?, about_feature1_desc = ?,
//         about_feature2_title = ?, about_feature2_desc = ?,
//         about_feature3_title = ?, about_feature3_desc = ?,
//         about_feature4_title = ?, about_feature4_desc = ?,

//         /* PRIVACY POLICY */
//         privacy_title = ?, privacy_last_updated = ?, privacy_intro = ?,
//         privacy_company_name = ?, privacy_company_address = ?, privacy_company_email = ?, privacy_company_phone = ?,
//         privacy_grievance_officer = ?,
//         privacy_info_direct = ?, privacy_info_automatic = ?, privacy_info_third_party = ?,
//         privacy_usage = ?, privacy_legal_basis = ?,
//         privacy_cookies_necessary = ?, privacy_cookies_analytics = ?, privacy_cookies_ads = ?, privacy_cookie_choices = ?,
//         privacy_email_sms = ?, privacy_sharing = ?, privacy_international_transfer = ?,
//         privacy_retention = ?, privacy_security = ?, privacy_user_rights = ?, privacy_contact_rights = ?,

//         /* TERMS & CONDITIONS */
//         terms_title = ?, terms_last_updated = ?,
//         terms_acceptance = ?, terms_authority = ?,

//         terms_definitions_client = ?, terms_definitions_deliverables = ?,
//         terms_definitions_proposal = ?, terms_definitions_third_party = ?,

//         terms_site_usage_intro = ?, terms_site_usage_restrictions = ?, terms_site_usage_notice = ?,
//         terms_services = ?, terms_third_party_platforms = ?,
//         terms_changes = ?, terms_contact = ?

//       WHERE id = 1
//     `;

//     const values = [
//       /* META */
//       req.body.meta_title,
//       req.body.meta_keyword,
//       req.body.meta_description,

//       /* CONTACT */
//       req.body.contact_number,
//       req.body.whatsapp_number,
//       req.body.email,
//       req.body.opening_time,
//       req.body.address,

//       /* SOCIAL */
//       req.body.facebook_link,
//       req.body.twitter_link,
//       req.body.instagram_link,
//       req.body.youtube_link,
//       req.body.linkedin_link,

//       /* COUNTERS */
//       req.body.point1, req.body.value1,
//       req.body.point2, req.body.value2,
//       req.body.point3, req.body.value3,

//       /* WHY CHOOSE US */
//       req.body.why_point1, req.body.why_value1,
//       req.body.why_point2, req.body.why_value2,
//       req.body.why_point3, req.body.why_value3,
//       req.body.why_point4, req.body.why_value4,
//       req.body.why_point5, req.body.why_value5,
//       req.body.why_point6, req.body.why_value6,
//       req.body.why_point7, req.body.why_value7,
//       req.body.why_point8, req.body.why_value8,
//       req.body.why_point9, req.body.why_value9,

//       /* IMAGES */
//       whyImage,
//       logoImage,

//       /* ABOUT US */
//       req.body.about_subtitle,
//       req.body.about_heading,
//       req.body.about_description_top,
//       req.body.about_description_bottom,

//       req.body.about_feature1_title,
//       req.body.about_feature1_desc,
//       req.body.about_feature2_title,
//       req.body.about_feature2_desc,
//       req.body.about_feature3_title,
//       req.body.about_feature3_desc,
//       req.body.about_feature4_title,
//       req.body.about_feature4_desc,

//       /* PRIVACY */
//       req.body.privacy_title,
//       req.body.privacy_last_updated,
//       req.body.privacy_intro,
//       req.body.privacy_company_name,
//       req.body.privacy_company_address,
//       req.body.privacy_company_email,
//       req.body.privacy_company_phone,
//       req.body.privacy_grievance_officer,
//       req.body.privacy_info_direct,
//       req.body.privacy_info_automatic,
//       req.body.privacy_info_third_party,
//       req.body.privacy_usage,
//       req.body.privacy_legal_basis,
//       req.body.privacy_cookies_necessary,
//       req.body.privacy_cookies_analytics,
//       req.body.privacy_cookies_ads,
//       req.body.privacy_cookie_choices,
//       req.body.privacy_email_sms,
//       req.body.privacy_sharing,
//       req.body.privacy_international_transfer,
//       req.body.privacy_retention,
//       req.body.privacy_security,
//       req.body.privacy_user_rights,
//       req.body.privacy_contact_rights,

//       /* TERMS */
//       req.body.terms_title,
//       req.body.terms_last_updated,
//       req.body.terms_acceptance,
//       req.body.terms_authority,

//       req.body.terms_definitions_client,
//       req.body.terms_definitions_deliverables,
//       req.body.terms_definitions_proposal,
//       req.body.terms_definitions_third_party,

//       req.body.terms_site_usage_intro,
//       req.body.terms_site_usage_restrictions,
//       req.body.terms_site_usage_notice,
//       req.body.terms_services,
//       req.body.terms_third_party_platforms,
//       req.body.terms_changes,
//       req.body.terms_contact
//     ];

//     await db.promise().query(sql, values);

//     res.json({ success: true, message: "Settings updated successfully" });
//   } catch (error) {
//     console.error("UPDATE SETTINGS ERROR:", error);
//     res.status(500).json({ error: error.message });
//   }
// };




import db from "../config/db.js";

/* GET SETTINGS */
export const getSettings = async (req, res) => {
  const [rows] = await db.promise().query(
    "SELECT * FROM settings WHERE id = 1"
  );
  if (!rows.length)
    return res.status(404).json({ message: "Settings not found" });
  res.json(rows[0]);
};

/* UPDATE SETTINGS */
export const updateSettings = async (req, res) => {
  try {
    const whyImage = req.files?.why_image
      ? req.files.why_image[0].path
      : req.body.why_image;

    const logoImage = req.files?.logo_image
      ? req.files.logo_image[0].path
      : req.body.logo_image;

    const sql = `UPDATE settings SET why_image=?, logo_image=? WHERE id=1`;

    await db.promise().query(sql, [whyImage, logoImage]);

    res.json({ success: true, message: "Settings updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
};
