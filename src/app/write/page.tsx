"use client";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Image, ImageIcon, PlusCircle, Upload, Video } from "lucide-react";

import "react-quill/dist/quill.bubble.css";

import ReactQuill from "react-quill";
import React from "react";

function FuncionalitesButtons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="shadow-sm">
        <PlusCircle />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex">
        <DropdownMenuItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Video />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add a video</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Upload />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add a file</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ImageIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add a photo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default function WritePage() {
  const [value, setValue] = React.useState("");
  console.log(value)
  return (
    <div className="flex flex-col relative">
      <Input placeholder="Title" className="p-12 text-5xl border-none outline-none bg-transparent text-slate-500 placeholder:text-slate-300"/>
      <div>
        <FuncionalitesButtons />

        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your Story..."
          className="min-h-96 max-h-fit text-xl"
        />
      </div>
      <button disabled={value.includes("br") || value.length <=0 } className="py-2 px-5 border-none cursor-pointer text-slate-100 bg-green-800 w-fit rounded-full mt-20 disabled:cursor-not-allowed disabled:bg-green-950">Publish</button>
    </div>
  );
}
