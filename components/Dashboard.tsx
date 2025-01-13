import React from "react";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <header className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
                <h1 className="text-2xl font-bold">Common Dashboard</h1>
            </header>

            {/* Main Container */}
            <div className="p-6 space-y-6">
                {/* Introduction Section */}
                <section className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Welcome to the Dashboard</h2>
                    <p className="text-gray-400">
                        Please select your role to get started. You can manage different tasks and operations here.
                    </p>
                </section>

                {/* Role Selection */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Select Your Role</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <button className="p-6 bg-teal-600 hover:bg-teal-500 text-white rounded-md shadow-md transition duration-200 ease-in-out">
                            Manufacturer Dashboard
                        </button>
                        <button className="p-6 bg-blue-600 hover:bg-blue-500 text-white rounded-md shadow-md transition duration-200 ease-in-out">
                            Supplier Dashboard
                        </button>
                        <button className="p-6 bg-green-600 hover:bg-green-500 text-white rounded-md shadow-md transition duration-200 ease-in-out">
                            Logistics Dashboard
                        </button>
                    </div>
                </section>

                {/* Key Metrics Overview */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Total Users</h3>
                            <p className="mt-2 text-3xl font-bold">1,500</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Total Orders</h3>
                            <p className="mt-2 text-3xl font-bold">3,820</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Pending Approvals</h3>
                            <p className="mt-2 text-3xl font-bold">72</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Recent Shipments</h3>
                            <p className="mt-2 text-3xl font-bold">42</p>
                        </div>
                    </div>
                </section>

                {/* Recent Activities */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md space-y-4">
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>User #1042 has registered.</p>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md">
                                View User
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>Order #8751 is ready for shipment.</p>
                            <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md">
                                Ship Now
                            </button>
                        </div>
                        <div className="p-3 bg-gray-700 rounded-md flex items-center justify-between">
                            <p>New supplier registration request.</p>
                            <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md">
                                Approve Supplier
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <button className="p-4 bg-teal-600 hover:bg-teal-500 text-white rounded-md shadow-md">
                            Add New Order
                        </button>
                        <button className="p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md shadow-md">
                            Register New User
                        </button>
                        <button className="p-4 bg-green-600 hover:bg-green-500 text-white rounded-md shadow-md">
                            Manage Inventory
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
