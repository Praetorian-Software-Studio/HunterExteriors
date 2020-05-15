import React, {PropsWithChildren} from "react";
import './parallax.scss';

function Parallax( props:PropsWithChildren<{ img:string }> ){

	return (
		<div className="parallax" style={{ backgroundImage: `url(${props.img})` }}>
			<blockquote className="blockquote">
				{props.children}
			</blockquote>
		</div>
	)

}

export default Parallax;
