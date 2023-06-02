import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import heartImg from "../../../assets/icons/heart.png";
interface props extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  addFav?: boolean;
}

export const LazyImg = ({ src, addFav, ...imgAtributtes }: props) => {
  const [srcImg, setSrcImg] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleOnIntercepting: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (src) setSrcImg(src);
        }
      });
    };

    const observer = new IntersectionObserver(handleOnIntercepting);

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <div className="relative">
      <img
        src={heartImg}
        alt="heart icon"
        className={`positionHeart absolute h-40 w-40 scale-0 opacity-80 transition duration-200 ease-in ${
          addFav ? "pulseHeart" : ""
        }`}
      />
      <img className="imgStyle" ref={imgRef} src={srcImg} {...imgAtributtes} />
    </div>
  );
};
