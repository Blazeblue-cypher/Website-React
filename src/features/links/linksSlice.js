

import { LINKS } from '../../app/shared/LINKS.js';

export const selectFeaturedLink = () => {
    return LINKS.find((link) => link.featured);
};



