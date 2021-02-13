import React, { useState, useEffect, useMemo } from "react";
import Container from "./Container";
import Spinner from "./components/UI/LoadingIndicator";
import { beverageTypes, assets_images } from "./config/constants";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  let images = [];

  images = useMemo(() => {
    for (const [key, assetImg] of Object.entries(assets_images)) {
      images.push(`${window.location.origin}${assetImg}`);
    }
    for (const [key, assetImg] of Object.entries(beverageTypes)) {
      images.push(`${window.location.origin}${assetImg.listing}`);
      images.push(`${window.location.origin}${assetImg.header}`);
    }
    return images;
  });

  useEffect(() => {
    cacheImages(images);
  }, []);

  const showLoading = (loadingFlag) => {
    setIsLoading(loadingFlag);
  };

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises);
    // setTimeout(() => {
    setIsLoading(false);
    // }, 2500);
  };

  return (
    <React.Fragment>
      {isLoading ? <Spinner /> : <Container loader={showLoading} />}
    </React.Fragment>
  );
}

export default App;
