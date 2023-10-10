import { Comments } from "@/components/comments/Comments";
import { Menu } from "@/components/menu/Menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function SinglePage() {
  return (
    <div className="m-w-screen bg-gray-100">
      <div className="flex items-center gap-y-12 ">
        <div className="flex-1">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-12">Desvendando misterios Desvendando misterios da sociedade brasileira de educaçao</h1>
          <div className="flex items-center gap-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1 text-slate-600">
              <span className="text-lg font-medium">John Doe</span>
              <span className="text-slate-700">10.03.2023</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative hidden sm:block">
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full lg:flex gap-12 mt-12">
        <div className="w-full lg:w-3/4">
          <div className="">
            <p className=" text-sm sm:text-lg font-light mb-5 text-justify">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              omnis accusamus facilis atque sed eaque quibusdam totam, natus
              mollitia rerum. Possimus ducimus minus alias perspiciatis
              accusantium ut hic earum exercitationem! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quam omnis accusamus facilis
              atque sed eaque quibusdam totam, natus mollitia rerum. Possimus
              ducimus minus alias perspiciatis accusantium ut hic earum
              exercitationem! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quam omnis accusamus facilis atque sed eaque
              quibusdam totam, natus mollitia rerum. Possimus ducimus minus
              alias perspiciatis accusantium ut hic earum exercitationem! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam omnis
              accusamus facilis atque sed eaque quibusdam totam, natus mollitia
              rerum. Possimus ducimus minus alias perspiciatis accusantium ut
              hic earum exercitationem! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quam omnis accusamus facilis atque sed eaque
              quibusdam totam, natus mollitia rerum. Possimus ducimus minus
              alias perspiciatis accusantium ut hic earum exercitationem! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam omnis
              accusamus facilis atque sed eaque quibusdam totam, natus mollitia
              rerum. Possimus ducimus minus alias perspiciatis accusantium ut
              hic earum exercitationem! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quam omnis accusamus facilis atque sed eaque
              quibusdam totam, natus mollitia rerum. Possimus ducimus minus
              alias perspiciatis accusantium ut hic earum exercitationem! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam omnis
              accusamus facilis atque sed eaque quibusdam totam, natus mollitia
              rerum. Possimus ducimus minus alias perspiciatis accusantium ut
              hic earum exercitationem! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quam omnis accusamus facilis atque sed eaque
              quibusdam totam, natus mollitia rerum. Possimus ducimus minus
              alias perspiciatis accusantium ut hic earum exercitationem! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam omnis
              accusamus facilis atque sed eaque quibusdam totam, natus mollitia
              rerum. Possimus ducimus minus alias perspiciatis accusantium ut
              hic earum exercitationem! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quam omnis accusamus facilis atque sed eaque
              quibusdam totam, natus mollitia rerum. Possimus ducimus minus
              alias perspiciatis accusantium ut hic earum exercitationem! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam omnis
              accusamus facilis atque sed eaque quibusdam totam, natus mollitia
              rerum. Possimus ducimus minus alias perspiciatis accusantium ut
              hic earum exercitationem!
            </p>
          </div>
          <div className="">
          <Comments />

          </div>
        </div>
        <Menu  />
      </div>
    </div>
  );
}
