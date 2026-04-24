import React from 'react';

const LocalLoadingPage = () => {
    return (
        <div>
            {/* Main Content */}
            <div className="col-span-6 space-y-6">

                {/* Title */}
                <div className="h-7 bg-[#D72050]/20 rounded w-1/2"></div>

                {/* News Cards Skeleton */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="card bg-base-100 shadow-sm p-4 space-y-4">

                        {/* Author */}
                        <div className="flex justify-between items-center bg-gray-200 p-3 rounded">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="h-5 bg-gray-300 rounded w-3/4"></div>

                        {/* Image */}
                        <div className="w-full h-40 bg-gray-300 rounded"></div>

                        {/* Text */}
                        <div className="space-y-2">
                            <div className="h-3 bg-gray-300 rounded"></div>
                            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center">
                            <div className="h-4 bg-gray-300 rounded w-20"></div>
                            <div className="h-8 bg-gray-300 rounded w-24"></div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default LocalLoadingPage;