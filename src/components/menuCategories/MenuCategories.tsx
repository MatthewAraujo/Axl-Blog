import Link from "next/link";

export function MenuCategories() {
  return (
    <div className="mt-9 mb-14 flex flex-wrap gap-5">
      <Link href="/blog?cat=style" className="py-3 px-6 rounded-sm text-sm bg-[#7fb881]">
        Style
      </Link>
      <Link href="/blog?cat=style" className="py-3 px-6 rounded-sm text-sm bg-[#7fb881]">
        Style
      </Link>
      <Link href="/blog?cat=style" className="py-3 px-6 rounded-sm text-sm bg-[#7fb881]">
        Style
      </Link>
      <Link href="/blog?cat=style" className="py-3 px-6 rounded-sm text-sm bg-[#7fb881]">
        Style
      </Link>
      <Link href="/blog?cat=style" className="py-3 px-6 rounded-sm text-sm bg-[#7fb881]">
        Style
      </Link>
    </div>
  )
}