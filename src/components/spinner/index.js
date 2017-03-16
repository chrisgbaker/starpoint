import React from 'react';
import './styles.scss';

const Spinner = ({text}) => (
	<div className="loading-spinner" role="alert" aria-live="assertive">
		<div className="spinner-text">{text}</div>
		<div className="spinner" />
	</div>
);

export default Spinner;
