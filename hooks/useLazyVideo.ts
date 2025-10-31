'use client';

import { useEffect, useRef, useState } from 'react';

interface UseLazyVideoOptions {
  isHero?: boolean;
  heroDelay?: number;
  intersectionThreshold?: number;
}

export function useLazyVideo(
  videoSrc: string,
  options: UseLazyVideoOptions = {}
) {
  const {
    isHero = false,
    heroDelay = 2000,
    intersectionThreshold = 0.1,
  } = options;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isHero) {
      // Hero video: wait 2 seconds then load
      const timer = setTimeout(() => {
        videoElement.src = videoSrc;
        videoElement.load();
        setLoaded(true);
      }, heroDelay);

      return () => clearTimeout(timer);
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
  }, [videoSrc, isHero, heroDelay, intersectionThreshold, loaded]);

  return { videoRef, loaded };
}
