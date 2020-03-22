import React, {Component} from 'react';
import {Anchor} from './Anchor'; 

function footerLinks(props) {
  let arrayElems = []; 

  for (let i = 0; i < props.urls.length;  i++) {
    arrayElems.push(
      <Anchor href={props.urls[i]} link={props.links[i]} key={"footer__linkitem-" + i}/>
    )
  }

  return arrayElems; 
}

export function Footer(props) {
  return (
    <footer>
      <div className="constrained">
        <div className="footer__inner">
          <nav>
            <ul className="footer__links">
              {footerLinks(props)}
            </ul>
          </nav>

          <p>&#169; David Trussler 2020</p>
        </div>
      </div>
    </footer>
  )
}
