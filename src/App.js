import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import BookCreate from './components/BookCreate';
import BookDetail from './components/BookDetail';
import BookEdit from './components/BookEdit';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <h1>Books Rent</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />}></Route>
          <Route path='/books/create' element={<BookCreate />}></Route>
          <Route path='/books/edit/:bookid' element={<BookEdit />}></Route>
          <Route path='/books/detail/:bookid' element={<BookDetail />}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/add" component={AddProduct} />
          <Route exact path="/edit/:id" component={EditProduct} />
        </Switch>
      </Router> */}
    </div>
  );

}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;







// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
//       setData(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((post) => (
//             <tr key={post.id}>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

