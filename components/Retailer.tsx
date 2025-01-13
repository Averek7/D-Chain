import React from "react";

const Retailer = () => {
    return (
        <div className="w-full h-full bg-gray-900 text-white">

            {/* Main Container */}
            <div className="p-6 space-y-6">
                {/* Summary Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Total Orders</h2>
                        <p className="mt-2 text-3xl font-bold">2,450</p>
                        <p className="mt-1 text-sm text-green-400">+8% from last month</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Pending Deliveries</h2>
                        <p className="mt-2 text-3xl font-bold">42</p>
                        <p className="mt-1 text-sm text-yellow-400">Delivery scheduled</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Top-Selling Product</h2>
                        <p className="mt-2 text-3xl font-bold">Product XYZ</p>
                        <p className="mt-1 text-sm text-blue-400">500 units sold</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Inventory Stock</h2>
                        <p className="mt-2 text-3xl font-bold">12,000 units</p>
                        <p className="mt-1 text-sm text-red-400">Restock needed</p>
                    </div>
                </section>

                {/* Order Activity */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Recent Order Activity</h2>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-auto">
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="text-gray-400">
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Product</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">#45231</td>
                                    <td className="px-4 py-2">2025-01-12</td>
                                    <td className="px-4 py-2">Product A</td>
                                    <td className="px-4 py-2 text-green-400">Delivered</td>
                                </tr>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">#45230</td>
                                    <td className="px-4 py-2">2025-01-11</td>
                                    <td className="px-4 py-2">Product B</td>
                                    <td className="px-4 py-2 text-yellow-400">In Transit</td>
                                </tr>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">#45229</td>
                                    <td className="px-4 py-2">2025-01-10</td>
                                    <td className="px-4 py-2">Product C</td>
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
                            <p>Delivery delay for order #45229.</p>
                            <button className="w-44 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md">
                                View Details
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>Restock inventory for Product XYZ.</p>
                            <button className="w-44 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md">
                                Restock
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>New order placed: #45232.</p>
                            <button className="w-44 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md">
                                View Order
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="p-4 bg-teal-600 hover:bg-teal-500 text-white rounded-md shadow">
                            View All Orders
                        </button>
                        <button className="p-4 bg-green-600 hover:bg-green-500 text-white rounded-md shadow">
                            Check Inventory
                        </button>
                        <button className="p-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md shadow">
                            Track Shipments
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Retailer;
