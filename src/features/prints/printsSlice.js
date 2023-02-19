import { PRINTS } from "../../app/shared/PRINTS";

export const selectAllPrints = () => {
    return PRINTS;
};



export const selectPrintById = (id) => {
    return PRINTS.find((print) => print.id === parseInt(id));
};

export const selectFeaturedPrint = () => {
    return PRINTS.find((print) => print.featured);
};