import React, { useCallback, useState } from "react";
import SearchComponents from "../components/SearchComponents";
import SortRepose from "../components/SortRepose";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const [userProfile, setuserProfile] = useState(null);
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortTypes] = useState("forks");
  const {name}=useAuthContext()
  const getUserProfileAndRepose = useCallback(
    async (username = "Sukrajchaudhary") => {
      setLoading(true);
      try {
        const userRes = await fetch(`http://localhost:8080/api/user/profile/${username}`);
        if (userRes.ok) {
         
          const { userProfile, repos } = await userRes.json();
          setuserProfile(userProfile);
          setRepo(repos);
        } else {
          toast.error("Repos URL not found in user profile");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepose();
  }, [getUserProfileAndRepose]);
  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepo([]);
    setuserProfile(null);
    const { userProfile, repos } = await getUserProfileAndRepose(username);
    setuserProfile(userProfile);
    setRepo(repos);
    setLoading(false);
  };
  const onSort = (sortType) => {
    const sortedRepo = [...repo];

    switch (sortType) {
      case "stars":
        sortedRepo.sort((a, b) => b.stargazers_count - a.stargazers_count);
        break;
      case "recent":
        sortedRepo.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        break;
      case "forks":
        sortedRepo.sort((a, b) => b.forks_count - a.forks_count);
        break;
      default:
        break;
    }
    setSortTypes(sortType);
    setRepo(sortedRepo);
  };
  return (
    <div className="m-4">
      <div className="m-4">
        <SearchComponents onSearch={onSearch} />
        <SortRepose onSort={onSort} sortType={sortType} />
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
          {repo.length > 0 && !loading && <Repos repo={repo} />}
          {loading && <Spinner></Spinner>}
        </div>
      </div>
    </div>
  );
};

export default Home;
