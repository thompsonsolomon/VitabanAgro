import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { db } from '../assets/data/firebase';

function AdminContact() {
    const [contacts, setContacts] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const q = query(collection(db, "Contact"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let StreamArrey = [];
            querySnapshot.forEach((doc) => {
                StreamArrey.push({ ...doc.data(), id: doc.id });
            });
            setContacts(StreamArrey);
            setIsLoading(false);
        });
        return () => unsub();
    }, []);


    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
            {
                isLoading && "Loading..."
            }
            <div className="space-y-4">
                {contacts.length > 0 ? (
                    contacts.map((contact, index) => (
                        <div
                            key={contact.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            {/* Header */}
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer bg-gray-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="text-lg font-medium text-gray-800">
                                    {contact.Fullname}
                                </div>
                                <div className="text-sm text-gray-600">{contact.Email}</div>
                                <span className="text-gray-500">
                                    {activeIndex === index ? '▲' : '▼'}
                                </span>
                            </div>

                            {/* Content */}
                            {activeIndex === index && (
                                <div className="p-4 text-gray-700 border-t bg-gray-50">
                                    <p>
                                        <strong>Phone:</strong> {contact.Phone}
                                    </p>
                                    <p className="Mt-2 text-gray-700 ">
                                        <strong>Message:</strong> {contact.Message}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No contacts available.</div>
                )}
            </div>
        </div>
    );
};

export default AdminContact