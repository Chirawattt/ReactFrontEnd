// Code for List all the books in the library
// with the option to view, update and delete the book

import {useState, useEffect} from 'react';
import axios from 'axios';

import PopupForm from './Popup';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({id: "", title: "", author: "", year: ""});

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState([]);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    const handleFormSubmit = (data) => {
        if (data.id) {
            // Update existing Data
            setFormData(formData.map(item => item.id === data.id ? data : item));
        }else {
            // Add new data with a unique id
            setFormData([...formData, { ...data, id: Date.now() }]);
        }
        console.log(formData); // You can replace this with any action
        handleClosePopup();
    };

    useEffect(() => {
        axios.get('')
        .then((res) => {
            setBooks(res.data);
        });
    }, []);

    const viewBook = (id) => {
        axios.get('')
        .then((res) => {
            setBook(res.data);
        });
        alert("Book Title: " + book.title + "\nBook Author: " + book.author);
    };

    const updateBook = (book) => {
        console.log("upDFunc:  ", book);
        console.log("upDFunc: ", editingData);
    
        axios.put('')
        .then((res) => {
            setBook(res.data);
        });
    };

    const deleteBook = (id) => {
        axios.delete('')
        .then((res) => {
            setBooks(books.filter((book) => book.id !== id));
        });
    };

    return (
        <div>
            <h2>Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <button onClick={() => viewBook(book.id)}>View</button>
                                <button onClick={() => updateBook(book)}>Update</button>
                                <button onClick={() => deleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={handleOpenPopup}>Add Author and Title</button>
                <PopupForm
                    isOpen={isPopupOpen}
                    onClose={handleClosePopup}
                    onSubmit={handleFormSubmit}
                />
                {/* Render submitted data or other components here */}
            </div>
        </div>
    );
}