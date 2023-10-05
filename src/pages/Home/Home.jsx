import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNAv from "../Shared/RightSideNAv";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news =useLoaderData()
  console.log(news)
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container */}
        <div className="md:col-span-2">
          {
            news.map(aNews=> <NewsCard key={aNews._id} news={aNews}></NewsCard>)
          }
        </div>
        <div>
          <RightSideNAv></RightSideNAv>
        </div>
      </div>
    </div>
  );
};

export default Home;
