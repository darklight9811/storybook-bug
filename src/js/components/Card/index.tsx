// Packages
import React from "react";

// Component
import style from "./style.module.scss";
import Props from "./types";

const Card: React.FC<Props> = (props: Props) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className={style.main}>
			{props.title && <h2>{props.title}</h2>}
			{props.subtitle && <p>{props.subtitle}</p>}

			{props.children}
		</div>
	);
};

export default Card;
