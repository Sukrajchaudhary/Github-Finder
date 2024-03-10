import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";
const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const handleExplore = async (language) => {
    setLoading(true);
    setRepo([]);
    try {
      const res = await fetch(`http://localhost:8080/api/explore/${language}`);
      const data = await res.json();
      setRepo(data);
      setSelectedLanguage(language);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <i
            class="devicon-cplusplus-plain"
            onClick={() => handleExplore("c++")}
          ></i>

          <i
            class="devicon-typescript-plain"
            onClick={() => handleExplore("typescript")}
          ></i>

          <i
            class="devicon-carbon-original"
            onClick={() => handleExplore("c")}
          ></i>

          <i
            class="devicon-python-plain colored"
            onClick={() => handleExplore("python")}
          ></i>

          <i
            class="devicon-java-plain colored"
            onClick={() => handleExplore("java")}
          ></i>
        </div>
        <h2 className="text-lg font-semibold text-center my-4">
          {" "}
          <span className="bg-blue-100 text-blue-800 font-medium p-x-2.5 py-2.5 me-2 rounded-full">
            {selectedLanguage} {"  "}
          </span>
          Repositories
        </h2>
        {!loading && <Repos repo={repo} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default ExplorePage;
