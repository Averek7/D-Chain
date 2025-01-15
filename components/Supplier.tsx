import React, { useState } from "react";
import Modal from "./Modal";

const Supplier = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    const handleOrder = () => {
        console.log('Order Submitted:', );
    }

    return (
        <div className="w-full h-full bg-gray-900 text-white">

            {/* Main Container */}
            <div className="p-6 space-y-6">
                {/* Summary Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Total Deliveries</h2>
                        <p className="mt-2 text-3xl font-bold">2,150</p>
                        <p className="mt-1 text-sm text-green-400">+10% from last month</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Pending Orders</h2>
                        <p className="mt-2 text-3xl font-bold">45</p>
                        <p className="mt-1 text-sm text-yellow-400">Action required</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Monthly Revenue</h2>
                        <p className="mt-2 text-3xl font-bold">$120,000</p>
                        <p className="mt-1 text-sm text-green-400">+15% from last month</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Active Contracts</h2>
                        <p className="mt-2 text-3xl font-bold">12</p>
                        <p className="mt-1 text-sm text-blue-400">Updated weekly</p>
                    </div>
                </section>

                {/* Recent Orders */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-auto">
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="text-gray-400">
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">2025-01-12</td>
                                    <td className="px-4 py-2">#12345</td>
                                    <td className="px-4 py-2">300 units</td>
                                    <td className="px-4 py-2 text-green-400">Delivered</td>
                                </tr>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">2025-01-11</td>
                                    <td className="px-4 py-2">#12346</td>
                                    <td className="px-4 py-2">150 units</td>
                                    <td className="px-4 py-2 text-yellow-400">In Progress</td>
                                </tr>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">2025-01-10</td>
                                    <td className="px-4 py-2">#12347</td>
                                    <td className="px-4 py-2">500 units</td>
                                    <td className="px-4 py-2 text-red-400">Delayed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Notifications and Alerts */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md space-y-4">
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>Order #12345 has been delivered successfully.</p>
                            <button className="w-44 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md">
                                View Details
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>New order #12348 has been placed.</p>
                            <button className="w-44 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md">
                                Review Order
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>Order #12346 requires immediate attention.</p>
                            <button className="w-44 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md">
                                Take Action
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow" onClick={openModal}>
                            Add New Order
                        </button>
                        <button className="p-4 bg-green-600 hover:bg-green-500 text-white rounded-md shadow">
                            Update Inventory
                        </button>
                        <button className="p-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md shadow">
                            Resolve Issues
                        </button>
                    </div>
                </section>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleOrder}/>
        </div>
    );
};

export default Supplier;
