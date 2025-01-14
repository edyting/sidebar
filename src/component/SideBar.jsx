import { createContext, useContext, useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { IoMdMore } from "react-icons/io";


export const SidebarContext = createContext();


const SideBar = ({ children }) => {
    const [expanded,setExpanded] = useState(true)
  return (
    <div>
      <aside className="h-screen">
        <nav className="h-full border-r bg-white shadow-md flex items-center flex-col">
          {/* logo */}
          <div className="p-4 pb-2 w-full pl-20 flex justify-between items-center">
            <img
              src="/logoipsum-327.svg"
              className={`overflow-hidden ease-linear duration-300 transition-all ${
                expanded ? "w-20" : "w-0"
              } `}
              alt=""
            />
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="p-1.5 text-lg hover:bg-gray-100 bg-gray-50  rounded-lg"
            >
              <GoSidebarCollapse />
            </button>
          </div>

          {/* nav-link */}
          <SidebarContext.Provider value={{expanded}}>
            <ul className="flex-1 px-3  w-full">{children}</ul>
          </SidebarContext.Provider>

          {/* user */}
          <div className="border-t justify-between flex p-3">
            <img
              src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="user"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div
              className={` flex justify-between items-center  overflow-hidden ease-linear duration-300 transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-sm text-gray-600">johndoe@gmail.com</span>
              </div>
              <IoMdMore className="" size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;


// sideBar Item

const SideBarItem = ({ icon, text, active, alert }) => {
    const { expanded } = useContext(SidebarContext);
  return (
    <div>
      <li
        className={`flex relative py-2 px-2 my-1 font-medium rounded-md cursor-pointer items-center transition-colors ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        } `}
      >
        {icon}
        <div className={` overflow-hidden transition-all ease-linear duration-200 ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</div>
        {alert && (
          <div
            className={` absolute  ${
              expanded ? "right-2" : "top-2"
            } w-2 h-2 rounded bg-indigo-400`}
          ></div>
        )}
      </li>
    </div>
  );
}

export { SideBarItem };

