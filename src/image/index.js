import { useState } from "react";
import images from "../assets/image";
console.log(images.noImage);
const Image = ({ src, alt, ...props }) => {
  const [fallback, setFallback] = useState("");
  const handeleError = () => {
    setFallback(images.noImage);
  };
  return (
    <img {...props} src={fallback || src} alt={alt} onError={handeleError} />
  );
};

export default Image;
