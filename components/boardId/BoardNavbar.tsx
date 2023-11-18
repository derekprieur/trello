import { Board } from "@prisma/client";
import React from "react";

interface BoardNavbarProps {
  data: Board;
}

const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="fixed top-14 z-[40] flex h-14 w-full items-center gap-x-4 bg-black/50 px-6 text-white">
      <div className="ml-auto"></div>
    </div>
  );
};

export default BoardNavbar;
