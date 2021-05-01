import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { LegalRouteParams } from '../types/routesParams';

const Legal = (props: RouteComponentProps<LegalRouteParams>) => {
    const [ option, setOption ] = useState(props.match.params.option || 'faqs');

    useEffect(() => {
        props.history.replace('/legal/' + option);
    }, [option]);

    return (
        <div>
            <h1>Legal</h1>
        </div>
    );
}

export default Legal;
