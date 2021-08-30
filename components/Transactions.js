import React, { useContext } from "react";

import Context from "../context/transactions";

const Transactions = ({ children }) => {
    const TransactionsContext = useContext(Context);
    console.log("TransactionsContext", TransactionsContext);
    const { transactions, setTransactions } = TransactionsContext;
    console.log(transactions, "transactions");
    return (
        <div>
            {children}
            <button type="button" onClick={() => setTransactions({ transactionsId: 1 })}>
                nueva transactions 10
            </button>
        </div>
    );
};

export default Transactions;
