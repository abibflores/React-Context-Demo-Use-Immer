import React, { useContext } from "react";

import Context from "../context/offers";

const Offers = ({ children }) => {
    const OfertsContext = useContext(Context);
    console.log("OffersContextProvider", OfertsContext);
    const { offers, setOffers } = OfertsContext;
    console.log(offers, "offers");

    const newOffer = () => {
        setOffers((draft) => {
            draft[0].origin.name = "Earth (C-555)";
        });
    };
    return (
        <div>
            {children}
            <button type="button" onClick={() => newOffer()}>
                nueva oferta 10
            </button>
        </div>
    );
};

export default Offers;
