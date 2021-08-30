import React, { useContext } from "react";

import Context from "../context/venues";

const Venues = ({ children }) => {
    const VenuesContext = useContext(Context);
    console.log("VenuesContext", VenuesContext);
    const { venues, setVenues } = VenuesContext;
    console.log(venues, "Venues");
    return (
        <div>
            {children}
            <button type="button" onClick={() => setVenues([{ venuesId: 1 }])}>
                nueva venues 10
            </button>
        </div>
    );
};

export default Venues;
