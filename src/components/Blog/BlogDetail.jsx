import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import { fetchBlogDetail } from '../../apiService';
import Loading from '../../pages/loading/Loading';
import "./BlogDetail.css";
import Footer from "../../pages/Footer/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const parseDescription = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const images = Array.from(tempDiv.querySelectorAll('img')).map((img) => img.src);

    const cleanTextWithImages = tempDiv.innerHTML;

    return { cleanTextWithImages, images };
  };

  useEffect(() => {
    const getBlogDetail = async () => {
      try {
        const data = await fetchBlogDetail(id);
        if (!data) {
          console.error("No blog details found for the given ID");
          setError(true);
        } else {
          setBlogDetail(data);
        }
      } catch (error) {
        console.error("Error fetching blog detail:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getBlogDetail();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>There was an error loading the blog details. Please try again later.</p>;

  const { cleanTextWithImages, images } = parseDescription(blogDetail?.description || '');

  return (
    <>
      <NavbarContainer />
      <div className="BlogDetail-main">
        <div className="blog-detail">
          <div className="details">
            <h5>{blogDetail?.title}</h5>
            <img className="img-d" src={blogDetail?.image} alt={blogDetail?.title} />
            <div className="year-d">
              <small>{blogDetail?.category}</small> <span>{blogDetail?.subtitle}</span>
            </div>
            <div className="description-text" dangerouslySetInnerHTML={{ __html: cleanTextWithImages }} />
            <h6>{blogDetail?.contant}</h6>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
