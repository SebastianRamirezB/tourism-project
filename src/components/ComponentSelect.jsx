'use client'
import { useState } from 'react';

export const ComponentSelect = () => {
    const [selectedFruit, setSelectedFruit] = useState('orange');

    return (
        <label>
            <h2 className="text-2xl font-medium mb-4">Filter by type of place</h2>
            <div className="flex items-center justify-between border w-full  h-[78px]  px-11 border-disabled mt-1 rounded-[80px]" htmlFor="">
                <select
                    className="h-full w-full text-2xl outline-none"
                    value={selectedFruit}
                    onChange={e => setSelectedFruit(e.target.value)}
                >
                    <option value="apple">Manzana</option>
                    <option value="banana">Plátano</option>
                    <option value="orange">Naranja</option>
                </select>

            </div>

        </label>
    );
}
