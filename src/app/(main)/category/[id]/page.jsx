
import React from 'react';
import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";
import { getCategories, getNewsCategoryId } from '@/lib/DataFetching';




const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "Id data from category");

    const categories = await getCategories();
    // console.log(categories.news_category, 'data from categories');

    const news = await getNewsCategoryId(id);
    // console.log(news, 'data from news');

    return (
        <div>
            <div>
                <div className="w-11/12 mx-auto grid grid-cols-12 gap-4 my-15">

                    <div className="col-span-3">
                        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
                    </div>

                    <div className=" col-span-6">
                        <h2 className="font-bold text-lg">News by category</h2>
                        <div className="space-y-4 mt-6">
                            {news.length > 0 ? (
                                news.map((n) => {
                                    return <div key={n._id}>{n.title}</div>
                                })
                            ) : (
                                <h2 className="font-bold text-4xl text-center my-7">
                                    NO news found!
                                </h2>
                            )}
                        </div>
                    </div>

                    <div className="col-span-3">
                        <RightSideBar></RightSideBar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCategoryPage;