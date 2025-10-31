'use client';

import { useEffect, useRef, useState } from 'react';

interface UseLazyVideoOptions {
  isHero?: boolean;
  intersectionThreshold?: number;
}

export function useLazyVideo(
  videoSrc: string,
  options: UseLazyVideoOptions = {}
) {
  const {
    isHero = false,
    intersectionThreshold = 0.1,
  } = options;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isHero) {
      // Hero video: start loading immediately and play when ready
      videoElement.src = videoSrc;
      videoElement.load();
      setLoaded(true);
    } else {
      // Non-hero videos: use Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loaded) {
              videoElement.src = videoSrc;
              videoElement.load();
              setLoaded(true);
              observer.disconnect();
            }
          });
        },
        { threshold: intersectionThreshold }
      );

      observer.observe(videoElement);

      return () => observer.disconnect();
    }
  }, [videoSrc, isHero, intersectionThreshold, loaded]);

  return { videoRef, loaded };
}
