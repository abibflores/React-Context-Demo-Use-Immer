import React, { useState } from "react";

const OffertsContext = React.createContext({});

export const OffersProvider = ({ children, list }) => {
    const [offers, setOffers] = useState(list);

    return (
        <OffertsContext.Provider value={{ offers, setOffers }}>
            {children}
        </OffertsContext.Provider>
    );
};

export default OffertsContext;
