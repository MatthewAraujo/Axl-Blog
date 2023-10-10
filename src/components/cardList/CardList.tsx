import { Pagination } from "../pagination/Pagination";
import { Card } from "../card/Card";
import { randomInt } from "crypto";

export const CardList = () => {
  return (
    <div className="w-full lg:w-3/4">
      <h1 className="my-12 mx-0">Recent Posts</h1>
      <div>
        <Card key={randomInt(10)} item={
          {
            "img": "https://images.unsplash.com/photo-1696798267892-33213da39347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            "slug": "lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-quisquam-voluptates",
            "catSlug": "style",
            "createdAt": "2021-09-09T00:00:00.000Z"
          }
        } />

        <Card key={randomInt(10)} item={
          {
            
            "img": "https://images.unsplash.com/photo-1696798267892-33213da39347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            "slug": "lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-quisquam-voluptates",
            "catSlug": "style",
            "createdAt": "2021-09-09T00:00:00.000Z"

          }
        }/>
      </div>
      <Pagination hasNext={true} hasPrev={true} page={1}  />
    </div>
  );
};
