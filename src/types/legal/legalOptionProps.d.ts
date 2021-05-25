import { ReactComponentElement } from 'react';
import { IconProps } from '..';

export default interface legalOptionProps {
    icon: ReactComponentElement<IconProps>;
    title: string;
    description: string;
    url: string;
}
