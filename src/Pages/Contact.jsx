import React from "react";

function Contact({ redirect }) {
  return (
    <div className="w-full">
      <div className="flex flex-col mt-5 items-center space-y-8 mx-10">
        <button
          className="w-full flex justify-bettwen h-14 w-60 p-3 rounded items-center bg-[#5865F2]"
          onClick={() => redirect("redirect/discord")}
        >
          <img src="/discord.svg" alt="discord" className="h-8" />
          <p className="text-white ml-2 text-xl">@kijmoshi</p>
        </button>

        <button
          className="flex justify-bettwen h-14 w-60 p-3 py-6 rounded items-center bg-[#24292E]"
          onClick={() => redirect("redirect/github")}
        >
          <img src="/github.svg" alt="github" className="h-10" />
          <p className="text-white ml-2 text-xl">@real-kijmoshi</p>
        </button>

        <button
          className="flex justify-bettwen h-14 w-60 p-3 py-6 rounded items-center bg-white"
          onClick={() => redirect("redirect/x")}
        >
          <img src="/x.png" alt="x" className="h-8" />
          <p className="text-black ml-2 text-xl">@kijmoshi_dev</p>
        </button>
      </div>
    </div>
  );
}

export default Contact;
