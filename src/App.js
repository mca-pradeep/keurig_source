import React, { useState, useEffect } from "react";
import Container from "./Container";
import Spinner from "./components/UI/LoadingIndicator";
import { assets_images } from "./config/constants";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  let images = [];

  for (const [key, assetImg] of Object.entries(assets_images)) {
    images.push(`${window.location.origin}${assetImg}`);
  }

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
    setIsLoading(false);
  };

  return (
    <React.Fragment>{isLoading ? <Spinner /> : <Container />}</React.Fragment>
  );
}

export default App;
