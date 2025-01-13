import React from "react";

const Manufacturer = () => {
    return (
        <div className="w-full h-full bg-gray-900 text-white">
            {/* Main Container */}
            <div className="p-6 space-y-6">
                {/* Summary Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Total Supplies</h2>
                        <p className="mt-2 text-3xl font-bold">1,250</p>
                        <p className="mt-1 text-sm text-green-400">+5% from last month</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Pending Approvals</h2>
                        <p className="mt-2 text-3xl font-bold">34</p>
                        <p className="mt-1 text-sm text-yellow-400">Action required</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Monthly Production</h2>
                        <p className="mt-2 text-3xl font-bold">8,420 units</p>
                        <p className="mt-1 text-sm text-green-400">+12% from last month</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Shipments in Transit</h2>
                        <p className="mt-2 text-3xl font-bold">72</p>
                        <p className="mt-1 text-sm text-blue-400">Updated hourly</p>
                    </div>
                </section>

                {/* Production Activity */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Recent Production Activity</h2>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-auto">
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="text-gray-400">
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Product</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">2025-01-12</td>
                                    <td className="px-4 py-2">Widget A</td>
                                    <td className="px-4 py-2">500 units</td>
                                    <td className="px-4 py-2 text-green-400">Completed</td>
                                </tr>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">2025-01-11</td>
                                    <td className="px-4 py-2">Widget B</td>
                                    <td className="px-4 py-2">300 units</td>
                                    <td className="px-4 py-2 text-yellow-400">In Progress</td>
                                </tr>
                                <tr className="hover:bg-gray-700">
                                    <td className="px-4 py-2">2025-01-10</td>
                                    <td className="px-4 py-2">Widget C</td>
                                    <td className="px-4 py-2">800 units</td>
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
                            <p>Approval needed for supply order #34567.</p>
                            <button className="w-44 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md">
                                Approve
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>Production delay reported for Widget C.</p>
                            <button className="w-44 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md">
                                View Details
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>New shipment created for order #87214.</p>
                            <button className="w-44 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md">
                                Track Shipment
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="p-4 bg-teal-600 hover:bg-teal-500 text-white rounded-md shadow">
                            Add Production Data
                        </button>
                        <button className="p-4 bg-green-600 hover:bg-green-500 text-white rounded-md shadow">
                            Approve Supplies
                        </button>
                        <button className="p-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md shadow">
                            View Shipment Status
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Manufacturer;
