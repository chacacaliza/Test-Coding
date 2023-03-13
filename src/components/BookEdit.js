import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookEdit = () => {

    const { bookid } = useParams();


    useEffect(() => {
        fetch("http://localhost:8000/books/" + bookid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            titlechange(resp.title);
            authorchange(resp.author);
            purchpricechange(resp.purchprice);
            sellpricechange(resp.sellprice);
            stockchange(resp.stock);
            activechange(resp.active);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[title,titlechange]=useState("");
    const[author,authorchange]=useState("");
    const[purchprice,purchpricechange]=useState("");
    const[sellprice,sellpricechange]=useState("");
    const[stock,stockchange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const bookdata={id,title,author,purchprice,sellprice,stock,active};
        

        fetch("http://localhost:8000/books/"+bookid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(bookdata)
        }).then((res)=>{
            alert('Saved Successfully')
            navigate('/')
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    return (
        <div>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Book Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input required value={title} onMouseDown={e=>valchange(true)} onChange={e=>titlechange(e.target.value)} className="form-control"></input>
                                   {title.length==0 && validation && <span className="text-danger">Enter the Title </span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input value={author} onChange={e=>authorchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Puchased Price</label>
                                        <input value={purchprice} onChange={e=>purchpricechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Selling Price</label>
                                        <input value={sellprice} onChange={e=>sellpricechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Stock</label>
                                        <input value={stock} onChange={e=>stockchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
    }
    
    export default BookEdit;