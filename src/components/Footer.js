import React, {Component} from 'react';

export function Footer(props) {
  return (
    <footer>
      <div className="constrained">
        <div className="footer__inner">
          <nav>
            <ul className="footer__links">
              <li key={props.links[0]} className="footer__linkitem"><a href={props.urls[0]} target="_blank">{props.links[0]}</a></li>
              <li key={props.links[1]} className="footer__linkitem"><a href={props.urls[1]} target="_blank">{props.links[1]}</a></li>
            </ul>
          </nav>

          <p>&#169; David Trussler 2020</p>
        </div>
      </div>
    </footer>
  )
}
