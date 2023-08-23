import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import AboutMe from "./Pages/About";
import Navbar from "./Components/Navbar";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Redirect from "./Pages/Redirect";

const App = () => {
  const [url, setUrl] = React.useState(window.location.pathname.split("/")[1]);
  const redirecting = useRef(false);
  const ref = useRef();

  const makeNewUrl = (newUrl) => {
    let i = 0;
    let target = newUrl;
    newUrl = newUrl.replace("redirect/", "");
    const interval = setInterval(() => {
      setUrl(newUrl.slice(0, i));
      console.log(i, newUrl.length);
      if (i == newUrl.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (newUrl == "") location.href = "/";
          location.href = `/${target}`;
        }, 300);
      }
      i++;
    }, 200);
  };

  const deleteOldUrl = (newUrl) => {
    const oldUrl = url;
    let i = oldUrl.length;
    const interval = setInterval(() => {
      i--;
      setUrl(oldUrl.slice(0, i));
      if (i <= 0) {
        clearInterval(interval);
        makeNewUrl(newUrl);
      }
    }, 200);
  };

  const handleUrlChange = async (newUrl) => {
    if (newUrl == url || redirecting.current) return;
    redirecting.current = true;

    deleteOldUrl(newUrl);
  };

  useEffect(() => {
    setInterval(() => {
      ref.current.innerText = ref.current.innerText ? "" : "|";
    }, 500);

    if (url == "redirect") {
      const target = window.location.pathname.split("/")[2];
      setUrl(target);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutMe />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact redirect={handleUrlChange} />,
    },
    {
      path: "/redirect/:target",
      element: <Redirect />,
    },
  ]);

  return (
    <React.StrictMode>
      <Navbar redirect={handleUrlChange} />
      <div className="w-full p-2 flex justify-center">
        <h1 className="text-center p-2 w-fit m-3 flex no-wrap bg-clip-text text-transparent text-3xl xs:text-6xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-green-500 to-90%">
          /{url} <span ref={ref} />
        </h1>
      </div>
      <RouterProvider router={router}>
        <footer className="absolute bottom-0">
          <p className="text-center text-sm m-3 text-gray-500">
            &copy; 2023 kijmoshi.xyz | Made with ❤️ by kijmoshi
          </p>
        </footer>
      </RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
