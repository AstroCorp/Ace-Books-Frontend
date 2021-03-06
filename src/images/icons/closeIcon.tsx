import React from 'react';
import { IconProps } from '../../types';

const closeIcon = (props: IconProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="-49 141 512 512"
        fill={props.color || '#FFF'} 
        width={props.width} 
        height={props.height}
        stroke="currentColor"
    >
        <path d="M242.355,397L242.355,397l127.987-127.987c9.763-9.763,9.763-25.592,0-35.355
	        c-9.764-9.763-25.592-9.763-35.355,0L207,361.644L79.013,233.658c-9.764-9.763-25.592-9.763-35.355,0s-9.763,25.592,0,35.355
	        l127.986,127.986l0,0L43.658,524.986c-9.763,9.763-9.763,25.592,0,35.355c9.764,9.763,25.592,9.763,35.355,0l127.986-127.986
	        l127.987,127.987c9.764,9.763,25.592,9.763,35.355,0s9.763-25.592,0-35.355L242.355,397z" />
    </svg>
);

export default closeIcon;
