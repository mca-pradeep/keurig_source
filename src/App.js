import React, { useState, useEffect /*, useMemo*/ } from "react";
import Container from "./Container";
import Spinner from "./components/UI/FirstScreenLoader";
import { beverageTypes, assets_images } from "./config/constants";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  let images = () => {
    let imgs = [];
    for (const key in assets_images) {
      imgs.push({
        key: `${window.location.origin}${assets_images[key]}`,
        status: false,
      });
    }
    for (const key in beverageTypes) {
      imgs.push({
        key: `${window.location.origin}${beverageTypes[key].listing}`,
        status: false,
      });
      imgs.push({
        key: `${window.location.origin}${beverageTypes[key].header}`,
        status: false,
      });
    }
    return imgs;
  };

  useEffect(() => {
    cacheImages(images);
  }, []);

  const cacheImages = async (srcArrayFunc) => {
    const srcArray = srcArrayFunc();
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src.key;
        img.onload = () => {
          resolve();
          src.status = true;
        };
        img.onerror = () => {
          reject();
        };
      });
    });
    await Promise.all(promises);
    setTimeout(() => setIsLoading(false), 5000);
  };
  document.getElementById("root").style[
    "background-image"
  ] = `${window.location.origin}${assets_images.BREWING_LOADER_HOME_IMG}`;
  return (
    <React.Fragment>
      {isLoading ? <Spinner /> : null}
      <div className="container">
        <Container isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
    </React.Fragment>
  );
}

export default App;
