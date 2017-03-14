import * as React from 'react';
import './styles.scss';

const Spinner: React.StatelessComponent<any> = ({text}): JSX.Element => (
	<div className="loading-spinner" role="alert" aria-live="assertive">
		<div className="spinner-text">{text}</div>
		<div className="spinner" />
	</div>
);

export default Spinner;
