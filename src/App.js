import React, { useState, useEffect, useMemo } from "react";
import Container from "./Container";
import Spinner from "./components/UI/LoadingIndicator";
import { assets_images } from "./config/constants";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  let images = [];

  images = useMemo(() => {
    for (const [key, assetImg] of Object.entries(assets_images)) {
      images.push(`${window.location.origin}${assetImg}`);
    }
    return images;
  });

  useEffect(() => {
    cacheImages(images);
  }, [images]);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <React.Fragment>{isLoading ? <Spinner /> : <Container />}</React.Fragment>
  );
}

export default App;
