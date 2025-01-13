import React from 'react';

interface RoleSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRoleSelect: (role: string) => void;
}

const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({ isOpen, onClose, onRoleSelect }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">Select Your Role</h2>
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={() => onRoleSelect('Supplier')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Supplier
                    </button>
                    <button
                        onClick={() => onRoleSelect('Manufacturer')}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Manufacturer
                    </button>
                    <button
                        onClick={() => onRoleSelect('Retailer')}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                    >
                        Retailer
                    </button>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default RoleSelectionModal;
