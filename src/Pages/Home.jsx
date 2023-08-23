import { useEffect, useState } from "react";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  });
  return (
    <div className="w-screen h-screen">
      <h1 className="text-center">Welcome to my website!</h1>

      <div className="flex flex-col w-full items-center items-center space-y-2 w-screen">
        idk what to put here so here's a rickroll (copilot made me do it)
        {loaded && (
          <iframe
            className="w-auto h-auto md:w-1/2 md:h-1/2"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}
      </div>

      <div className="absolute w-40 h-40 top-0 left-0 m-[-16] z-[-1] bg-blue-400 rounded-full" />
      <div className="absolute w-40 h-40 top-0 right-0 m-10 mt-40 md:m-24 z-[-1] bg-green-400 rounded-full" />
      <div className="absolute w-40 h-40 bottom-0 left-0 m-24 z-[-1] bg-yellow-400 rounded-full" />
    </div>
  );
}

export default Home;
