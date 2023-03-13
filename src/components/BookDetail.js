import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const BookDetail = () => {
    const { bookid } = useParams();

    const [bookdata, bookdatachange] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/books/" + bookid).then((res) => {
            return res.json();
        }).then((resp) => {
            bookdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div>
            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Book Detail</h2>
                    </div>
                    <div className="card-body"></div>


                    {bookdata &&
                        <div>
                            <h2> The Title of the Book is : {bookdata.title} ({bookdata.id})</h2>
                            <h3> Purchased Price  is :</h3>
                            <h3> Selling Price is :</h3>
                            <h4> Picture Book : {bookdata.image}</h4>
                            <h5> Book Stock : {bookdata.stock}</h5>
                            <Link className="btn btn-primary" to="/">Back to Menu</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default BookDetail;