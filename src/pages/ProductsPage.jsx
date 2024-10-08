import React, { useEffect, useState } from 'react'

export default function ProductsPage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/books`).
      then((res) => res.json()).
      then((data) => setBooks(data))
  }, [])

  console.log(books)


  return (
    <div className="grid lg:grid-cols-3 sm: grid-cols-1  md:grid-cols-2 gap-5" >
      {/* <hr /> */}

      {books.map((book) => {
        return (
          <div className="grid grid-cols-2" key={book.id}>
            {/* <p>Book  Name: {book.bookName}</p>
            <p>Book rating: {book.rating}</p> */}
            <div className="card bg-base-100 w-96 shadow-xl mt-2">
              <figure>
                <img
                  src={book.image}
                  alt={book.bookName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {book.bookName}
                  <div className="badge badge-secondary">{book.rating}</div>
                </h2>
                <p>{book.review}</p>
                <div className="card-actions justify-centre">
                  <div className="badge badge-outline font-bold">Total Pages: {book.totalPages}</div>
                  <div className="badge badge-outline font-bold ">Published: {book.yearOfPublishing}</div>

                </div>
              </div>
            </div>
          </div>
        )
      })}






    </div>
  )
}
