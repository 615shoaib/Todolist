import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import Todo from './First todo list/todo';
// import Facebook from './Facebook/fhome';
import './index.css';
// import Account from './Interview/Accounded';
// import News from './new/news';
// import App from './App';
// import Roll from './Routes/Rolling';
import reportWebVitals from './reportWebVitals';
import App from './website/App';
// import Todo from './Todolist/todo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App /> */}
  {/* <Roll /> */}
    {/* <News /> */}
    {/* <Facebook /> */}
    {/* <Account /> */}
    {/* <Todo /> */}
    {/* <Todo /> */}

   <BrowserRouter>
    <App />
    </BrowserRouter>
    
   </React.StrictMode>
);

reportWebVitals();
