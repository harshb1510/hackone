import React, { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

const Transactions = () => {
  const [filter, setFilter] = useState('all'); // State for filter

  // Sample transaction data
  const transactions = [
    { id: 1, type: 'received', amount: 1000, sender: 'John Doe', timestamp: '2 hours ago' },
    { id: 2, type: 'sent', amount: 500, recipient: 'Jane Smith', timestamp: '3 hours ago' },
    // Add more transaction objects as needed
  ];

  // Filtered transactions based on selected filter
  const filteredTransactions = filter === 'all' ? transactions :
    transactions.filter(transaction => transaction.type === filter);

  return (
    <div className="p-6 text-white  min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Transactions</h1>

      {/* Filter Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md"
        >
          <option value="all">All</option>
          <option value="received">Received</option>
          <option value="sent">Sent</option>
        </select>
      </div>

      {/* Transaction List */}
      <section className="space-y-8">
        {filteredTransactions.map(transaction => (
          <div key={transaction.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {transaction.type === 'received' ? (
                  <FaExchangeAlt className="text-2xl mr-2 text-green-400" />
                ) : (
                  <FaExchangeAlt className="text-2xl mr-2 text-red-400" />
                )}
                <h3 className="text-xl font-bold">
                  {transaction.type === 'received'
                    ? `Received $${transaction.amount} from ${transaction.sender}`
                    : `Sent $${transaction.amount} to ${transaction.recipient}`}
                </h3>
              </div>
              <p className="text-gray-400">{transaction.timestamp}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Transactions;
