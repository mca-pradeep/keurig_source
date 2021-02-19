import React, { useState, useEffect, useMemo } from "react";
import Container from "./Container";
import Spinner from "./components/UI/LoadingIndicator";
import { beverageTypes, assets_images } from "./config/constants";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  let images = [];

  images = useMemo(() => {
    for (const [key, assetImg] of Object.entries(assets_images)) {
      images.push({
        key: `${window.location.origin}${assetImg}`,
        status: false,
      });
    }
    for (const [key, assetImg] of Object.entries(beverageTypes)) {
      images.push({
        key: `${window.location.origin}${assetImg.listing}`,
        status: false,
      });
      images.push({
        key: `${window.location.origin}${assetImg.header}`,
        status: false,
      });
    }
    return images;
  });

  useEffect(() => {
    cacheImages(images);
  }, []);

  const cacheImages = async (srcArray) => {
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
    setIsLoading(false);
  };
  document.getElementById("root").style[
    "background-image"
  ] = `${window.location.origin}${assets_images.BREWING_LOADER_HOME_IMG}`;
  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
    </React.Fragment>
  );
}

export default App;
