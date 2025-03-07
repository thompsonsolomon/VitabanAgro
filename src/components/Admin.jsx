import React, { useState } from "react";
import AdminHomePage from "../Hooks/AdminHome";
import AdminOrders from "../Hooks/AdminOrders";
import ManageProducts from "../Hooks/AdminAddProduct";
import AdminSetting from "../Hooks/AdminSetting";
import AdminContact from "../Hooks/AdminContact";

const Admin = () => {
    const [activePage, setActivePage] = useState("AdminHome");
    const [sidebarOpen, setSidebarOpen] = useState(false); // For toggling sidebar on mobile

    // Dynamically render content based on the active page
    const renderContent = () => {
        switch (activePage) {
            case "AdminHome":
                return  <AdminHomePage />;
            case "Orders":
                return <AdminOrders />;
            case "Products":
                return <ManageProducts />;
            case "Contact":
                return <AdminContact />;
            case "Setting":
                return <AdminSetting />;
            default:
                return  <AdminHomePage />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed z-20 h-full bg-gray-800 text-white p-5 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:static md:w-1/4 transition-transform duration-300`}
            >
                <h1 className="text-xl font-bold mb-5">Admin Panel</h1>
                <nav className="space-y-3">
                    <button
                        onClick={() => {
                            setActivePage("AdminHome");
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded ${activePage === "AdminHome" ? "bg-gray-700" : ""
                            }`}
                    >
                        Admin Home
                    </button>
                    <button
                        onClick={() => {
                            setActivePage("Orders");
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded ${activePage === "Orders" ? "bg-gray-700" : ""
                            }`}
                    >
                        Orders
                    </button>
                    <button
                        onClick={() => {
                            setActivePage("Products");
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded ${activePage === "Products" ? "bg-gray-700" : ""
                            }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => {
                            setActivePage("Contact");
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded ${activePage === "Contact" ? "bg-gray-700" : ""
                            }`}
                    >
                        Contacts
                    </button>
                    <button
                        onClick={() => {
                            setActivePage("Setting");
                            setSidebarOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded ${activePage === "Setting" ? "bg-gray-700" : ""
                            }`}
                    >
                        Settings
                    </button>
                </nav>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-10 overflow-y-auto">
                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden mb-5 p-2 bg-gray-800 text-white rounded"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? "Close Menu" : "Open Menu"}
                </button>

                {renderContent()}
            </div>
        </div>
    );
};

export default Admin;