import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    const books = useSelector(state => state.book.readingList)
    return (
        <PageLayout>
            <h1>Reading Books</h1>

            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default ReadingList;