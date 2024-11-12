import axios from 'axios';

export const BASE_URL = 'https://dev.talspo.com/admin/api';

export const SIGNUP_URL = `${BASE_URL}/register`;
export const LOGIN_URL = `${BASE_URL}/login-view`;
export const MESSAGE_URL = `${BASE_URL}/massage-create`;
export const BLOG_POSTS_URL = `${BASE_URL}/recent-post-view`;
export const FEATURED_BLOG_URL = `${BASE_URL}/featured-blogs-view`;
export const JOB_POST_URL = `${BASE_URL}/job-post-view`;
export const ABOUT_US_URL = `${BASE_URL}/about-us-view`;
export const BLOG_VIEW_URL = `${BASE_URL}/blog-view`;

export const TAL_SPO_SKILLED_VIEW_URL = `${BASE_URL}/talspo-skilled-view`;


export const fetchJobPosts = async () => {
  try {
    const response = await axios.get(JOB_POST_URL);
    console.log(" Job Posts Response :", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching job posts:', error);
    return [];
  }
};

export const fetchAboutUs = async () => {
  try {
    const response = await axios.get(ABOUT_US_URL);
    console.log("Fetched About Us Data:", response.data);
    return response.data || {};
  } catch (error) {
    console.error('Error fetching About Us data:', error);
    return {};
  }
};

export const fetchTalspoSkilledView = async () => {
  try {
    const response = await axios.get(TAL_SPO_SKILLED_VIEW_URL);
    console.log("Fetched Talspo Skilled Data:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching Talspo Skilled data:', error);
    return [];
  }
};

export const recentBlogPosts = async () => {
  try {
    const response = await axios.get(BLOG_POSTS_URL);
    console.log(" Recent Blogs:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching recent blog posts:', error);
    return [];
  }
};

export const featuredBlogPosts = async () => {
  try {
    const response = await axios.get(FEATURED_BLOG_URL);
    console.log("Featured Blogs:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
};

export const fetchBlogDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/featured-blog-single-record/${id}`);
    console.log("API Response:", response.data);
    
    return response.data.records || null; // Adjust if necessary
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return null; // Return null on error
  }
};





