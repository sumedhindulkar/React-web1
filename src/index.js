import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import './index.css'

ReactDOM.render(
<div>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</div>
, document.getElementById('root'));


// <div className="container-fluid nav_bg">
//         <div className="row">
//           <div className="col-10 mx-auto">
            
//           </div>
//         </div>
//       </div>