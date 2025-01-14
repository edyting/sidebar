import { useContext } from "react";
import SideBar, { SidebarContext, SideBarItem } from "./component/SideBar"
import { MdOutlineDashboardCustomize } from "react-icons/md";


function App() {


  return (
    <div className="flex">
      <div className="w-3/12">
        <SideBar>
          <SideBarItem
            icon={<MdOutlineDashboardCustomize />}
            text={"Dashboard"}
            alert
          />
        </SideBar>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App
