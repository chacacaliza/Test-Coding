import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Books = () => {
    const[bookdata, bookdatachange]= useState(null);
    const navigate = useNavigate();

    const LoadDetail=(id)=> {
        navigate("/books/detail/"+ id);
    }

    const LoadEdit=(id)=> {
        navigate("/books/edit/"+ id);
    }

    const Removefunction=(id)=> {
        if(window.confirm("Do you want to remove?")) {
            fetch("http://localhost:3000/books/" + id, {
                method:"DELETE",
            }).then((res)=>{
                alert('DELETE Successfully')
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }

    useEffect(() =>{
        fetch("http://localhost:3000/books").then((res) => {
            return res.json();
        }).then((resp)=>{
            bookdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    },[])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                   <h2>Books Rent</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="books/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Author</td>
                            <td>purchase price</td>
                            <td>Selling price</td>
                            <td>Stock</td>
                            <td>Picture</td>
                            <td>Action</td>    
                        </tr>
                    </thead>
                    <tbody>

                        {bookdata && 
                            bookdata.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.purchprice}</td>
                                    <td>{item.sellprice}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.image}</td>
                                    <td><a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>
                                    <a onClick={()=>{Removefunction(item.id)}} className="btn btn-danger">Remove</a>
                                    <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary">Details</a>
                                    
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Books;