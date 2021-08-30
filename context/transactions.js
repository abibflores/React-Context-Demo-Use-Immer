import React, { useState } from "react";

const TransactionsContext = React.createContext({});

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState({});

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export default TransactionsContext;
