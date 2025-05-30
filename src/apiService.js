import axios from "axios";

export const BASE_URL = "https://dev.talspo.com/admin/api";

export const LOADING_DATA = `${BASE_URL}/loading-view`

export const SIGNUP_URL = `${BASE_URL}/register`;
export const LOGIN_URL = `${BASE_URL}/login-view`;
export const NAVBAR_MODEL_DYNAMIC = `${BASE_URL}/view-model_service`;
export const TESTIMONIALS = `${BASE_URL}/testimonial-view`;
export const HOME_CONTENT = `${BASE_URL}/home_page_details-view`
export const BLOG_POSTS_URL = `${BASE_URL}/recent-post-view`;
export const FEATURED_BLOG_URL = `${BASE_URL}/featured-blogs-view`;
export const BLOG_VIEW_URL = `${BASE_URL}/blog-view`;
export const JOB_POST_URL = `${BASE_URL}/job-post-view`;
export const HOW_WORK_URL = `${BASE_URL}/how-work-view`
export const CAMPUS_FAQ = `${BASE_URL}/campus-faq-view`
export const WHO_WE_TWO = `${BASE_URL}/home-page-view`
export const WHY_CHOOSE_TALSPO = `${BASE_URL}/why-choose-talspo-view`
export const WHY_CHOOSE_TALSPO_DATA = `${BASE_URL}/view-know_choose_talspo`
export const TAL_SPO_SKILLED_VIEW_URL = `${BASE_URL}/talspo-skilled-view`;
export const FILTER_API_URL = `${BASE_URL}/`
export const FAQ_URL = `${BASE_URL}/faq-view`
export const TECHNO_URL = `${BASE_URL}/ourpartners-view`
export const DO_PARTNERSHIP_URL = `${BASE_URL}/partners-view`
export const OUR_TEAM_URL = `${BASE_URL}/team-view`
export const ACHIEVEMENT_URL = `${BASE_URL}/achievements-view`
export const PRIVACY_POLICY_URL = `${BASE_URL}/get-privacypolicy`;
export const COOKIE_POLICY_URL = `${BASE_URL}/get-cookiespolicy`;
export const TERM_OF_USE_URL = `${BASE_URL}/get-termsofuse`;
export const TERMS_CONDITIONS_URL = `${BASE_URL}/get-termscondition`;
export const DISCLAIMER_URL = `${BASE_URL}/get-desclaimer`;
export const ANTY_SPAM_POLICY_URL = `${BASE_URL}/get-antispam_policy`;
export const DIGITAL_MILLENNIUMll_COPYRIGHT_ACT_URL = `${BASE_URL}/get-iprcompilance`;
export const GDPR_PRIVACY_POLICY_URL = `${BASE_URL}/get-gprcompilance`;
export const End_User_License_Agreement_URL = `${BASE_URL}/get-eula`;
export const CREATE_DIRECT_CONNECT_HR_URL = `${BASE_URL}/create-darect-canect-hr-executive`;

export const QR_HANDLER = `${BASE_URL}/view-qr_scanner`
export const PARTNERSHIP_SCANER = `${BASE_URL}/view-partnersscaneer`
export const Contact_QR_Api = `${BASE_URL}/view-qr_allscanner`
export  const Contact_SecondApi = `${BASE_URL}/qr_scannercontact`
export const OUR_SERVICES_URL = `${BASE_URL}/view-service`


// --------------------- GDPR Policy ----------------------
export const fetchEULAPolicy = async () => {
  try {
    const response = await axios.get(End_User_License_Agreement_URL);
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
    console.error(
      "Error fetching Digital Millennium Copyright Act policy:",
      error
    );
    return null; // Return null in case of an error
  }
};

// --------------------- Anty Spam Policy ----------------------
export const fetchAntySpamPolicy = async () => {
  try {
    const response = await axios.get(ANTY_SPAM_POLICY_URL);
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
    return response.data.records || [];
  } catch (error) {
    console.error("Error fetching job posts:", error);
    return [];
  }
};

export const filterOpportunity = async () => {
  try {
    const response = await axios.get(FILTER_API_URL);
    return response.data || {};
  } catch (error) {
    console.error('Error fetching opportunities from', FILTER_API_URL, error.message);
    return { error: true, message: error.message };
  }
};

export const fetchJobDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/job-post-single-record/${id}`);
    return response.data.records || null;
  } catch (error) {
    console.error("Error fetching job detail:", error);
    return null;
  }
};

export const submitJobApplication = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/opportunities-career-form`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting job application:", error);
    throw error;
  }
};

// ---------------------About us------------------------------------


export const faqQuestions = async () => {
  try {
    const response = await axios.get(FAQ_URL)
    return response.data || {}
  } catch (error) {
    console.log('error', error)
    return {};
  }
}

export const ourTeam = async () => {
  try {
    const response = await axios.get(OUR_TEAM_URL)
    return response.data || {}
  } catch (error) {
    console.log('error our team ', error)
    return {};
  }
}
// ---------------------skilled candidates-------------------------

export const fetchTalspoSkilledView = async () => {
  try {
    const response = await axios.get(TAL_SPO_SKILLED_VIEW_URL);
    // console.log("Skilled Candidates Response:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error("Error fetching Talspo Skilled data:", error);
    return [];
  }
};

// ------------------Blogs Apis------------------------------------------------
export const recentBlogPosts = async () => {
  try {
    const response = await axios.get(BLOG_POSTS_URL);
    // console.log(" Recent Blogs:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error("Error fetching recent blog posts:", error);
    return [];
  }
};

