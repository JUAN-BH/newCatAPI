import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

interface props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const LazyImg = ({ src, ...imgAtributtes }: props) => {
  const [srcImg, setSrcImg] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleOnIntercepting: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrcImg(src);
        }
      });
    };

    const observer = new IntersectionObserver(handleOnIntercepting);

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={imgRef} src={srcImg} {...imgAtributtes} />;
};
