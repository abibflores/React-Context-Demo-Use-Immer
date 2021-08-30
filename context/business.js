import React, { useState } from "react";

const BusinessContext = React.createContext({});

export const BusinessProvider = ({ children }) => {
    const [business, setBusiness] = useState([]);

    return (
        <BusinessContext.Provider value={{ business, setBusiness }}>
            {children}
        </BusinessContext.Provider>
    );
};

export default BusinessContext;
