'use client';

import Image from "next/image";
import React from "react";

export default function PopcatPage() {
  const [isPopcatOpen, setIsPopcatOpen] = React.useState(false);
  function setPopcatOpen() {
    setIsPopcatOpen(true);
    const audio = new Audio('/pop-u_8e8ungop1x.mp3');
    audio.play();
  }
  function setPopcatClosed() {
    setIsPopcatOpen(false);
  }
  return (
    <main
      className="h-screen flex justify-center items-center bg-gray-900"
      onMouseDown={setPopcatOpen}
      onMouseUp={setPopcatClosed}
      onTouchStart={setPopcatOpen}
      onTouchEnd={setPopcatClosed}
    >
      <Image
        src={isPopcatOpen ? "/popcat-open.jpg" : "/popcat-closed.jpg"}
        alt={isPopcatOpen ? "Popcat Open" : "Popcat Closed"}
        width={400}
        height={400}
        draggable={false}
        style={{ userSelect: "none" }}
        className="rounded-lg"
      />
    </main>
  );
}
