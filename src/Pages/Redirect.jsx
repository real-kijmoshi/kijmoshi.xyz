import { Navigate, useParams } from "react-router-dom";

const redirections = {
  discord: "http://discordapp.com/users/617418260484194413",
  github: "https://github.com/real-kijmoshi",
  x: "https://twitter.com/kijmoshi_dev",
};

function Redirect() {
  const { target } = useParams();

  const url = redirections[target];
  if (!url) return <Navigate to="/" />;

  location.href = url;

  return (
    <div>
      redirecting.... if nothing happends click{" "}
      <a href={url} className="bold">
        {" "}
        -{">"} here {"<"}-{" "}
      </a>
    </div>
  );
}

export default Redirect;
