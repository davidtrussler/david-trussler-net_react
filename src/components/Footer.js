import React, {Component} from 'react';

export class Footer extends Component {
	render = () => 
      <footer>
        <div class="constrained">
          <div class="footer__inner">
            <nav>
              <ul class="footer__links">
                <li class="footer__linkitem"><a href="https://www.linkedin.com/in/dtrussler/" target="_blank">LinkedIn</a></li>
                <li class="footer__linkitem"><a href="https://github.com/davidtrussler" target="_blank">GitHub</a></li>
              </ul>
            </nav>

            <p>&#169; David Trussler 2020</p>
          </div>
        </div>
      </footer>
}