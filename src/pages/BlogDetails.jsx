import { useLoaderData, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetails = () => {
  const article = useLoaderData();
  const { slug } = useParams();
  return (
    <div className="blog-details">
      <div className="details-info">
        <h2 className="details-title">{article.title}</h2>
        <h5 className="blog-author">{article.author.username}</h5>
      </div>
      <div className="details-body">
        <p className="details-description">{article.description}</p>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </div>  
      </div>  
  );
};

export const BlogDetailsLoader = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`https://realworld.habsida.net/api/articles/${slug}`);

  const data = await res.json();
  return data.article;
};

export default BlogDetails;

