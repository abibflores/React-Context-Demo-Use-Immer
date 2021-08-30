import React from "react";
import { BusinessProvider } from "./context/business";
import { VenuesProvider } from "./context/venues";
import { OfertsProvider } from "./context/oferts";
import { TransactionsProvider } from "./context/transactions";

const Home = () => (
    <div className="Container">
        <BusinessProvider>
            <div className="Business">
                bunisess
            </div>
        </BusinessProvider>
        <VenuesProvider>
            <div className="Venues">
                venues
            </div>
        </VenuesProvider>
        <OfertsProvider>
            <div className="Oferts">
                oferts
            </div>
        </OfertsProvider>
        <TransactionsProvider>
            <div className="Transactions">
                transactions
            </div>
        </TransactionsProvider>
    </div>
);

export default Home;
