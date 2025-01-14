import { GoSidebarCollapse } from "react-icons/go";
import { IoMdMore } from "react-icons/io";

const SideBar = ({children}) => {
  return (
    <div>
      <aside className="h-screen">
        <nav className="h-full border-r bg-white shadow-md flex items-center flex-col">
          {/* logo */}
          <div className="p-4 pb-2 w-full pl-20 flex justify-between items-center">
            <img src="/logoipsum-327.svg" className="w-20" alt="" />
            <button className="p-1.5 text-lg hover:bg-gray-100 bg-gray-50  rounded-lg">
              <GoSidebarCollapse />
            </button>
          </div>

          {/* nav-link */}
          <ul className="flex-1 px-3  w-full">{children}</ul>

          {/* user */}
          <div className="border-t justify-between flex p-3">
            <img
              src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="user"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div
              className={` flex justify-between items-center w-52 ml-3 `}
                      >
                          <div className="leading-4">
                              <h4 className="font-semibold">John Doe</h4>
                              <span className="text-sm text-gray-600">johndoe@gmail.com</span>
                          </div>
                          <IoMdMore className="" size={20}/>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;


// sideBar Item

const SideBarItem = ({icon,text,active,alert}) => {
  return (
    <div>
      
    </div>
  )
}

export { SideBarItem };

