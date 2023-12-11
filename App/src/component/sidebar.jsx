import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({name, sendDataMenu}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Dashboard",
      image1: "/sidebar_component/home.svg",
      image2: "/sidebar_component/home2.svg",
      status: "clicked",
    },
    {
      id: 2,
      name: "Artwork",
      image1: "/sidebar_component/artwork.svg",
      image2: "/sidebar_component/artwork2.svg",
      status: "unclicked",
    },
    {
      id: 3,
      name: "Submissions",
      image1: "/sidebar_component/mail.svg",
      image2: "/sidebar_component/mail2.svg",
      status: "unclicked",
    },
  ]);

  const handleSetMenu = (id) => {
    if (menu.find((items) => items.id === id)) {
      setMenu(menu.map((item) => (item.id === id ? { ...item, status: "clicked" } : { ...item, status: "unclicked" })));
    }
    sendDataMenu(menuClicked.name)
  };

  useEffect(()=>{
    sendDataMenu(menuClicked.name)
  },[menu])

  const menuClicked = menu.find(items=>{
    if (items.status === 'clicked'){
      return true;
    }
  })


  return (
    <div className="min-h-screen bg-[#EEEEEE] w-[18%] flex flex-col justify-between">
      <div>
        <img src="../public/sidebar_component/people.png" className="mx-auto mt-10 w-10 lg:w-20 transition-all transition-300" alt="" />
        <p className="font-unica  text-xs lg:text-base text-center mt-3 font-semibold">{name}</p>
        <img src="../public/sidebar_component/Senimall_logo.png" alt="" className="mx-auto mt-8 w-[50%]" />

        {/* menu */}
        <ul className="mt-10 w-11/12 float-right flex flex-col justify-between gap-8">
          {menu.map((items) => {
            if (items.status === "unclicked") {
              return (
                <li key={items.id} onClick={() => handleSetMenu(items.id)} className="flex py-3 px-5 rounded-l-xl justify-center lg:justify-start items-stretch gap-4 cursor-pointer">
                  <img src={items.image1} alt="" className="h-[20px] w-[20px]" />
                  <span className="font-unica hidden lg:block transition-all transition-300">{items.name}</span>
                </li>
              );
            } else {
              return (
                <li key={items.id} onClick={() => handleSetMenu(items.id)} className="flex justify-center lg:justify-start items-stretch gap-4 bg-[#183D3D] cursor-pointer py-3 px-5 rounded-l-xl">
                  <img src={items.image2} alt="" className="h-[20px] w-[20px]" />
                  <span className="font-unica text-white hidden lg:block transition-all transition-300">{items.name}</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <button onClick={handleLogout} className="flex py-3 px-5 rounded-l-xl justify-center gap-4 cursor-pointer items-center mu-auto">
        <img src="/sidebar_component/logout.svg" alt="" className="h-[20px] w-[20px]" />
        <span className="font-unica hidden lg:block transition-all transition-300">Logout</span>
      </button>
    </div>
  );
}
