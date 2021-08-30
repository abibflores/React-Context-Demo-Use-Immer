import React, { useState } from "react";

const VenuesContext = React.createContext({});

export const VenuesProvider = ({ children }) => {
    const [venues, setVenues] = useState([]);

    return (
        <VenuesContext.Provider value={{ venues, setVenues }}>
            {children}
        </VenuesContext.Provider>
    );
};

export default VenuesContext;
