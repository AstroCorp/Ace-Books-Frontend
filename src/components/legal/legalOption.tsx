import React from 'react';
import { Link } from 'react-router-dom';
import { LegalOptionProps } from '../../types';

const LegalOption = (props: LegalOptionProps) => (
    <Link className="bg-white bg-opacity-80 rounded-md p-4 mb-4 flex flex-row" to={props.url}>
		<div>
			{ props.icon }
		</div>
	    <div className="ml-4">
			<div className="font-semibold">{ props.title }</div>
			<p className="text-xs text-gray-600">{ props.description }</p>
		</div>
	</Link>
);

export default LegalOption;
