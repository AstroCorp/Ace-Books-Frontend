import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = ({ className }: any) => {
    const [ t ] = useTranslation('global');

    return (
        <footer className={'text-white text-shadow text-center ' + className}>
            <p>Copyright &copy; { new Date().getFullYear() } Ace Books. { t('footer') }</p>
        </footer>
    );
}

export default Footer;
