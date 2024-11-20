import axios from 'axios';

export const BASE_URL = 'https://dev.talspo.com/admin/api';

export const SIGNUP_URL = `${BASE_URL}/register`;
export const LOGIN_URL = `${BASE_URL}/login-view`;
// export const MESSAGE_URL = `${BASE_URL}/massage-create`;

export const BLOG_POSTS_URL = `${BASE_URL}/recent-post-view`;
export const FEATURED_BLOG_URL = `${BASE_URL}/featured-blogs-view`;
export const BLOG_VIEW_URL = `${BASE_URL}/blog-view`;

export const JOB_POST_URL = `${BASE_URL}/job-post-view`;
export const ABOUT_US_URL = `${BASE_URL}/about-us-view`;
export const TAL_SPO_SKILLED_VIEW_URL = `${BASE_URL}/talspo-skilled-view`;

export const PRIVACY_POLICY_URL = `${BASE_URL}/get-privacypolicy`;
export const COOKIE_POLICY_URL = `${BASE_URL}/get-cookiespolicy`;
export const TERM_OF_USE_URL = `${BASE_URL}/get-termsofuse`;
export const TERMS_CONDITIONS_URL = `${BASE_URL}/get-termscondition`;

export const DISCLAIMER_URL = `${BASE_URL}/get-desclaimer`;
export const ANTY_SPAM_POLICY_URL =`${BASE_URL}/get-antispam_policy`;
export const DIGITAL_MILLENNIUMll_COPYRIGHT_ACT_URL = `${BASE_URL}/get-legalcertification`;
export const GDPR_PRIVACY_POLICY_URL = `${BASE_URL}/get-gprcompilance`;
export const End_User_License_Agreement_URL = `${BASE_URL}/get-eula`;


export const CREATE_DIRECT_CONNECT_HR_URL = `${BASE_URL}/create-darect-canect-hr-executive`;


// --------------------- GDPR Policy ----------------------
export const fetchEULAPolicy = async () => {
  try {
    const response = await axios.get(End_User_License_Agreement_URL);
    // console.log("EULA Policy Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching EULA Policy:", error);
    return null; // Return null in case of an error
  }
};

// --------------------- GDPR Policy ----------------------
export const fetchGDPRPolicy = async () => {
  try {
    const response = await axios.get(GDPR_PRIVACY_POLICY_URL);
    // console.log("GDPR Privacy Policy Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching GDPR Privacy Policy:", error);
    return null; // Return null in case of an error
  }
};


// --------------------- Anty Spam Policy ----------------------
export const fetchDMCAPolicy = async () => {
  try {
    const response = await axios.get(DIGITAL_MILLENNIUMll_COPYRIGHT_ACT_URL);
    // console.log("Digital Millennium Copyright Act policy Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching Digital Millennium Copyright Act policy:", error);
    return null; // Return null in case of an error
  }
};

// --------------------- Anty Spam Policy ----------------------
export const fetchAntySpamPolicy = async () => {
  try {
    const response = await axios.get(ANTY_SPAM_POLICY_URL);
    // console.log("Anty Spam Policy Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching Anty Spam Policy:", error);
    return null; // Return null in case of an error
  }
};

// --------------------- Disclaimer ----------------------
export const fetchDisclaimerPolicy = async () => {
  try {
    const response = await axios.get(DISCLAIMER_URL);
    // console.log("Disclaimer Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching Disclaimer:", error);
    return null; // Return null in case of an error
  }
};

// --------------------- Term and Condition ----------------------
export const fetchTermsCondition = async () => {
  try {
    const response = await axios.get(TERMS_CONDITIONS_URL);
    // console.log("Terms and Condition Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching Terms and Condition:", error);
    return null; // Return null in case of an error
  }
};

// ----------------------Term Of Policy --------------------------
export const fetchTermOfUse = async () => {
  try {
    const response = await axios.get(TERM_OF_USE_URL);
    // console.log("Terms of use Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching Terms of use:", error);
    return null; // Return null in case of an error
  }
};

// -------------------- Privacy Policy -------------------------
export const fetchPrivacyPolicy = async () => {
  try {
    const response = await axios.get(PRIVACY_POLICY_URL);
    // console.log("Privacy Policy Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    return null; // Return null in case of an error
  }
};

// -----------------------Cookie Policy -----------------------------

export const fetchCookiePolicy = async () => {
  try {
    const response = await axios.get(COOKIE_POLICY_URL);
    // console.log("Cookie Policy Response:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching Cookie policy:", error);
    return null; // Return null in case of an error
  }
};

// ---------------------job opportunities-----------------------------
export const fetchJobPosts = async () => {
  try {
    const response = await axios.get(JOB_POST_URL);
    // console.log(" Job Posts Response :", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching job posts:', error);
    return [];
  }
};

// ---------------------About us------------------------------------

export const fetchAboutUs = async () => {
  try {
    const response = await axios.get(ABOUT_US_URL);
    // console.log("Fetched About Us Data:", response.data);
    return response.data || {};
  } catch (error) {
    console.error('Error fetching About Us data:', error);
    return {};
  }
};

// ---------------------skilled candidates-------------------------

export const fetchTalspoSkilledView = async () => {
  try {
    const response = await axios.get(TAL_SPO_SKILLED_VIEW_URL);
    // console.log("Skilled Candidates Response:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching Talspo Skilled data:', error);
    return [];
  }
};

// ------------------Blogs Apis----------------------------------

export const recentBlogPosts = async () => {
  try {
    const response = await axios.get(BLOG_POSTS_URL);
    // console.log(" Recent Blogs:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching recent blog posts:', error);
    return [];
  }
};

export const featuredBlogPosts = async () => {
  try {
    const response = await axios.get(FEATURED_BLOG_URL);
    // console.log("Featured Blogs:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
};

export const fetchBlogDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/featured-blog-single-record/${id}`);
    // console.log("Blog detail view:", response.data);
    return response.data.records || null; 
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return null; 
  }
};

// -------------------------who we form api--------------------------------------------------------

export const createDirectConnectHR = async (formData) => {
  try {
    const response = await axios.post(CREATE_DIRECT_CONNECT_HR_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });
    console.log("Connect Hr Form Response:", response.data);
    return response.data; 
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};


