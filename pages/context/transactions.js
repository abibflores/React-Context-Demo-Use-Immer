import React, { useState } from "react";

const TransactionsContext = React.createContext({});

export const TransactionsProvider = ({ children }) => {
    const [transacions, setTransactions] = useState({});

    return (
        <TransactionsContext.Provider value={{ transacions, setTransactions }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export default TransactionsContext;
