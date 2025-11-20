import VideoNavigation from "./VideoNavigation.jsx";
import Header from "./Header.jsx";
import Articles from "./Articles.jsx";
import Pagination from "./pagination.jsx";
import ProfileEditing from "../ProfileEditing.jsx";
import { useEffect, useState } from "react";

const MainPage = ({ setArticles, articles }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(7);
  const [totalArticles, setTotalArticles] = useState(0);

  const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
  const savedUsername = savedUser?.username;
  const savedEmail = savedUser?.email;
  const savedPassword = savedUser?.password;
  const savedAvatar = savedUser?.avatar;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE1LCJleHAiOjE3NjM2MDU2Njh9.i3Xq9zDmBh9AsuW_cBc8bBGGyxt4z5Lsq7a8s2lBddc";

  useEffect(() => {
    setLoading(true);
    const offset = (currentPage - 1) * articlesPerPage;
    fetch(
      `https://realworld.habsida.net/api/articles?limit=${articlesPerPage}&offset=${offset}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("ошибка");
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setTotalArticles(data.articlesCount);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currentPage]);

  if (loading) return (
      <div className="loading-container">
        <img className="loading-mg" src="./refresh.svg" alt="" />
        <div className="loading">Loading articles...</div>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Page not found!!</h1>
        <p>
          return to the <Link to="/">Homepage</Link>.
        </p>
      </div>
    );
  return (
    <>
      <header>
        <Header savedAvatar={savedAvatar} savedUsername={savedUsername} />
      </header>
      <main>
        <VideoNavigation />
        <Articles articles={articles} />
      </main>
      <footer>
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={totalArticles}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginate={paginate}
        />
      </footer>
    </>
  );
};

export default MainPage;
