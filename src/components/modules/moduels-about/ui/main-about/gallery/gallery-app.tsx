import React, { useState, useEffect } from "react";
import barn from "../../../shared/json/barn.json";


interface BarnImg {
  index: number;
  filename: string;

}

const GalleryApp: React.FC = () => {
  const images: BarnImg[] = barn.images;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      goToPrevious();
    } else if (event.key === "ArrowRight") {
      goToNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="gallery">
      <div className="image-container">
        {images.length > 0 ? (
          <img
            className="image current"
            src={images[currentIndex].filename}
            alt={`Image ${images[currentIndex].index}`}
          />
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className="thumbnails">
        <button onClick={goToPrevious} className="nav-button">
        <img src={barn.arrow[0].src} alt="" />
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.filename}
            alt={`Thumbnail ${image.index}`}
            className="thumbnail"
            onClick={() => selectImage(index)}
            style={{
              border: index === currentIndex ? "1px solid beige" : "none",
              opacity: index === currentIndex ? 1 : 0.5,
            }}
          />
        ))}
        <button onClick={goToNext} className="nav-button">
         <img src={barn.arrow[1].src} alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryApp;
