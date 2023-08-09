import  { FC } from "react";
import "./App.css";
import MusicPlayer from "./Component/MusicPlayer";

const App: FC = () => {
  return (
    <>
      <div className="App">
        <main className="App-main">
          <MusicPlayer />
          <p>©2023: <span className="zeeg">Say I Believe - Zeeg</span></p>
        </main>
      </div>
    </>
  );
};

export default App;
