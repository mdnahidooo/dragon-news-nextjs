import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="text-lg font-bold ">All Categories</h2>

            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories.news_category.map((category) =>
                        <li key={category.category_id}
                            className={`${activeId === category.category_id && "bg-[#D72050] text-white"} rounded-md font-bold text-sm text-center`}
                        >
                            <Link href={`${category.category_id}`} className='block p-2'>
                                {" "}
                                {category.category_name}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;