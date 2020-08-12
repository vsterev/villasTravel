import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './site.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './utils/auth'
import * as serviceWorker from './serviceWorker';
import Navigation from './navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

ReactDOM.render(
  // <React>
    <Container>
      {/* <Jumbotron> */}
        <Auth>
          <Navigation />
        </Auth>
      {/* </Jumbotron> */}
    </Container>,
  // </React>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
