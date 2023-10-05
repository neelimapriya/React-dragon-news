import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNAv = () => {
  return (
    <div className=" ">
      <div className="p-4 space-y-3 mb-5">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn w-full btn-outline ">
          <FcGoogle></FcGoogle> Login with Google
        </button>
        <button className="btn w-full btn-outline">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <div className="p-4 mb-5 border">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a
          href=""
          className="p-4 flex gap-3 justify-center text-lg border rounded-t-lg "
        >
          <FaFacebook className="fill-blue-700"></FaFacebook>Facebook
        </a>
        <a href="" className="p-4 flex gap-3 justify-center text-lg  border-x ">
          <FaTwitter className="fill-blue-700"></FaTwitter>Twitter
        </a>
        <a
          href=""
          className="p-4 flex gap-3 justify-center text-lg border rounded-b-lg "
        >
          <FaInstagram className="fill-violet-700"></FaInstagram>Instagram
        </a>
      </div>
      {/* q-zone */}
      <div className="p-4 space-y-3 mb-5 bg-slate-100">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNAv;
