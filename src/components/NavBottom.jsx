import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import { Heart } from "react-bootstrap-icons";

const NavBottom = () => {
  const selectedSong = useSelector((state) => state.select.selectedSong);
  const likedSongs = useSelector((state) => state.like.likedSongs);
  const isLiked = likedSongs.some((song) => song.id === selectedSong?.id);
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-8 offset-lg-3">
          <div className="row h-100 flex-row justify-content-center align-items-center">
            {selectedSong && (
              <div className="col-4 col-md-4 text-white">
                <div className="d-flex">
                  {isLiked && (
                    <div>
                      <Heart className="text-center me-2"></Heart>
                    </div>
                  )}
                  <img
                    className="me-2 "
                    src={selectedSong.album.cover_medium}
                    alt="track"
                    height="50"
                  />

                  <p className="pbottom">
                    {selectedSong.title}
                    <br />
                    {selectedSong.artist.name}
                  </p>
                </div>
              </div>
            )}

            <div className="col-8 col-md-4  playerControls">
              <div className="d-flex">
                <a href="shuffle">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="prev">
                  <img src={prev} alt="prev" />
                </a>
                <a href="play">
                  <img src={play} alt="play" />
                </a>
                <a href="next">
                  <img src={next} alt="next" />
                </a>
                <a href="repeat">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBottom;
