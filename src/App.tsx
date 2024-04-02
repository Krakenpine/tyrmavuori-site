import React, { useState } from 'react';
import logo from './logo1.png';
import { albums } from "./albums";
import './App.css';
import './Cardinal.ttf';

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(0);
  const [menuSelection, setMenuSelection] = useState(0);
  const [fadeOn, setFadeOn] = useState(false);

  function handleButtonClick(index: number) {
    if (index !== selectedAlbum) {
      setMenuSelection(index);
      setFadeOn(true);
      setTimeout(() => {
        setSelectedAlbum(index)
        }, 401);
      setTimeout(() => {
        setFadeOn(false)
        }, 400);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Tyrmavuori-logo" alt="logo" />
        <p>
          Tyrmävuori
        </p>
        <div className="header-text">
          Tyrmävuori tells a story of a goblin civilization in a series of intrumental concept albums.
        </div>
        <div className="streaming-links">
          <a href="https://tyrmavuori.bandcamp.com/">Tyrmävuori on Bandcamp</a>
          <div>Tyrmävuori on Spotify</div>
        </div>
      </header>
      <div className="menu">
        {albums.map((album, index) => {
          return <div
            className={"menu-album-title" + (index === (menuSelection !== selectedAlbum ? menuSelection : selectedAlbum) ? " album-title-selected" : " album-title-not-selected")}
            onClick={() => handleButtonClick(index)}>
                <div className={"menu-album-title-text"}>{album.title}</div>
              </div>
        })}
      </div>
      <div className={"album-content " + (fadeOn ? "album-content-fading" : "album-content-appearing")}>
        <img src={albums[selectedAlbum].cover} className="album-cover" alt=""/>
        <div className="album-title-container">
          <div className="album-title">{albums[selectedAlbum].title}</div>
          
          <div className="album-release-date">{albums[selectedAlbum].released ? "Released "+ albums[selectedAlbum].released : "Not yet released!"}</div>
        </div>
        <div className="album-tracklist">
          {albums[selectedAlbum].tracks.map((track, index) => {
            return <div className="single-track">
              <div className="single-track-number">{index + 1}. </div>
              <div className="single-track-name">{track}</div>
              </div>
            })}
        </div>
        <div className="vali" />
        <div className="album-links">
            {albums[selectedAlbum].links.map(link =>{
              return <a href={link.link} className="album-link-single">{link.name}</a>
            })}
        </div>
        <div className="vali" />
        <div className="story">
          {albums[selectedAlbum].story.map(storyLine => {return <div className="story-line">{storyLine}</div>})}
        </div>
      </div>
      <hr className="hr-break"/>
      <div className="credits">
        <div>Composition, writing, and website by Lauri Pekkarinen</div>
        <div>Story concepts by Pekka Rihko</div>
        <div>Reconstitution cover art by <a href="https://www.mamuunudesign.com">Mamuunu Design</a></div>
      </div>
    </div>
  );
}

export default App;
