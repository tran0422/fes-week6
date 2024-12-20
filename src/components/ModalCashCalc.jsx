import React, { useEffect, useState } from 'react'

const ModalCashCalc = (({ isOpen, onClose }) => {
    const [price, setPrice] = useState('');
    const [downpay, setDownpay] = useState('');
    const [closing, setClosing] = useState('');
    const [initialCash, setInitialCash] = useState(null);

    const handleCalculate = () => {
        const priceNum = +price;
        const downpayNum = +downpay;
        const closingNum = +closing;

        const downPaymentAmount = (downpayNum / 100) * priceNum;
        const closingCostAmount = (closingNum / 100) * priceNum;
        const totalInitialCash = downPaymentAmount + closingCostAmount;

        setInitialCash(totalInitialCash);
    };

    useEffect(() => {
        // If the modal is opened, reset state values to initial state
        if (isOpen) {
            setPrice('');
            setDownpay('');
            setClosing('');
            setInitialCash(null);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-6 rounded-2xl shadow-1g w-[700px] flex flex-col '>
                <p className='text-xl font-semibold mb-4 text-center text-blue-700'>Initial Cash Needed</p>
                <div>
                    <label className='m-4 text-blue-600'>Listed Price, $</label>
                    <input id='price' type="number" placeholder='e.g., 500000'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='w-[400px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Down Payment, %</label>
                    <input id='downpay' type="number" placeholder='Recommended to be 20% of Listed Price'
                        value={downpay}
                        onChange={(e) => setDownpay(e.target.value)}
                        className='w-[400px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Closing Cost, %</label>
                    <input id='closing' type="number" placeholder='Recommended to be 3% of Listed Price'
                        value={closing}
                        onChange={(e) => setClosing(e.target.value)}
                        className='w-[400px]' />
                </div>

                <div>
                    <span className='m-4 text-blue-600'>Initial Cash on hand: $</span>
                    {initialCash !== null && (
                        <span className='m-4'>{initialCash.toFixed(2)}</span>
                    )}
                </div>

                <div className='mt-8 mx-auto'>
                    <button className='mx-12 border-2 rounded-lg w-[100px] text-white bg-blue-700' onClick={handleCalculate}>Calculate</button>
                    <button className='border-2 rounded-lg w-[100px] text-white bg-blue-700' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
});

export default ModalCashCalc