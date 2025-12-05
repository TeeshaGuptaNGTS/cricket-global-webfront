"use client";
import React, { useState, useEffect } from 'react'
import authInstance from '@/api/auth/auth.api';

const MembershipHistory = () => {
    const [getData, setGetData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await authInstance.getUserMembershipStatus();
                console.log("Membership data:", res);
                setGetData(res?.data || null);
            } catch (error) {
                console.error("Error fetching membership status:", error);
                setError("Failed to load membership status. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    if (loading)
        return (
            <div className="min-h-screen flex justify-center items-center text-[#001B5E]">
                Loading membership details...
            </div>
        );

    if (error)
        return (
            <div className="min-h-screen flex justify-center items-center text-red-600 font-semibold">
                {error}
            </div>
        );

    return (
        <div className="min-h-screen bg-white py-10 px-5">
            <h2 className="text-3xl font-bold text-center text-[#001B5E] mb-10">
                My Membership History
            </h2>
            {getData?.length > 0 ? (
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getData.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f4f6fa] rounded-2xl shadow-lg border border-[#cdd7f3] overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Membership Image */}
                            <div className="relative h-40 w-full overflow-hidden">
                                <img
                                    src={
                                        item?.coverImage ||
                                        "https://cdn-icons-png.flaticon.com/512/9068/9068985.png"
                                    }
                                    alt={item?.planName || "Membership Plan"}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#001B5E66] via-transparent to-transparent"></div>
                                <p className="absolute bottom-2 left-3 text-white font-semibold text-lg drop-shadow">
                                    {item?.planName || "Membership Plan"}
                                </p>
                            </div>

                            {/* Membership Details */}
                            <div className="p-5 space-y-3 text-[#001B5E]">
                                <p className="text-lg font-medium">
                                    <span className="font-semibold">Plan:</span>{" "}
                                    {item?.planName || "N/A"}
                                </p>
                                 <p className="text-lg font-medium">
                                  Plan Type:  {item?.durationUnit=="years" ?"Annually":item?.durationUnit=="lifetime"?"LifeTime" :"N/A"}
                                </p>

                                <p className="text-lg">
                                    <span className="font-semibold">Status:</span>{" "}
                                    <span
                                        className={`font-bold ${item?.status === "active"
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {item?.status || "Unknown"}
                                    </span>
                                </p>

                                <p className="text-lg">
                                    <span className="font-semibold">Purchased at:</span>{" "}
                                    {item?.startDate
                                        ? new Date(item.startDate).toLocaleDateString()
                                        : "N/A"}
                                </p>

                                <p className="text-lg">
                                    <span className="font-semibold">Expiry on:</span>{" "}
                                    {item?.endDate
                                        ? new Date(item.endDate).toLocaleDateString()
                                        : "N/A"}
                                </p>

                                <p className="text-lg">
                                    <span className="font-semibold">Plan Price:</span>{" "}
                                    € {item?.price || "0.00"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No membership history found.
                </p>
            )}

            {/* {getData ? (
                <div className="max-w-3xl mx-auto bg-[#f4f6fa] rounded-2xl shadow-lg p-6 border border-[#cdd7f3]">
                    <p className="text-lg">
                        <span className="font-semibold text-[#001B5E]">Plan:</span>
                        {getData?.planName || "N/A"}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold text-[#001B5E]">Status:</span>{" "}
                        <span
                            className={`font-bold ${getData?.status === "active" ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {getData?.status || "Unknown"}
                        </span>
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold text-[#001B5E]">Purchased at:</span>{" "}
                        {getData.startDate
                            ? new Date(getData?.startDate).toLocaleDateString()
                            : "N/A"}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold text-[#001B5E]">Expiry on:</span>{" "}
                        {getData.endDate
                            ? new Date(getData?.endDate).toLocaleDateString()
                            : "N/A"}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold text-[#001B5E]">Plan Price:</span>{" "}€ {getData?.price}
                    </p>
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No membership history found.
                </p>
            )} */}
        </div>

    )
}

export default MembershipHistory