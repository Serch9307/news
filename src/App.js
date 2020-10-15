import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListNews from "./components/ListNews";

function App() {
  // state of category
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  // call api when category is not empty
  useEffect(() => {
    if (category === "") return;
    let apiNew = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&${category}=business&apiKey=a9bed41bebeb40c99c71dfea8454e3f8`;
      const result = await fetch(url);
      const resultNews = await result.json();
      setNews(resultNews.articles);
    };
    apiNew();    
  }, [category]);

  return (
    <Fragment>
      <Header title="News search engine!" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <ListNews news={news} />
      </div>
    </Fragment>
  );
}

export default App;
