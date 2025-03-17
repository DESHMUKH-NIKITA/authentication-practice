'use client';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';

export default function CreateProduct() {
    const [step, setStep] = useState(1);
    const [productType, setProductType] = useState('');
    const [customerType, setCustomerType] = useState('');
    const [loanTemplate, setLoanTemplate] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-64 bg-gray-100 min-h-screen">
                {/* Navbar */}
                <div className="w-full top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
                    <h4 className="text-xl font-semibold text-gray-800">Products &gt; Create New Product</h4>
                    <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700">Username</span>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                            N
                        </div>
                    </div>
                </div>

                {/* Stepper */}
                <div className="flex items-center space-x-4 mb-6 px-8 mt-4">
                    {['Product type', 'Customer type', 'Loan template', 'Product details', 'Review'].map((item, index) => (
                        <div key={index} className={`flex items-center space-x-2 ${step === index + 1 ? 'text-blue-500' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full border ${step === index + 1 ? 'border-blue-500' : 'border-gray-300'}`}>
                                {index + 1}
                            </div>
                            <span className={`${step === index + 1 ? 'font-medium' : 'font-normal'}`}>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md mx-6">
                    {/* Step 1: Product Type */}
                    {step === 1 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Please select the product type</h2>
                            <div className="space-y-8">
                                {[
                                    'Personal Loan - Secured',
                                    'Personal Loan - Unsecured',
                                    'Business Loan - Secured',
                                    'Business Loan - Unsecured',
                                    'Loan type 5',
                                    'Loan type 6',
                                ].map((type) => (
                                    <label key={type}>
                                        <input
                                            type="radio"
                                            name="productType"
                                            value={type}
                                            checked={productType === type}
                                            onChange={(e) => setProductType(e.target.value)}

                                        />
                                        {type}
                                        <br></br>
                                        <p className="text-sm text-gray-500 ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                                         </p>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Customer Type */}
                    {step === 2 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Please select the customer type</h2>
                            <label className={`block border p-4 rounded-lg cursor-pointer ${customerType === 'Individual' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-100'}`}>
                                <input
                                    type="radio"
                                    name="customerType"
                                    value="Individual"
                                    checked={customerType === 'Individual'}
                                    onChange={() => setCustomerType('Individual')}
                                    className="mr-3"
                                />
                                Individual
                            </label>
                            <label className={`block border p-4 rounded-lg cursor-pointer ${customerType === 'Business' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-100'}`}>
                                <input
                                    type="radio"
                                    name="customerType"
                                    value="Business"
                                    checked={customerType === 'Business'}
                                    onChange={() => setCustomerType('Business')}
                                    className="mr-3"
                                />
                                Business
                            </label>
                        </div>
                    )}

                    {/* Step 3: Loan Template */}
                    {step === 3 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Please select the loan template</h2>
                            <label className={`block border p-4 rounded-lg cursor-pointer ${loanTemplate === 'Default' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-100'}`}>
                                <input
                                    type="radio"
                                    name="loanTemplate"
                                    value="Default"
                                    checked={loanTemplate === 'Default'}
                                    onChange={() => setLoanTemplate('Default')}
                                    className="mr-3"
                                />
                                Default Template <FaInfoCircle className="inline ml-2" />
                            </label>
                            <label className={`block border p-4 rounded-lg cursor-pointer ${loanTemplate === 'Custom' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-100'}`}>
                                <input
                                    type="radio"
                                    name="loanTemplate"
                                    value="Custom"
                                    checked={loanTemplate === 'Custom'}
                                    onChange={() => setLoanTemplate('Custom')}
                                    className="mr-3"
                                />
                                Custom Loan <FaInfoCircle className="inline ml-2" />
                            </label>
                        </div>
                    )}

                    {/* Step 4: Product Details */}
                    {step === 4 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Please enter the product details</h2>
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="border p-3 w-full rounded mb-4"
                            />
                            <textarea
                                placeholder="Product Description"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                className="border p-3 w-full rounded h-24"
                            />
                        </div>
                    )}

                    {/* Step 5: Review */}
                    {step === 5 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Please review & confirm the details</h2>
                            {/* Display data */}
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between px-6 mt-6">
                    {step > 1 && (
                        <button onClick={handleBack} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">Back</button>
                    )}
                    {step < 5 ? (
                        <button onClick={handleNext} className="bg-green-500 text-white py-2 px-4 rounded-lg">Continue →</button>
                    ) : (
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
                    )}
                </div>
            </div>
        </div>
    );
}
