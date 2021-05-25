enum AuthOption {
    'login' = 'login',
    'register' = 'register',
    'recovery' = 'recovery',
}

type AuthRouteParams = { 
    option: AuthOption;
}

export default AuthRouteParams;
