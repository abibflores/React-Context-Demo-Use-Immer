import React, { useState } from "react";

const OffertsContext = React.createContext({});

export const OffersProvider = ({ children }) => {
    const [offers, setOffers] = useState([]);

    return (
        <OffertsContext.Provider value={{ offers, setOffers }}>
            {children}
        </OffertsContext.Provider>
    );
};

export default OffertsContext;