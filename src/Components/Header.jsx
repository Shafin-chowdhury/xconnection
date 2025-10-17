import { FaMixer } from "react-icons/fa";
import { FaHome, FaVideo, FaStore, FaUserFriends } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { HiOutlineDotsGrid } from "react-icons/hi";
import { IoMdChatbubbles } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import LogOut from "./Auth/LogOut";

export default function Header() {
  return (
    <header className="bg-[#242526] text-white flex items-center justify-between px-10 py-2 shadow-md">
      {/* Left: Facebook logo + Search */}
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-full p-1">
          <FaMixer className="text-[#e60606]" size={28} />
        </div>
        <div className="flex items-center bg-[#3A3B3C] rounded-full px-3 py-1.5">
          <FiSearch size={18} className="text-gray-300" />
          <input
            type="text"
            placeholder="Search Xconnection"
            className="bg-transparent outline-none text-sm text-gray-200 ml-2 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Center: Navigation icons */}
      <div className="flex gap-8">
        <div className="flex flex-col items-center border-b-4 border-[#0866FF] pb-1">
          <FaHome className="text-[#0866FF]" size={22} />
        </div>
        <FaVideo className="text-gray-400 hover:text-white cursor-pointer" size={22} />
        <FaStore className="text-gray-400 hover:text-white cursor-pointer" size={22} />
        <FaUserFriends className="text-gray-400 hover:text-white cursor-pointer" size={22} />
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-3">
        {/* <div className="bg-[#3A3B3C] p-2 rounded-full cursor-pointer hover:bg-[#4E4F50]">
          <HiOutlineDotsGrid size={20} />
        </div> */}
        <div className="bg-[#3A3B3C] p-2 rounded-full cursor-pointer hover:bg-[#4E4F50] relative">
          <IoMdChatbubbles size={20} />
          <span className="absolute top-1 right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">1</span>
        </div>
        <div className="bg-[#3A3B3C] p-2 rounded-full cursor-pointer hover:bg-[#4E4F50]">
          <IoMdNotificationsOutline size={20} />
        </div>

        <LogOut />
        <img
          src="https://i.pravatar.cc/30"
          alt="profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
