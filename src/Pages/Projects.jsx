import Project from "../Components/Project";

const projects = [
  {
    name: "Portfolio",
    description: "This website",
    link: "https://kijmoshi.xyz",
    tech: ["react", "tailwindcss", "vite"],
  },
  {
    name: "firebase-chat",
    description: "A chat app made with firebase and react",
    github: "https://github.com/real-kijmoshi/Firebase-chat",
    link: "https://chat.kijmoshi.xyz",
    screenshot:
      "https://raw.githubusercontent.com/real-kijmoshi/Firebase-chat/0707b9c6c661220a3403eddfa7ff337a7e29bca8/screenshots/screen.png?raw=true",
    img_width: "full",
    img_height: "auto",
    tech: ["firebase", "react", "tailwindcss", "vite"],
  },
  {
    name: "calculator (rn)",
    description:
      "A calculator app made with react native (definitely not a copy of the ios calculator)",
    github: "https://github.com/real-kijmoshi/calculator",
    screenshot:
      "https://github.com/real-kijmoshi/calculator/blob/849ca9cf9ee0c65843ba1289bea5a4087fd49ba8/screenshots/image.png?raw=true",
    img_width: 40,
    img_height: "auto",
    tech: ["react-native", "expo"],
  },
  {
    name: "nextify",
    description: "Simple shop concept made with next.js",
    github: "https://github.vom/real-kijmoshi/shop",
    link: "https://shop-omega-rouge.vercel.app/",
    screenshot: "/projects/shop.png",
    img_width: "full",
    img_height: "auto",
    tech: ["next.js", "bootstrap"],
  },
  {
    name: "weather app (rn)",
    description: "A weather app made with react native",
    github: "https://github.com/real-kijmoshi/wather-app",
    screenshot:
      "https://github.com/real-kijmoshi/wather-app/blob/d736771b9454f4a589dc67d1911b7e67896f3446/preview.png?raw=true",
    img_width: 40,
    img_height: "auto",
    tech: ["react-native", "expo", "api"],
  },
  {
    name: "fast.db",
    description:
      "Simple database for nodejs made with better-sqlite3 for people who don't know sql",
    github: "https://github.com/real-kijmoshi/fast.db",
    link: "https://npmjs.com/package/@kijmoshi/fast.db",
    tech: ["nodejs", "sqlite"],
  },
];

function Projects() {
  return (
    <div>
      <div className="flex felx-col justify-center h-screen w-screen flex-wrap">
        {projects.map((p, i) => (
          <Project project={p} index={i} />
        ))}

        <div
          key={"info"}
          className="text-center w-2/3 m-10 pb-10 text-gray-300"
        >
          <h1 className="text-center text-2xl">More projects coming soon!</h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
