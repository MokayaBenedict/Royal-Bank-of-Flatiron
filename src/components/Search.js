
import React, { useEffect, useState } from "react";

function Search({ transactions, setTransactions, getTransactions }) {
  const [search, setSearch] = useState("");

  const doSearch = (e) => {
    let s = e.target.value.toLowerCase();
    setSearch(s);

    if (s.length < 4) {
      getTransactions(transactions);
      return;
    }

    let filteredTransactions = transactions.filter(
      (trans) =>
        trans.description.toLowerCase().includes(s) ||
        trans.category.toLowerCase().includes(s)
    );

    setTransactions(filteredTransactions);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={doSearch}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
