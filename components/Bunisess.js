import React, { useContext } from "react";

import Context from "../context/business";

const Business = ({ children }) => {
    const BusinessContext = useContext(Context);
    console.log("BusinessContext", BusinessContext);
    const { business, setBusiness } = BusinessContext;
    console.log(business, "business");
    return (
        <div>
            {children}
            <button type="button" onClick={() => setBusiness([{ businessId: 1 }])}>
                nueva business 10
            </button>
        </div>
    );
};

export default Business;
