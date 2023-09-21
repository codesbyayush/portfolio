"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeOptions from "./ThemeOptions";

const themes = ["night", "cupcake", " "];

const Themes = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative bg-skin-main-color px-2 py-4 lg:py-0 lg:pt-4 -top-4">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex gap-1 my-auto h-full"
      >
        <Image
          src={"themes.svg"}
          height={30}
          width={30}
          alt="Themes"
          className="h-6 mix-blend-difference"
        />
        <h4 className="pt-1 hidden sm:block">Theme &#8595;</h4>
      </button>
      {open && <ThemeOptions />}
    </div>
  );
};

export default Themes;
