import React from "react";

function Game() {
  return (
    <div className="flex h-200 py-15 px-5 gap-5 bg-[#020617]">
      <div className="flex-1 flex flex-col justify-center gap-8 mx-40">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere dolor ea quae, nulla adipisci hic omnis reprehenderit voluptatum amet.</p>
        </div>
        <div>
          <button
            className="relative px-5 py-2 bg-[#B4E50D] text-black font-bold text-lg
                   border-2 border-b-4 border-[#78C841] rounded-sm shadow-lg
                   hover:translate-y-0.5 active:translate-y-2 transition-all"
            style={{ fontFamily: "button_text" }}
          >
            DIVE IN
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mr-20">
        <img
          src="/image/test_image.png"
          alt=""
          className="w-[680px] h-[510px]  "
        />
      </div>
    </div>
  );
}
export default Game;
