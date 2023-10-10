import { CardList } from "@/components/cardList/CardList";
import { Categories } from "@/components/categories/Catogories";
import { Featured } from "@/components/featured/Featured";
import { Menu } from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
      <Featured />
      <Categories />
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </>
  );
}
