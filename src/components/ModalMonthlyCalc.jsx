import React, { useEffect, useState } from 'react'

const ModalMonthlyCalc = ({ isOpen, onClose }) => {
    const [mortgage, setMortgage] = useState('');
    const [utilities, setUtilities] = useState('');
    const [kid, setKid] = useState('');
    const [phone, setPhone] = useState('');
    const [grocery, setGrocery] = useState('');
    const [transport, setTransport] = useState('');
    const [entertain, setEntertain] = useState('');
    const [debt, setDebt] = useState('');
    const [overhead, setOverhead] = useState('');
    const [pet, setPet] = useState('');
    const [life, setLife] = useState('');
    const [monthlyCash, setMonthlyCash] = useState(null);

    const handleCalculate = () => {
        const mortNum = +mortgage;
        const utilitiesNum = +utilities;
        const kidNum = +kid;
        const phoneNum = +phone;
        const groceryNum = +grocery;
        const transportNum = +transport;
        const entertainNum = +entertain;
        const debtNum = +debt;
        const overheadNum = +overhead;
        const petNum = +pet;
        const lifeNum = +life;

        const totalMonthlyCash = mortNum + utilitiesNum + kidNum + phoneNum + groceryNum + transportNum + entertainNum 
        + debtNum + overheadNum + petNum + lifeNum;

        setMonthlyCash(totalMonthlyCash);
    };

    useEffect(() => {
        // If the modal is opened, reset state values to initial state
        if (isOpen) {
            setMortgage('');
            setUtilities('');
            setKid('');
            setPhone('');
            setGrocery('');
            setTransport('');
            setEntertain('');
            setDebt('');
            setOverhead('');
            setPet('');
            setLife('');
            setMonthlyCash(null);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-6 rounded-2xl shadow-1g w-[800px] flex flex-col '>
                <p className='text-xl font-semibold mb-4 text-center text-blue-600'>Monthly Payment</p>
                <div>
                    <label className='m-4 text-blue-600'>Mortgage, $</label>
                    <input id='mortgage' type="number" placeholder='Use mortgage calculator found in homes.com or similar.'
                        value={mortgage}
                        onChange={(e) => setMortgage(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Utilities Cost, $</label>
                    <input id='utilities' type="number" placeholder='Ignore if utlities are already part of the mortgage estimate.'
                        value={utilities}
                        onChange={(e) => setUtilities(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Child Care Cost, $</label>
                    <input id='kid' type="number" placeholder='e.g., babysitter, diapers, clothings, toys etc.'
                        value={kid}
                        onChange={(e) => setKid(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Phone + Internet Cost, $</label>
                    <input id='phone' type="number" placeholder='Combined the monthly total of phone and internet.'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Groceries Cost, $</label>
                    <input id='grocery' type="number" placeholder='Monthly groceries estimate.'
                        value={grocery}
                        onChange={(e) => setGrocery(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Transportation Cost, $</label>
                    <input id='transport' type="number" placeholder='e.g., gasoline, bus fare, car payment, vehicle registration etc.'
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Entertainment Cost, $</label>
                    <input id='entertain' type="number" placeholder='e.g., streaming services, cable TV, D&D etc.'
                        value={entertain}
                        onChange={(e) => setEntertain(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Other Debts, $</label>
                    <input id='debt' type="number" placeholder='e.g., student loan, credit card, uncle Joe etc.'
                        value={debt}
                        onChange={(e) => setDebt(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Overhead Upkeep Cost, $</label>
                    <input id='overhead' type="number" placeholder='e.g., house cleaning, grooming, gym membership etc.'
                        value={overhead}
                        onChange={(e) => setOverhead(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Pet Cost, $</label>
                    <input id='pet' type="number" placeholder='e.g., pet food, toys, insurance, upkeeps, grooming etc.'
                        value={pet}
                        onChange={(e) => setPet(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <label className='m-4 text-blue-600'>Living La Vida Loca, $</label>
                    <input id='life' type="number" placeholder='e.g., date night, movie night, expensive vacation etc.'
                        value={life}
                        onChange={(e) => setLife(e.target.value)}
                        className='w-[500px]' />
                </div>

                <div>
                    <span className='m-4 text-blue-600'>Total Monthly estimate: $</span>
                    {monthlyCash !== null && (
                        <span className='m-4'>{monthlyCash.toFixed(2)}</span>
                    )}
                </div>

                <div className='mt-8 mx-auto'>
                    <button className='mx-12 border-2 rounded-lg w-[100px] bg-blue-700 text-white' onClick={handleCalculate}>Calculate</button>
                    <button className='border-2 rounded-lg w-[100px] bg-blue-700 text-white' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ModalMonthlyCalc