import React from "react";
import { BusinessProvider } from "../context/business";
import { VenuesProvider } from "../context/venues";
import { OffersProvider } from "../context/offers";
import { TransactionsProvider } from "../context/transactions";

import Bunisses from "../components/Bunisess";
import Venues from "../components/Venues";
import Offers from "../components/Oferts";
import Transactions from "../components/Transactions";

import getCharacters from "../services/character";

const Home = ({ offers }) => (
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
        <OffersProvider list={offers}>
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

export async function getServerSideProps() {
    const offers = await getCharacters();
    return {
        props: {
            offers,
        },
    };
}

export default Home;
