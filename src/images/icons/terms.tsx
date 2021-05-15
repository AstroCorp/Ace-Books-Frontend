import React from 'react';
import Icon from '../../types/icon';

const Sync = (props: Icon) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 403.333 512"
        fill={props.color || '#FFF'} 
        width={props.width} 
        height={props.height}
    >
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="0" y2="256">
            <stop offset="0" stop-color="#0ea5e9" />
            <stop offset="1" stop-color="#0ea5e9" />
        </linearGradient>
        <g fill="url(#SVGID_1_)">
            <path
                d="M0 0v512h298.546l104.787-104.787V0zm30 30h343.333v349.667H270.999V482h-241V30zm328.452 379.667l-57.453 57.453v-57.453z" />
            <path
                d="M137.666 91.667h128v30h-128zm-58.667 74.666h245.333v30H78.999zm0 64h245.333v30H78.999zm0 64h245.333v30H78.999zm0 85.334h31.499v30H78.999zm61.5 0h61.168v30h-61.168z" />
        </g>
    </svg>
);

export default Sync;
