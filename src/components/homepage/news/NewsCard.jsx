import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">

                {/* Author info */}
                <div className="flex justify-between items-center bg-slate-200 p-4 rounded-md">

                    <div className="flex gap-2 items-center">
                        <Image
                            src={news?.author?.img || "/fallback-user.png"}
                            alt={news?.author?.name || "Author"}
                            height={40}
                            width={40}
                            className="rounded-full"
                        />

                        <div>
                            <h2 className="font-semibold text-sm">
                                {news?.author?.name || "Unknown Author"}
                            </h2>
                            <p className="text-xs text-gray-500">
                                {news?.author?.published_date || "No date"}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center text-xl text-gray-600">
                        <CiShare2 className="cursor-pointer hover:text-[#D72050]" />
                        <CiBookmark className="cursor-pointer hover:text-[#D72050]" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="card-title text-[#D72050]">
                    {news?.title}
                </h2>

                {/* Image */}
                <figure className="mt-2">
                    <Image
                        src={news?.image_url || "/placeholder.png"}
                        alt={news?.title || "News image"}
                        width={600}
                        height={300}
                        className="w-full rounded-md"
                    />
                </figure>

                {/* Details */}
                <p className="line-clamp-3 text-gray-600">
                    {news?.details?.slice(0, 200)}...
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center gap-4 text-sm text-gray-700">
                        <h2 className="flex items-center gap-1">
                            <IoIosStar className="text-yellow-500 text-lg" />
                            {news?.rating?.number || 0}
                        </h2>

                        <h2 className="flex items-center gap-1">
                            <FaEye className="text-lg" />
                            {news?.total_view || 0}
                        </h2>
                    </div>

                    <Link href={`/news/${news?._id}`}>
                        <button className="btn bg-[#D72050] text-white hover:bg-[#b91c44] border-none">
                            See details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;