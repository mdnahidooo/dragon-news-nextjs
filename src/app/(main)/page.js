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
          <h2 className="text-lg font-bold ">All Categories</h2>
          
          <ul className="flex flex-col gap-3 mt-6">
            {
              categories.news_category.map((category) => <li key={category.category_id} className="bg-slate-100 p-2 rounded-md font-bold text-md text-center">{category.category_name}</li>)
            }
          </ul>
        </div>
        <div className="text-3xl bg-purple-100 font-bold col-span-6">
          All News
        </div>
        <div className="text-3xl bg-yellow-100 font-bold col-span-3">
          Social Icons
        </div>
      </div>
    </div>
  );
}
