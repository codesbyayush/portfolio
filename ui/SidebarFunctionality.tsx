"use client";

import { useState, useRef } from "react";
import { useClickAway } from "../app/hooks/useClickAway";
import Image from "next/image";
import Sidebar from "./Sidebar";

export default function SidebarFunctionality() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const handleClickAway = () => {
    setOpen(false);
    disable();
  };
  const openclick = () => {
    enable();
    setOpen(true);
    // //removing this consolelog breaks the modal close functionality
    // console.log("enable");
  };
  const { disable, enable } = useClickAway(modalRef, handleClickAway);

  return (
    <>
      <div className="lg:hidden" ref={modalRef}>
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="absolute z-50 top-3"
          >
            <Image
              src="./cross.svg"
              alt="close-menu"
              height={30}
              width={30}
              className="h-8 w-auto mix-blend-difference"
            />
          </button>
        )}
        <button onClick={openclick}>
          <Image
            src="./icon-menu.svg"
            alt="menu"
            height={30}
            width={30}
            className="h-6 mt-0.5 mix-blend-difference"
          />
        </button>
        {open && (
          <div className="h-screen absolute -left-0.5 -top-0.5">
            <Sidebar />
          </div>
        )}
      </div>
    </>
  );
}
