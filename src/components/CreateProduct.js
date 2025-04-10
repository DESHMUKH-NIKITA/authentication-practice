'use client';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { FaArrowLeft, FaInfoCircle, FaEdit } from 'react-icons/fa';
import { Pencil, Trash } from 'lucide-react';


export default function CreateProduct() {
    const [step, setStep] = useState(1);
    const [productType, setProductType] = useState('Personal Loan - Secured');
    const [customerType, setCustomerType] = useState('Individual');
    const [selectedStage, setSelectedStage] = useState('');
    const [templateSelected, setTemplateSelected] = useState(false);

    const loanStages = [
        'Lead',
        'Registered',
        'Appraisal',
        'Legal Opinion & Valuation',
        'Pending for Approval',
        'Approved',
        'Disbursed',
        'Rejected',
    ];

    const handleTemplateChange = (template) => {
        setLoanTemplate(template);
        if (template === 'Custom') {
            setTemplateSelected(true); // Hide the first section
        }
    };

    const [loanTemplate, setLoanTemplate] = useState('Standard Loan Process (Default)');
    const [productName, setProductName] = useState('Product Name1');
    const [productDescription, setProductDescription] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    );


    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };
    const handleEdit = (editStep) => {
        setStep(editStep);
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
                <div className="flex items-center space-x-8 mb-6 px-10 mt-4">
                    {['Product type', 'Customer type', 'Loan template', 'Product details', 'Review'].map((item, index) => (
                        <div key={index} className={`flex items-center space-x-4 ${step === index + 1 ? 'text-blue-500' : 'text-gray-400'}`}>
                            <div className={`w-6 h-7 flex items-center justify-center rounded-full border ${step === index + 1 ? 'border-blue-500' : 'border-gray-300'}`}>
                                {index + 1}
                            </div>
                            <span className={`${step === index + 1 ? 'font-medium' : 'text-xs !important '}`}>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="flex items-center bg-white p-6 rounded-lg shadow-md mx-10">
                    {/* Step 1: Product Type */}
                    {step === 1 && (
                        <div>

                            <h5 className="mb-4">Please enter the product details</h5>

                            <div className=" space-y-3">
                                {[
                                    {
                                        type: 'Personal Loan - Secured',
                                        description:
                                            "A Personal Loan - Secured is a type of loan where the borrower pledges an asset as collateral to secure the loan. This reduces the lender's risk, often resulting in lower interest rates and higher loan amounts compared to unsecured personal loans.",
                                    },
                                    {
                                        type: 'Personal Loan - Unsecured',
                                        description:
                                            "A Personal Loan - Unsecured does not require any collateral, making it ideal for those who do not wish to risk their assets. These loans often have higher interest rates due to the increased risk to the lender.",
                                    },
                                    {
                                        type: 'Business Loan - Secured',
                                        description:
                                            "A Business Loan - Secured allows businesses to access higher loan amounts at lower interest rates by pledging assets such as property, inventory, or equipment as collateral.",
                                    },
                                    {
                                        type: 'Business Loan - Unsecured',
                                        description:
                                            "A Business Loan - Unsecured provides funds without requiring collateral, making it suitable for businesses with strong credit histories seeking quick access to capital.",
                                    },
                                    {
                                        type: 'Loan type 5',
                                        description:
                                            "Loan type 5 is a specialized loan product tailored for unique financial needs. Contact our support team for more details.",
                                    },
                                    {
                                        type: 'Loan type 6',
                                        description:
                                            "Loan type 6 offers flexible terms and competitive rates to help you meet your financial goals with ease.",
                                    },
                                ].map(({ type, description }) => (
                                    <label key={type} className="block cursor-pointer">
                                        <input
                                            type="radio"
                                            name="productType"
                                            value={type}
                                            checked={productType === type}
                                            onChange={(e) => setProductType(e.target.value)}
                                            className="hidden"
                                        />
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-5 h-5 border-2 rounded-full ${productType === type ? 'border-black' : 'border-gray-400'
                                                    } flex items-center justify-center`}
                                            >
                                                {productType === type && (
                                                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                                )}
                                            </div>
                                            <span className="text-sm font-medium">{type}</span>
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <p className="text-xs text-gray-500 mt-1 px-9">{description}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>

                        </div>
                    )}

                    {/* Step 2: Customer Type */}
                    {step === 2 && (
                        <div>
                            <div className="flex items-center">
                                <button onClick={handleBack} className="mr-3">
                                    <img src="previous-page.png" alt="Back" className="w-7 h-6 mr-3" />
                                </button>
                                <h5 className="text-lg font-semibold mb-2 ">Please enter the customer details</h5>
                            </div>
                            <div className="space-y-3">
                                {[
                                    {
                                        type: 'Individual',
                                        description:
                                            'An Individual loan is tailored for personal financial needs. It is ideal for expenses like education, medical emergencies, home renovations, or personal ventures.',
                                    },
                                    {
                                        type: 'Business',
                                        description:
                                            'A Business loan is designed to support companies and entrepreneurs with capital for expansion, equipment purchases, working capital, or other business-related expenses.',
                                    },
                                ].map(({ type, description }) => (
                                    <label key={type} className="block cursor-pointer">
                                        <input
                                            type="radio"
                                            name="customerType"
                                            value={type}
                                            checked={customerType === type}
                                            onChange={(e) => setcustomerType(e.target.value)}
                                            className="hidden"
                                        />
                                        <div className="flex items-center gap-3">
                                            {/* Custom Radio Button */}
                                            <div
                                                className={`w-5 h-5 border-2 rounded-full ${customerType === type ? 'border-black' : 'border-gray-400'
                                                    } flex items-center justify-center mt-3`}
                                            >
                                                {customerType === type && (
                                                    <div className="w-2.5 h-2.5 bg-black rounded-full "></div>
                                                )}
                                            </div>
                                            <span className="text-sm font-medium mt-3">{type}</span>
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <p className="text-xs text-gray-500 mt-1 px-9">{description}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>

                        </div>
                    )}

                    {/* Step 3: Loan Template */}
                    {step === 3 && (
                        <div>
                            {/* Step 1: Select Template (hidden after Custom is selected) */}
                            {!templateSelected && (
                                <>
                                    <h5 className="text-lg font-semibold mb-4">
                                        Please select the customizable loan template
                                    </h5>
                                    <div className="space-y-6">
                                        {[
                                            {
                                                template: 'Default',
                                                description:
                                                    'The Default Template provides a standardized loan structure...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                            },
                                            {
                                                template: 'Custom',
                                                description:
                                                    'TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                            },
                                        ].map(({ template, description }) => (
                                            <label key={template} className="block cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="loanTemplate"
                                                    value={template}
                                                    onChange={() => handleTemplateChange(template)}
                                                    className="hidden"
                                                />
                                                <div className="flex items-start space-x-3">
                                                    <div
                                                        className={`w-5 h-5 border-2 rounded-full ${loanTemplate === template
                                                            ? 'border-black'
                                                            : 'border-gray-400'
                                                            } flex items-center justify-center mt-2`}
                                                    >
                                                        {loanTemplate === template && (
                                                            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                                        )}
                                                    </div>
                                                    <span className="text-sm font-medium mt-2">
                                                        {template} Template
                                                    </span>
                                                    <FaInfoCircle className="inline ml-2 text-gray-400 mt-2" />
                                                </div>
                                                <p className="text-xs text-gray-500 px-8 mt-1">{description}</p>
                                            </label>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Step 2: Show Loan Stages only if Custom Template is selected */}
                            {templateSelected && (
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <button onClick={handleBack} className="mr-3">
                                            <img src="previous-page.png" alt="Back" className="w-7 h-6 mr-3" />
                                        </button>
                                        <h5 className="text-lg font-semibold mb-2 ">Please select the customizable loan template</h5>
                                    </div>
                                    {loanStages.map((stage) => (
                                        <label key={stage} className="block cursor-pointer">
                                            <input
                                                type="radio"
                                                name="loanStage"
                                                value={stage}
                                                checked={selectedStage === stage}
                                                onChange={() => setSelectedStage(stage)}
                                                className="hidden"
                                            />
                                            <div className="flex items-start space-x-3">
                                                <div
                                                    className={`w-5 h-5 border-2 rounded-full ${selectedStage === stage
                                                        ? 'border-black'
                                                        : 'border-gray-400'
                                                        } flex items-center justify-center mt-2`}
                                                >
                                                    {selectedStage === stage && (
                                                        <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                                    )}
                                                </div>
                                                <span className="text-sm font-medium mt-2">{stage}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 pl-8 mb-4">
                                                Description for {stage} stage (customize as needed)
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                    )}

                    {/* Step 4: Product Details */}
                    {step === 4 && (
                        <div>
                            <div className="flex items-center">
                                <button onClick={handleBack} className="mr-2">
                                    <img src="previous-page.png" alt="Back" className="w-7 h-6 mr-2" />
                                </button>
                                <h5 className="text-lg font-semibold mb-2">Please enter the product details</h5>
                            </div>
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="border p-3 w-full  mb-5 mt-3"
                            />
                            <textarea
                                placeholder="Product Description"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                className="border p-3 w-full  h-30"
                            />
                        </div>
                    )}

                    {/* Step Content */}
                    {/* <div className="flex items-center bg-white p-6 rounded-lg shadow-md mx-10"> */}
                    {/* Step 5: Review */}
                    {step === 5 && (
                        <div className="w-full">
                            {/* <button onClick={handleBack} className="flex items-center text-blue-500 mb-4">
                                <FaArrowLeft className="mr-2" /> Back
                            </button> */}
                            <div className="flex items-center">
                                <button onClick={handleBack} className="mr-2">
                                    <img src="previous-page.png" alt="Back" className="w-7 h-6 mr-2" />
                                </button>
                                <h5 className="text-lg font-semibold mb-7">Please review & confirm the details</h5>
                            </div>

                            {/* Product Type */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-700 font-lg ">Product Type</label>
                                    <button onClick={() => handleEdit(1)} className="flex items-center text-blue-500 ">
                                        <Pencil className="text-blue-500 w-4 h-6 mr-2" />
                                        Edit
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={productType}
                                    readOnly
                                    className="border bg-gray-100 w-full px-4 py-2 mt-2 rounded-lg"
                                />
                            </div>

                            {/* Customer Type */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-700 font-lg">Customer Type</label>
                                    <button onClick={() => handleEdit(2)} className="flex items-center text-blue-500">
                                        <Pencil className="text-blue-500 w-4 h-6 mr-2" />
                                        Edit
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={customerType}
                                    readOnly
                                    className="border bg-gray-100 w-full px-4 py-2 mt-2 rounded-lg"
                                />
                            </div>

                            {/* Loan Template */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-700 font-lg">Loan Template</label>
                                    <button onClick={() => handleEdit(3)} className="flex items-center text-blue-500">
                                        <Pencil className="text-blue-500 w-4 h-6 mr-2" />
                                        Edit
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={loanTemplate}
                                    readOnly
                                    className="border bg-gray-100 w-full px-4 py-2 mt-2 rounded-lg"
                                />
                            </div>

                            {/* Product Name */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-700 font-lg">Product Name</label>
                                    <button onClick={() => handleEdit(4)} className="flex items-center text-blue-500">
                                        <Pencil className="text-blue-500 w-4 h-6 mr-2" />
                                        Edit
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={productName}
                                    readOnly
                                    className="border bg-gray-100 w-full px-4 py-2 mt-2 rounded-lg"
                                />
                            </div>

                            {/* Product Description */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-700 font-lg">Product Description</label>
                                    <button onClick={() => handleEdit(4)} className="flex items-center text-blue-500">
                                        <Pencil className="text-blue-500 w-4 h-6 mr-2" />
                                        Edit
                                    </button>
                                </div>
                                <textarea
                                    value={productDescription}
                                    readOnly
                                    className="border bg-gray-100 w-full px-4 py-2 mt-2 rounded-lg h-24"
                                />
                            </div>
                        </div>
                    )}
                </div>
                {/* </div> */}

                {/* Navigation Buttons */}
                <div className="flex justify-between px-6 mt-6">
                    {/* {step > 1 && (
                        <button onClick={handleBack} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">Back</button>

                    )} */}
                    {step < 5 ? (
                        <button onClick={handleNext} className="bg-green-500 text-white py-2 px-4 rounded-lg">Continue →</button>
                    ) : (
                        <button className="bg-green-500 text-white py-2 px-4">Create Product</button>
                    )}
                </div>
            </div>
        </div >
    );
}
