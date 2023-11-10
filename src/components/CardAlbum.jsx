import { useDispatch } from "react-redux";
import { likeSongAction, selectSongAction } from "../redux/actions";
import { Heart } from "react-bootstrap-icons";

const CardAlbum = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectSongAction(data));
  };
  const handleLike = () => {
    dispatch(likeSongAction(data));
  };

  console.log("dentro img", data);
  return (
    <div className="col text-center" id="">
      <img
        className="img-fluid"
        src={data.album.cover_medium}
        alt="track"
        onClick={handleClick}
      />
      <p>
        Track:{" "}
        {data.title.length < 16
          ? data.title
          : `${data.title.substring(0, 16)}...`}
        <br />
        Artist: {data.artist.name}
        <button onClick={handleLike} className=" btn text-white ">
          <Heart></Heart>
        </button>
      </p>
    </div>
  );
};

export default CardAlbum;
