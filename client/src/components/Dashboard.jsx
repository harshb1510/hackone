// src/components/Dashboard.js
import React from 'react';
import video from "../assets/dashboard.mp4"

const Dashboard = () => {
    return (
        <div className="space-y-8 p-6 text-white bg-black h-full">
            {/* Connect Wallet Button */}
            <div className="flex justify-end mb-4">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Connect Wallet</button>
            </div>

            <h1 className="text-4xl font-bold mb-6">Overview Dashboard</h1>
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" p-2 rounded-lg shadow-lg">
                    <video src={video} autoPlay loop muted className="w-full h-auto rounded-lg"/>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-xl font-bold">No investment found</h2>
                        <p className="text-gray-400 mt-2">Login to see your investment preview here</p>
                    </div>
                </div>
            </section>
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Top pools this week</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div className="bg-[#171320] p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold">Rsi</h3>
                                <p className="text-xl font-bold mt-2">$100</p>
                                <p className="text-green-400 mt-2">1 people participated</p>
                            </div>
                            <div>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">+ invest now</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#171320] p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold">Accumulation</h3>
                                <p className="text-xl font-bold mt-2">$100</p>
                                <p className="text-green-400 mt-2">1 people participated</p>
                            </div>
                            <div>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">+ invest now</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#171320] p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold">Spot Grid</h3>
                                <p className="text-xl font-bold mt-2">$7,324</p>
                                <p className="text-green-400 mt-2">11 people participated</p>
                            </div>
                            <div>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">+ invest now</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#171320] p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold">Rsi</h3>
                                <p className="text-xl font-bold mt-2">$3,324</p>
                                <p className="text-green-400 mt-2">22 people participated</p>
                            </div>
                            <div>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">+ invest now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-purple-400">Portfolio Overview</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <div className="text-center">
                            <h3 className="text-xl text-teal-300">Total Value</h3>
                            <p className="text-3xl font-bold text-teal-200 mt-2">$23,435</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl text-teal-300">Tokenized Properties</h3>
                            <p className="text-3xl font-bold text-teal-200 mt-2">5</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-purple-400">Recent Activities</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <ul className="space-y-4">
                        <li className="bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">Invested $500 in Property #123</li>
                        <li className="bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">Earned $50 in rental income from Property #456</li>
                        <li className="bg-gray-700 p-4 rounded-md hover:bg-purple-500 transition-colors">Property #789 value increased by 5%</li>
                    </ul>
                </div>
            </section>
            
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-purple-400">Market Trends</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <h3 className="text-xl text-teal-300">Average Property Value</h3>
                            <p className="text-3xl font-bold text-teal-200 mt-2">$250,000</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl text-teal-300">Market Growth Rate</h3>
                            <p className="text-3xl font-bold text-teal-200 mt-2">3.5%</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Dashboard;
