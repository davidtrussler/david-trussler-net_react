import React from 'react';

export function Anchor(props) {
	return (
		<li className="footer__linkitem">
			<a 
				href={props.href}
				target="_blank"
			>{props.link}</a>
		</li>
	)
}
