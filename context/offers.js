import React from "react";
import { useImmer } from "use-immer";

const OffertsContext = React.createContext({});

export const OffersProvider = ({ children, list }) => {
    const [offers, setOffers] = useImmer(list);

    return (
        <OffertsContext.Provider value={{ offers, setOffers }}>
            {children}
        </OffertsContext.Provider>
    );
};

export default OffertsContext;
