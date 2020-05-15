import React, {PropsWithChildren} from "react";
import './listItem.scss';

function ListItem( props:PropsWithChildren<{ number:number, title:string }> ){

	return <>
		<hr/>
		<div className="list-item d-flex align-items-start">
			<div className="list-number">{props.number}</div>
			<div className="list-content">
				<div className="list-title">{props.title}</div>
				{props.children}
			</div>
		</div>
	</>;

}

export default ListItem;
