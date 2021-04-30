import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { AuthRouteParams } from '../types/RoutesParams';

const Auth = (props: RouteComponentProps<AuthRouteParams>) => {
    const [ mode, setMode ] = useState(props.match.params.mode || 'login');

    return (
        <div className="bg-books">
            Auth mode: { mode }
        </div>
    );
}

export default Auth;
