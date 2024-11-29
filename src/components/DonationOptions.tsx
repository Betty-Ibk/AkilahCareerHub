import React, { useState } from 'react';
import { CreditCard, Gift } from 'lucide-react';

const predefinedOptions = [
  { amount: '25', description: 'Provides learning materials for one student' },
  { amount: '100', description: 'Sponsors a month of technical training' },
  { amount: '500', description: 'Funds a full scholarship' },
];

export default function DonationOptions() {
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('money');
  const [kindDescription, setKindDescription] = useState('');

  const handleDonate = (amount?: string) => {
    if (donationType === 'money') {
      console.log(`Selected donation amount: $${amount || customAmount}`);
    } else {
      console.log('Donation in kind:', kindDescription);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`flex items-center px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 ${
            donationType === 'money'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-700 text-white hover:bg-blue-800'
          }`}
          onClick={() => setDonationType('money')}
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Monetary Donation
        </button>
        <button
          className={`flex items-center px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 ${
            donationType === 'kind'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-700 text-white hover:bg-blue-800'
          }`}
          onClick={() => setDonationType('kind')}
        >
          <Gift className="w-5 h-5 mr-2" />
          Donate in Kind
        </button>
      </div>

      {donationType === 'money' ? (
        <>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {predefinedOptions.map((option, index) => (
              <button
                key={index}
                className="bg-white text-blue-600 p-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => handleDonate(option.amount)}
              >
                <div className="text-2xl font-bold mb-2">${option.amount}</div>
                <div className="text-sm">{option.description}</div>
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto mt-8">
            <div className="bg-white rounded-lg p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Amount
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Enter amount"
                  />
                </div>
                <button
                  onClick={() => handleDonate()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Donate Equipment or Resources</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description of Donation
              </label>
              <textarea
                value={kindDescription}
                onChange={(e) => setKindDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={4}
                placeholder="Describe what you'd like to donate (e.g., laptops, books, equipment)"
              />
            </div>
            <button
              onClick={() => handleDonate()}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Submit Donation Offer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}