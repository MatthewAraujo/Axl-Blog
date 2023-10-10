import { MenuCategories } from "../menuCategories/MenuCategories"
import { MenuPosts } from "../menuPosts/MenuPosts"

export const Menu = () => {
  return (
    <div className="hidden lg:block w-1/4 mt-16">
      <h2 className="text-slate-400 text-lg font-normal">{"What's hot"}</h2>
      <h1 className="text-3xl">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="title">Discover by topic</h2>
      <h1 className="title">Categories</h1>
      <MenuCategories />
      <h2 className="title">Chosen by the editor</h2>
      <h1 className="title">Editors Pick</h1>
      <MenuPosts withImage={true}/>

    </div>
  )
}