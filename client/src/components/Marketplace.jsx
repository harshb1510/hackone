import React from 'react';
import { FaHome, FaHandshake } from 'react-icons/fa'; // Removed FaLandmark as it wasn't used

// Sample data for properties and loans
const properties = [
    {
        id: 1,
        name: 'Luxury Villa in Beverly Hills',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        price: '$5,000,000',
        description: 'A stunning luxury villa located in the heart of Beverly Hills.',
        roi: '8%',
        status: 'Available'
    },
    {
        id: 2,
        name: 'Modern Apartment in New York',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        price: '$1,200,000',
        description: 'A modern apartment with a fantastic view of the New York skyline.',
        roi: '6%',
        status: 'Available'
    },
    {
        id: 3,
        name: 'Beachfront House in Miami',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        price: '$3,500,000',
        description: 'A beautiful beachfront house located in sunny Miami.',
        roi: '7%',
        status: 'Sold'
    },
];

const loans = [
    {
        id: 1,
        name: 'Loan against Luxury Villa',
        collateral: 'Luxury Villa in Beverly Hills',
        loanAmount: '$3,000,000',
        interestRate: '5%',
        status: 'Available'
    },
    {
        id: 2,
        name: 'Loan against Modern Apartment',
        collateral: 'Modern Apartment in New York',
        loanAmount: '$800,000',
        interestRate: '4.5%',
        status: 'Available'
    },
    {
        id: 3,
        name: 'Loan against Beachfront House',
        collateral: 'Beachfront House in Miami',
        loanAmount: '$2,000,000',
        interestRate: '5.5%',
        status: 'Closed'
    },
];

const Marketplace = () => {
    return (
        <div className="p-6 text-white min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center">Marketplace</h1>
            
            {/* Property Listings */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-purple-400 flex items-center"><FaHome className="mr-2"/>Available Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map(property => (
                        <div key={property.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold text-teal-300">{property.name}</h3>
                            <p className="text-lg text-teal-200 mt-2">{property.price}</p>
                            <p className="text-gray-400 mt-2">{property.description}</p>
                            <p className="text-green-400 mt-2">ROI: {property.roi}</p>
                            <p className={`mt-2 font-semibold ${property.status === 'Available' ? 'text-green-400' : 'text-red-400'}`}>{property.status}</p>
                            {property.status === 'Available' && (
                                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md">Invest Now</button>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Lending and Borrowing */}
            <section className="space-y-8 mt-12">
                <h2 className="text-3xl font-semibold text-purple-400 flex items-center"><FaHandshake className="mr-2"/>Lending and Borrowing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loans.map(loan => (
                        <div key={loan.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-teal-300">{loan.name}</h3>
                            <p className="text-lg text-teal-200 mt-2">Collateral: {loan.collateral}</p>
                            <p className="text-lg text-teal-200 mt-2">Loan Amount: {loan.loanAmount}</p>
                            <p className="text-lg text-teal-200 mt-2">Interest Rate: {loan.interestRate}</p>
                            <p className={`mt-2 font-semibold ${loan.status === 'Available' ? 'text-green-400' : 'text-red-400'}`}>{loan.status}</p>
                            {loan.status === 'Available' && (
                                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md">Apply for Loan</button>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Marketplace;
