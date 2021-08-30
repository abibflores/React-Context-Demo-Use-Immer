import React from "react";
import { BusinessProvider } from "../context/business";
import { VenuesProvider } from "../context/venues";
import { OffersProvider } from "../context/offers";
import { TransactionsProvider } from "../context/transactions";

import Bunisses from "../components/Bunisess";
import Venues from "../components/Venues";
import Offers from "../components/Oferts";
import Transactions from "../components/Transactions";

const Home = () => (
    <div className="Container">
        <BusinessProvider>
            <Bunisses className="Business">
                bunisess
            </Bunisses>
        </BusinessProvider>
        <VenuesProvider>
            <Venues className="Venues">
                venues
            </Venues>
        </VenuesProvider>
        <OffersProvider>
            <Offers className="Oferts">
                oferts
            </Offers>
        </OffersProvider>
        <TransactionsProvider>
            <Transactions className="Transactions">
                transactions
            </Transactions>
        </TransactionsProvider>
    </div>
);

export default Home;
