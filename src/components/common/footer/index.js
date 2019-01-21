import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <ul class="social-list">
              <li class="social-small-box">
                <a href="mailto:carolinasknoll@gmail.com"><i class="social-icon fa fa-envelope-o"></i></a>
              </li>
              <li class="social-small-box">
                <a href="https://www.linkedin.com/in/carolinaknoll"><i class="social-icon fa fa-linkedin"></i></a>
              </li>
              <li class="social-small-box">
                <a href="https://github.com/carolinaknoll"><i class="social-icon fa fa-github"></i></a>
              </li>
              <li class="social-small-box">
                <a href="https://twitter.com/carolina_knoll"><i class="social-icon fa fa-twitter"></i></a>
              </li>
              <li class="social-small-box">
                <a href="http://codepen.io/carolinaknoll/"><i class="social-icon fa fa-codepen"></i></a>
              </li>
              <li class="social-small-box">
                <a href="http://www.freecodecamp.com/carolinaknoll"><i class="social-icon fa fa-free-code-camp"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <p>Handcrafted with <i class="fa fa-heart"></i> and <i class="fa fa-coffee"></i> by Carolina Knoll.</p>
          </div>
        </div>
      </footer>
    );
  }
}
