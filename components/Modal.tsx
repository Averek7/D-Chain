import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (order: { productName: string; quantity: string; notes: string }) => void;
}

function Modal({ isOpen, onClose, onSubmit }: ModalProps) {
    if (!isOpen) return null;

    const [inventory, setInventory] = useState({
        productName: '',
        quantity: '',
        notes: ''
    });

    const { productName, quantity, notes } = inventory;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInventory((prevInventory) => ({
            ...prevInventory,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!productName || !quantity) {
            alert('Please fill out all required fields.');
            return;
        }
        onSubmit({ productName, quantity, notes });
        onClose(); 
    };

    return (
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 space-y-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-semibold text-white">Place Order Request</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-1">Product Name</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Quantity</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter quantity"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Additional Notes</label>
                        <textarea
                            value={notes}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Optional notes"
                            rows={3}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
