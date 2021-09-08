import { RouteComponentProps } from 'react-router';

enum AuthOption {
    'login' = 'login',
    'register' = 'register',
    'recovery' = 'recovery',
}

type AuthRouteParams = { 
    option: AuthOption;
}

interface AuthProps extends RouteComponentProps<AuthRouteParams> {
    login: (email:string, password: string) => Promise;
}

export default AuthProps;
