// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
// function Greeting() {
//   return (
//   <div>
//     <h2>My first component</h2>
//     </div>
//     );
// }
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

const BookList = () =>{
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () =>{
  return <article>
  <Image />
  <Title />
  <Author />
  </article>;
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/713-J3tw46L._AC_UL600_SR600,400_.jpg"
    alt="The Scarlet Shedder: A Graphic Novel (Dog Man #12)"
  />
);
const Title = () => <h2> Interesting Facts for curious minds</h2>;
const Author = () => {
return <h4>Jordan Moore</h4>;
};


    // <>
    //   <div className='someValue'>
    //     <h3>hello people</h3>
    //     <ul>
    //       <li>
    //         <a href="#">hello world</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <h2>hello world</h2>
    //   <input type='text' name='' />
    // </>
    

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
