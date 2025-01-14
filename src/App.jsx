
import { useState } from "react";
import SideBar, { SideBarItem } from "./component/SideBar"
import { MdOutlineDashboardCustomize } from "react-icons/md";





function App() {

  const [expanded,setExpanded]=useState(true)

  return (
    <div className="flex">
      <div
        className={` ${
          expanded ? "w-3/12" : "w-1/12"
        } transition-all ease-linear duration-200 `}
      >
        <SideBar expanded={expanded} setExpanded={setExpanded}>
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
          <SideBarItem
            icon={
              <MdOutlineDashboardCustomize
                className={`  ${expanded ? "" : "w-10 h-10"}`}
              />
            }
            text={"Dashboard"}
            expanded={expanded}
            setExpanded={setExpanded}
            alert
          />
        </SideBar>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App
