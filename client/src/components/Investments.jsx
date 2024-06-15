// src/components/Investments.js
import React from 'react';

const Investments = () => {
    return (
        <div className="space-y-8 p-6 text-white bg-black h-full">
            <h1 className="text-4xl font-bold mb-6">Investments</h1>
            
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-purple-400">Total Investments</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <div className="text-center">
                            <h3 className="text-xl text-teal-300">Total Amount</h3>
                            <p className="text-3xl font-bold text-teal-200 mt-2">$35,000</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl text-teal-300">Number of Properties</h3>
                            <p className="text-3xl font-bold text-teal-200 mt-2">8</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-purple-400">Recent Investments</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <ul className="space-y-4">
                        <li className="bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">Invested $2,000 in Property #321</li>
                        <li className="bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">Invested $3,500 in Property #654</li>
                        <li className="bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">Invested $4,000 in Property #987</li>
                    </ul>
                </div>
            </section>
            
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-purple-400">Investment Details</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <ul className="space-y-4">
                        <li className="flex justify-between bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">
                            <span>Property #321</span>
                            <span className="font-bold">$12,000</span>
                        </li>
                        <li className="flex justify-between bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">
                            <span>Property #654</span>
                            <span className="font-bold">$8,500</span>
                        </li>
                        <li className="flex justify-between bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">
                            <span>Property #987</span>
                            <span className="font-bold">$14,500</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Investments;
