import { useDispatch, useSelector } from "react-redux";
import {
  getAlbumsAction,
  getAlbumsActionHipHop,
  getAlbumsActionPop,
} from "../redux/actions";
import { useEffect } from "react";
import CardAlbum from "./CardAlbum";

const Home = () => {
  const rock = useSelector((state) => state.rock.data);
  const pop = useSelector((state) => state.pop.data);
  const hiphop = useSelector((state) => state.hiphop.data);
  const search = useSelector((state) => state.search.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumsAction("queen"));
    dispatch(getAlbumsActionPop("katyperry"));
    dispatch(getAlbumsActionHipHop("eminem"));
  }, [dispatch]);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="trending">TRENDING</a>
          <a href="podcast">PODCAST</a>
          <a href="moods and genres">MOODS AND GENRES</a>
          <a href="new releases">NEW RELEASES</a>
          <a href="discover">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          {search.length > 0 && (
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {search.map((album, index) => {
                  return <CardAlbum key={index} data={album} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {rock &&
                rock.slice(0, 4).map((album, index) => {
                  return <CardAlbum key={index} data={album} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {pop &&
                pop.slice(0, 4).map((album, index) => {
                  return <CardAlbum key={index} data={album} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {hiphop &&
                hiphop.slice(0, 4).map((album, index) => {
                  return <CardAlbum key={index} data={album} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
