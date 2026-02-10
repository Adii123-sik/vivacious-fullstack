import axios from "axios";
import {API_BASE_URL} from "../config/apiConfig"

const BASE_URL = `${API_BASE_URL}/api`;

export const submitQuery = async (data) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/query`,
    data,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data;
};



export const getTestimonials = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/testimonials`);
  return res.data;
};



export const getTeamMembers = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/team`);
  return res.data;
}



// PROJECTS (PUBLIC)
export const getProjects = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/projects`);
    return res.data;
  } catch (error) {
    console.error("❌ PROJECT FETCH ERROR:", error);
    return [];
  }
};


//blog ko database se show karane k liye 
export const getBlogs = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/blogs`);
    return res.data;
  } catch (err) {
    console.error("BLOG FETCH ERROR ❌", err);
    return [];
  }
};


/* ================= PRICING ================= */
export const getPricingPlans = async () => {
  const res = await axios.get(`${BASE_URL}/pricing`);
  return res.data;
};


/* ================= GET PARTNERS ================= */
export const getPartners = async () => {
  const res = await axios.get(`${BASE_URL}/partners`);
  return res.data;
};


/*  =================GET SETTINGS ==================*/
export const getSettings = async () => {
  const { data } = await axios.get(`${BASE_URL}/settings`);
  return data;
};



/* ================= OUR HISTORY (PUBLIC) ================= */
export const getHistory = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/history`);
    return res.data;
  } catch (error) {
    console.error("❌ HISTORY FETCH ERROR:", error);
    return [];
  }
};



/* ================= SERVICES ================= */
export const getServices = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/services`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch services", error);
    return [];
  }
};


/* SINGLE SERVICE BY ID */
export const getServiceById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/services/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching service", err);
    return null;
  }
};



// ✅ BLOG BY ID (SAFE)
export const getBlogById = async (id) => {
  try {
    if (typeof window === "undefined") return null;

    const res = await axios.get(
      `${API_BASE_URL}/api/blogs/${id}`
    );

    return res.data;
  } catch (err) {
    console.error("❌ BLOG BY ID FETCH ERROR:", err);
    return null;
  }
};


