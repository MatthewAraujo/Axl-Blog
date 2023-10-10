import { CardList } from "@/components/cardList/CardList";
import { Menu } from "@/components/menu/Menu";

export default function BlogPage(){
  return (
    <div className="m-w-screen bg-gray-100">
      <h1 className="bg-orange-800 text-white py-1 px-2 text-center capitalize">Style Blog</h1>
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  )
}