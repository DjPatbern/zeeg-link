import  { FC } from "react";
import "./App.css";
import MusicPlayer from "./Component/MusicPlayer";

const App: FC = () => {
  return (
    <>
      <div className="App">
        <main className="App-main">
          <MusicPlayer />
          <p>©2023: Say I Believe - Zeeg</p>
        </main>
      </div>
    </>
  );
};

export default App;
