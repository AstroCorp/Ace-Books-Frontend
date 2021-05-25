enum LegalOption {
    'faqs' = 'faqs',
    'terms-of-service' = 'terms-of-service',
    'privacy-notice' = 'privacy-notice',
}

type LegalRouteParams = { 
    option: LegalOption;
}

export default LegalRouteParams;
