import React, { useState } from "react";

const OfertsContext = React.createContext({});

export const OfertsProvider = ({ children }) => {
    const [offerts, setOferts] = useState([]);

    return (
        <OfertsContext.Provider value={{ offerts, setOferts }}>
            {children}
        </OfertsContext.Provider>
    );
};

export default OfertsContext;