export const featuredBlogPosts = async () => {
  try {
    const response = await axios.get(FEATURED_BLOG_URL);
    // console.log("Featured Blogs:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error("Error fetching featured blog posts:", error);
    return [];
  }
};

export const fetchBlogDetail = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/featured-blog-single-record/${id}`
    );
    // console.log("Blog detail view:", response.data);
    return response.data.records || null;
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return null;
  }
};


export const searchBlog = async (query, category) => {
  try {
    const response = await axios.get(`${BASE_URL}/search_blog`,{
      params: {
        title: query,
        category: category,  // Include category as parameter
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs by search term:', error);
    throw error;
  }
};

// -------------------------who we form api-----------------------------------------------------

export const createDirectConnectHR = async (formData) => {
  try {
    const response = await axios.post(CREATE_DIRECT_CONNECT_HR_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log("Connect Hr Form Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ------------------------------------Technology ----------------------------------------------

export const technologyApi = async () => {
  try {
    const response = await axios.get(TECHNO_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching technology data:', error);
    return {};
  }
};

// ------------------------------------------- our partners-------------------------------------

export const doPartnerhip = async () => {
  try {
    const response = await axios.get(DO_PARTNERSHIP_URL);
    // console.log('response data', response)
    return response.data;
  } catch (error) {
    console.log('error fetching partnership data', error);
    return {};
  }
}

export const submitCareerForm = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/ourpartners-career-form`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log("Career Form Submission Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Career Form API Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// -------------------------------------------------------------how we work----------------------------------------------
export const howWork = async () => {
  try {
    const response = await axios.get(HOW_WORK_URL)
    return response.data;
  } catch (error) {
    console.log('Error', error)
    return {};
  }
}
// -------------------------------------------------------------campus Faq----------------------------------------------

export const campusFaq = async () => {
  try {
    const response = await axios.get(CAMPUS_FAQ)
    return response.data;
  } catch (error) {
    console.log('Error', error)
    return {};
  }
}

// ----------------------------------WHo we two--------------------------------------
export const whoWeTwo = async () => {
  try {
    const response = await axios.get(WHO_WE_TWO)
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return {}
  }
}

//  ----------------------------why choode talspo------------------------------------------------------

export const whyChooseTalspo = async () => {
  try {
    const response = await axios.get(WHY_CHOOSE_TALSPO)
    return response.data;
  } catch (error) {
    console.log('error', error)
    return {};
  }
}

export const whyChooseTalspoData = async () => {
  try {
    const response = await axios.get(WHY_CHOOSE_TALSPO_DATA)
    return response.data;
  } catch (error) {
    console.log('error', error)
    return {};
  }
}

// -------------------------------------our team-------------------------------

export const achievement = async () => {
  try {
    const response = await axios.get(ACHIEVEMENT_URL)
    return response.data;
  } catch (error) {
    console.log('error', error)
    return {};
  }
}

// --------------------------navbar meodel dynamic api -------------------------------------------------------------
export const navModelDynamic = async () => {
  try {
    const response = await fetch(NAVBAR_MODEL_DYNAMIC);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching navbar data:', error);
    return {};
  }
};

// ------------------------------------about us all apis-------------------------------------

const apiInstance = axios.create({
  baseURL: BASE_URL,  // Using the centralized base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const getPatentData = () => apiInstance.get('/view-patent');
export const getKnowUsData = () => apiInstance.get('/view-konw_us');
export const getJourneyTalspoData = () => apiInstance.get('/view-journey_talspo');
export const getLogoStoryData = () => apiInstance.get('/view-logo_story');
export const getRecognitionData = () => apiInstance.get('/view-recognition');

// ------------------------------------testimonials join us--------------------------------------------------

export const joinTestimonials = async () => {
  try {
    const response = await axios.get(TESTIMONIALS);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {};
  }
};

// ------------------------------------home first page api --------------------------------------------------

export const homepageContent = async () => {
  try {
    const response = await axios.get(HOME_CONTENT);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {};
  }
};

// --------------------------------------------qr code api-----------------------------------------

export const qrHandler = async () => {
  try {
    const response = await axios.get(QR_HANDLER);
    return response.data;
  } catch (error) {
    console.error("Error fetching qr:", error);
    return {};
  }
};
// --------------------------------------------contact qr code api-----------------------------------------

export const contactQrApi = async () => {
  try {
    const response = await axios.get(Contact_QR_Api);
    return response.data;
  } catch (error) {
    console.error("Error fetching qr:", error);
    return {};
  }
};

export const contactSecondApi = async () => {
  try {
    const response = await axios.get(Contact_SecondApi);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact qr:", error);
    return {};
  }
};
// --------------------------------------------our services api-----------------------------------------

export const ourServices = async () => {
  try {
    const response = await axios.get(OUR_SERVICES_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching ourServices:", error);
    return {};
  }
};


export const getServiceDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/service-single-record/${id}`);
    return response.data; 
  } catch (error) {
    console.error(`Error fetching service detail for ID ${id}:`, error);
    throw new Error("Unable to fetch service details.");
  }
};



// ---------------------------form certificate api----------------------------

export const certificateForm = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/create-legalcertification`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("Certificate Form Submission Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Career Form API Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ---------------------------do partnership scaner----------------------------


export const partnersScaner = async () => {
  try {
    const response = await axios.get(PARTNERSHIP_SCANER);
    return response.data;
  } catch (error) {
    console.error("Error fetching partnersScaner:", error);
    return {};
  }
};

// -------------------------loading--------------------------------------------

export const loadingData = async () => {
  try {
    const response = await axios.get(LOADING_DATA);
    return response.data;
  } catch (error) {
    console.error("Error fetching Loading data:", error);
    return {};
  }
};



