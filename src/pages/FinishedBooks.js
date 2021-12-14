import React from "react";
import { useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const books = useSelector(state => state.book.finishedList);

  return (
    <PageLayout>
      <h1>Finished Books</h1>
      {
        books.map((book) => (<Book key={book.id} book={book} />))
      }
    </PageLayout>
  );
};

export default FinishedBooks;
