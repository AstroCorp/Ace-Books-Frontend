import { RouteComponentProps } from 'react-router';

enum LegalOption {
    'faqs' = 'faqs',
    'terms-of-service' = 'terms-of-service',
    'privacy-notice' = 'privacy-notice',
}

type LegalRouteParams = { 
    option: LegalOption;
}

interface LegalProps extends RouteComponentProps<LegalRouteParams> {
    //
}

export default LegalProps;
