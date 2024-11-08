import axios from 'axios';

export const BASE_URL = 'https://dev.talspo.com/admin/api';

export const SIGNUP_URL = `${BASE_URL}/register`; 
export const LOGIN_URL = `${BASE_URL}/login-view`;
export const MESSAGE_URL = `${BASE_URL}/massage-create`;
export const BLOG_POSTS_URL = `${BASE_URL}/recent-post-view`; 
export const FEATURED_BLOG_URL = `${BASE_URL}/featured-blogs-view`; 

export const recentBlogPosts = async () => {
          try {
            const response = await axios.get(BLOG_POSTS_URL);
            console.log("Fetched Recent Posts:", response.data);
            // Return the 'records' array containing blog posts
            return response.data.records || [];
          } catch (error) {
            console.error('Error fetching recent blog posts:', error);
            return [];
          }
        };
        
        export const featuredBlogPosts = async () => {
          try {
            const response = await axios.get(FEATURED_BLOG_URL);
            console.log("Fetched Featured Posts:", response.data);
            // Return the 'records' array containing featured blog posts
            return response.data.records || [];
          } catch (error) {
            console.error('Error fetching featured blog posts:', error);
            return [];
          }
        };
        