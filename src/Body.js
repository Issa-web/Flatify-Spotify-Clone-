// import React from 'react';
// import Header from './Header';
// import './Body.css';
// import { useDataLayerValue } from './DataLayer';
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import SongRow from "./SongRow";

// function Body( { spotify }) {

//     const [{ cohort_playlist }, dispatch] = useDataLayerValue();

//     const playPlaylist = (id) => {
//         spotify
//           .play({
//             context_uri: `spotify:playlist:1fFkUDjiG0g2OytiqmL1zY`,
//           })
//           .then((res) => {
//             spotify.getMyCurrentPlayingTrack().then((r) => {
//               dispatch({
//                 type: "SET_ITEM",
//                 item: r.item,
//               });
//               dispatch({
//                 type: "SET_PLAYING",
//                 playing: true,
//               });
//             });
//           });
//       };
    
//       const playSong = (id) => {
//         spotify
//           .play({
//             uris: [`spotify:track:${id}`],
//           })
//           .then((res) => {
//             spotify.getMyCurrentPlayingTrack().then((r) => {
//               dispatch({
//                 type: "SET_ITEM",
//                 item: r.item,
//               });
//               dispatch({
//                 type: "SET_PLAYING",
//                 playing: true,
//               });
//             });
//           });
//       };









//     return (
//         <div className='body'>
//             <Header spotify={spotify}/>

//             <div className="body__info">
//                 <img src={cohort_playlist?.images[0].url} alt="" />
//                 <div className="body__infoText">
//                     <strong> PLAYLIST: </strong>
//                     <h3> 2 COMMIT 2 GIT</h3>
//                     <p> {cohort_playlist?.description}</p>
//             </div>

//             </div>

//             <div className="body__songs">
//             <div className="body__icons">
//                 <PlayCircleFilledIcon 
//                 className="body__shuffle"
//                 onClick={playPlaylist}
//                 />
//                 <FavoriteIcon fontSize="large"/>
//                 <MoreHorizIcon />
//             </div>
//             {/* songs */}
//             {cohort_playlist?.tracks.items.map((song) => 
//                 <SongRow playSong={playSong} track={song.track} />
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Body;


import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from './DataLayer';
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ cohort_playlist }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:1fFkUDjiG0g2OytiqmL1zY`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={cohort_playlist?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h3> Commit 2 Git</h3>
          <p>{cohort_playlist?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {cohort_playlist?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;