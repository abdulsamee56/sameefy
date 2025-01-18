import React, { useEffect } from "react";

function BackgroundMusic({ audioRef, songs }) {
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audioRef.current = audio;

      // Play a random song on load
      const randomIndex = Math.floor(Math.random() * songs.length);
      audio.src = songs[randomIndex];
      audio.volume = 0.1;

      // Play on user interaction
      const handleInteraction = () => {
        audio.play().catch((error) => console.error("Audio playback failed:", error));

        // Loop to another random song when the current one ends
        audio.addEventListener("ended", () => {
          const newRandomIndex = Math.floor(Math.random() * songs.length);
          audio.src = songs[newRandomIndex];
          audio.play();
        });

        window.removeEventListener("click", handleInteraction);
      };

      window.addEventListener("click", handleInteraction);
    }
  }, [audioRef, songs]);

  return null; // No UI for this component
}

export default BackgroundMusic;
