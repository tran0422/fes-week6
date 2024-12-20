import React from 'react'

const ModalPreApproval = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-6 rounded-2xl shadow-1g w-[700px] flex flex-col '>
                <p className='text-xl font-semibold mb-4 text-center text-blue-700'>Applying for pre-approval</p>
                <div>
                    <p className='m-4 text-blue-600'>Before you start shopping for a home, it's important to have the right support from lenders who are ready to back you.</p>
                    <p className='m-4 text-blue-600'>Keep in mind that applying for a loan can have a temporary impact on your credit score, especially when comparing offers from multiple lenders.</p>
                    <p className='m-4 text-blue-600'>To protect your credit, start by asking for a pre-approval or pre-qualification—just be sure to request that they do not perform a hard credit pull. This way, you can explore your options without the added worry of lowering your score.</p>
                    <p className='m-4 text-blue-600'>Things your lenders may ask of you to provide for a pre-approval:</p>
                    <ul className='m-4 list-disc pl-6'>
                        <li className='text-blue-500'>Preliminary credit score so they don't have to verify on their end.</li>
                        <li className='text-blue-500'>Two years worth of W2s.</li>
                        <li className='text-blue-500'>Two years worth of tax filings.</li>
                        <li className='text-blue-500'>Most recent two year-end paystubs.</li>
                        <li className='text-blue-500'>Long term debt such as student loan or car payment statements.</li>
                    </ul>
                </div>

                <div className='mt-8 mx-auto'>
                    <button className='border-2 rounded-lg w-[100px] text-white bg-blue-700' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalPreApproval