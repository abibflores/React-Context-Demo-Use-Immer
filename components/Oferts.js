import React, { useContext } from "react";

import Context from "../context/offers";

const Offers = ({ children }) => {
    const OfertsContext = useContext(Context);
    console.log("OffersContextProvider", OfertsContext);
    const { offers, setOffers } = OfertsContext;
    console.log(offers, "offers");
    return (
        <div>
            {children}
            <button type="button" onClick={() => setOffers([{ ofertId: 1 }])}>
                nueva oferta 10
            </button>
        </div>
    );
};

export default Offers;
