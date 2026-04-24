import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            
            <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
                <div className="card bg-base-100 shadow-xl p-10 text-center max-w-xl">

                    {/* Big 404 Text */}
                    <h1 className="text-7xl font-extrabold text-[#D72050] leading-none">
                        404
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-2xl font-semibold text-[#D72050] mt-2 mb-4">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-[#706F6F] mb-8">
                        The page you’re looking for doesn’t exist or has been moved.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="btn border-none bg-[#D72050] text-white hover:bg-[#b91c44]"
                        >
                            Go Home
                        </Link>

                        <Link
                            href="/contact"
                            className="btn border border-[#D72050] text-[#D72050] bg-transparent hover:bg-[#D72050] hover:text-white"
                        >
                            Contact Support
                        </Link>
                    </div>

                    {/* Footer */}
                    <div className="mt-10 text-xs text-[#706F6F]/60">
                        Error code: 404_NOT_FOUND
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NotFoundPage;