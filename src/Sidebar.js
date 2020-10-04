import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

    return (
      <div className="sidebar">
          <img className="sidebar__logo"
          src="https://iili.io/dNk6zJ.md.jpg" alt="dNk6zJ.md.jpg" border="0"/>

          <SidebarOption Icon={HomeOutlinedIcon} title="Home"/>
          <SidebarOption Icon={SearchOutlinedIcon} title="Search"/>
          <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library"/>
        
           <br />
            <strong className="sidebar__title"> YOUR PLAYLISTS </strong>
           <hr />

            {playlists?.items?.map( (playlist) => (
              <SidebarOption title={playlist.name}  />
            ))}

      </div>
    );
}

export default Sidebar;

