
import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";


const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();

  return data.data;
}

export default async function Home() {

  const categories = await getCategories();
  console.log(categories.news_category, 'data from categories');

  return (
    <div>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-4 my-15">

        <div className="col-span-3">
          <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
        </div>

        <div className="text-3xl bg-purple-100 font-bold col-span-6">
          All News
        </div>

        <div className="col-span-3">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
}
