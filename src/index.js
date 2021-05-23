import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

function FixedAnime(){
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {
    $('#header').addClass('fixed');
  } else {
    $('#header').removeClass('fixed');
  }
}

$(window).scroll(function () {
  FixedAnime();
});

$(window).on('load', function () {
  FixedAnime();
});
