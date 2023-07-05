"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import { BsSearch } from 'react-icons/bs';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortByDate, setSortByDate] = useState(false);
  const [displayedArticles, setDisplayedArticles] = useState(10);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=technology&domains=techcrunch.com&from=${startDate}&to=${endDate}&apiKey=da006366598e4049ae4ee2487c91fdd4`
      );

      setArticles(response.data.articles);
    };

    getArticles();
  }, [startDate, endDate]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortByDate = () => {
    setSortByDate(!sortByDate);
  };

  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return sortByDate ? dateA - dateB : dateB - dateA;
  });

  const filteredArticles = sortedArticles.filter((article) => {
    const isMatchAuthor = article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const isMatchTitle = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isMatchAuthor || isMatchTitle;
  });

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    if (selectedEndDate >= startDate) {
      setEndDate(selectedEndDate);
    }
  };

  const handleClearDates = () => {
    setStartDate('');
    setEndDate('');
  };

  const handleLoadMore = () => {
    setDisplayedArticles((prevCount) => prevCount + 10);
  };

  return (
    <div className='pt-[8rem] z-[1] flex-wrap'>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center container mx-auto my-10 max-w-[80rem] md:gap-y-0 gap-y-10">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-black pl-2 max-w-[20rem] py-2"
            onChange={handleSearch}
          />
        <div className="flex flex-row gap-x-5 ">
          <div className="border shadow-lg px-2 py-1">
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div className="border shadow-lg px-2 py-1">
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              min={startDate}
            />
          </div>
          <button onClick={handleClearDates} className="border shadow-lg px-2 py-1">
            Clear
          </button>
        </div>

        <button onClick={handleSortByDate} className='border px-2 py-2 shadow-lg hover:opacity-50 transition duration-500'>
          {sortByDate ?  'Sort by News': 'Sort by Oldest'}
        </button>
      </div>

      {filteredArticles.slice(0, displayedArticles).map((article) => (
        <NewsItem
          key={article.title}
          author={article.author}
          title={article.title}
          url={article.url}
          description={article.description}
          urlToImage={article.urlToImage}
          time={article.publishedAt}
        />
      ))}

      {displayedArticles < filteredArticles.length && (
        <div className='flex flex-col justify-center my-10'>
          <button onClick={handleLoadMore} className='border px-2 py-5 shadow-xl hover:opacity-50 transition duration-500 w-full text-4xl text-[#20B76F] font-bold  max-w-[80rem] mx-auto'>
          Load More
        </button>
        </div>
      )}
    </div>
  );
};

export default NewsList;

