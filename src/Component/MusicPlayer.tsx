import React from "react";
import Apple from "../assets/Apple-Music-PNG-Photo.png";
import Itunes from "../assets/itunes.png";
import Spotify from "../assets/spotify.png";
import Tidal from "../assets/tidal-logo.png";
import AudioMack from "../assets/audiomack.png";
import Boomplay from "../assets/boomplay.png";
import Deezer from "../assets/deezer.png";
import Youtube from "../assets/youtube.png";
import { musicStore } from "./musicStore";
import { BsPlayFill } from "react-icons/bs";
import { AiTwotoneShopping } from "react-icons/ai";

interface ImageMap {
  [key: string]: string;
}

const MusicPlayer: React.FC = () => {
  const imageMap: ImageMap = {
    apple: Apple,
    itunes: Itunes,
    spotify: Spotify,
    tidal: Tidal,
    audiomack: AudioMack,
    boomplay: Boomplay,
    deezer: Deezer,
    youtube: Youtube,
  };
  const getImageSource = (imageName: string): string | undefined => {
    return imageMap[imageName];
  };

  return (
    <div className="md:w-1/2 bg-slate-600 py-48">
      <iframe
        title="deezer-widget"
        src="https://widget.deezer.com/widget/dark/album/469850105?tracklist=false"
        height="300"
        frameBorder="0"
        width="100%"
        //  allowtransparency="true"
        allow="encrypted-media; clipboard-write"
      ></iframe>
      <div className="store-container">
        {musicStore.map((store) => (
          <a
            href={store.link}
            key={store.id}
            className={`${
              store.store === "Tidal" && "no-border"
            } store-div`}
          >
            <div className="logo-div">
              <img
                src={getImageSource(store.logo)}
                className="stores-logo"
                alt={store.logo}
              />
              <div>
                <p className={`${store.store === "Spotify" && "spot-green"}`}>
                  <strong>{store.store}</strong>
                </p>
              </div>
            </div>
            <div className="play-btn">
              <span className="btn">
                {store.store === "iTunes" ? (
                  <AiTwotoneShopping />
                ) : (
                  <BsPlayFill />
                )}
              </span>{" "}
              <span>{store.store === "iTunes" ? "BUY" : "PLAY"}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
