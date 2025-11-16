import { useLoaderData, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetails = () => {
  const article = useLoaderData();
  const { slug } = useParams();
  return (
    <div className="blog-details">
      <h2 className="details-title">{article.title}</h2>
      <h5 className="details-author"> author: {article.author.username}</h5>
      {/* <p className="details-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis beatae
        eos reiciendis quae deleniti cumque maxime vel dolores iusto aspernatur.
      </p> */}
         <ReactMarkdown>{article.body}</ReactMarkdown>
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
