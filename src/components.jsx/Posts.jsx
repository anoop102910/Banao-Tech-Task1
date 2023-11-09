import React from "react";
import {
  AiOutlineEye,
  AiOutlineShareAlt,
  AiFillEdit,
  AiOutlineEnvironment,
  AiOutlineInfoCircle,
  AiTwotoneLike,
} from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
let list = [
  {
    emoji: "&#9995;",
    type: "article",
    img: "/post1.png",
    profile: "/profile1.png",
    title: "What if famous brands had regular fonts Meet RegulaBrands",
    content:
      "someting never gonan changes in thisuniverse and this entire universe will e b ended by me using teh power of teh deaht titan",
    createdBy: "Sarthak Kamra",
  },
  {
    emoji: "&#9995",
    type: "article",
    img: "/post2.png",
    profile: "/profile2.png",
    title: "What if famous brands had regular fonts Meet RegulaBrands",
    content:
      "someting never gonan changes in thisuniverse and this entire universe will e b ended by me using teh power of teh deaht titan",
    createdBy: "Sarthak Kamra",
  },
  {
    emoji: "&#9995",
    type: "article",
    img: "/post3.png",
    profile: "/profile3.png",
    title: "What if famous brands had regular fonts Meet RegulaBrands",
    content:
      "someting never gonan changes in thisuniverse and this entire universe will e b ended by me using teh power of teh deaht titan",
    createdBy: "Sarthak Kamra",
  },
  {
    emoji: "&#9995",
    type: "article",
    img: "/post4.png",
    profile: "/profile3.png",
    title: "What if famous brands had regular fonts Meet RegulaBrands",
    content:
      "someting never gonan changes in thisuniverse and this entire universe will e b ended by me using teh power of teh deaht titan",
    createdBy: "Sarthak Kamra",
  },
];
function Posts() {
  return (
    <>
      <div className="md:hidden flex justify-between items-center px-2  mt-2">
        <span className="font-bold">Posts(368)</span>
        <button className="flex  items-center justify-between w-28 text-sm bg-gray-400/25 py-2 px-2.5 rounded sm:hidden">
          Filter: All
          <BsChevronDown />
        </button>
      </div>
      <div className=" md:max-w-[1020px] max-w-[900px] md:px-4 mx-auto min-h-screen md:mt-5  md:flex md:justify-between md:gap-x-4">
        <div id="post-wrapper">
          {list.map(listItem => (
            <Card key={listItem.title} card={listItem} />
          ))}
        </div>
        <Location />
      </div>
    </>
  );
}

function Location() {
  const users = ["Anoop Singh", "Arjun Porwal", "Rohan Gupta"];
  return (
    <div className="w-80 hidden lg:block mt-8">
      <div>
        <div className="flex items-center ">
          <AiOutlineEnvironment className="text-2xl mr-2" />
          <input
            type="text"
            placeholder="Type location..."
            className=" border-none outline-none bg-transparent placeholder:text-slate-900"
          />
          <MdModeEditOutline className="text-2xl ml-2" />
        </div>
        <hr />
      </div>
      <div className="flex items-start gap-4 mt-6">
        <AiOutlineInfoCircle size={30} />
        <p className="text-xs text-slate-600">
          Your location will help us serve better and extend a personalised experience
        </p>
      </div>
      <div className="mt-10">
        <div className="flex items-center">
          <AiTwotoneLike className="mr-4 text-gray-600 " size={25} />
          <h2 className="uppercase text-base font-bold tracking-widest mt-1.5">
            Recommended groups
          </h2>
        </div>
        <div className="mt-4 ">
          {users.map(user => (
            <div key={user.createdBy} className="flex justify-between items-center mb-4 text-[0.9rem]">
              <div className="flex items-center gap-4">
                <img
                  className="w-8 aspect-square object-cover object-center rounded-full"
                  src="/computer.png"
                  alt=""
                />
                <span>{user}</span>
              </div>
              <button className="text-[0.75rem] px-3 font-semibold py-1 bg-gray-400/50 rounded-2xl">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="mt-4  shadow-md max-w-[600px] bg-white md:ring-1 ring-slate-400 md:rounded-md overflow-hidden">
      <img className="w-full h-40 object-cover object-center" src={card.img} alt="Card Image" />
      <div className="p-3 md:p-4">
        <div className="flex items-center  gap-x-4  ">
          <div className="text-xl ">&#9995;</div>
          <h5 className="text-sm font-bold">{card.type}</h5>
        </div>

        <h2 className="text-base md:text-xl md:font-bold mt-3">{card.title}</h2>
        <p className="text-gray-600 text-sm truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div id="createdBy" className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-4">
            <img
              className="w-8 aspect-square object-cover object-center rounded-full"
              src={card.profile}
              alt=""
            />
            <span className="text-sm font-bold text-slate-900">{card.createdBy}</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <AiOutlineEye size={25} />
              <span className="text-xs"> 1.5k views</span>
            </div>
            <div className="md:bg-gray-300 p-1">
              <AiOutlineShareAlt size={23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
