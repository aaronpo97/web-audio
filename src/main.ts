import AudioContext from "./AudioContext";
import startOscillator from "./startOscillator";
import ntof from "./noteToFrequencyMapping";
const buttonEl = document.querySelector<HTMLButtonElement>("#noise-btn")!;

buttonEl.addEventListener("click", async () => {
   if (AudioContext.state === "suspended") {
      AudioContext.resume();
   }

   await startOscillator({ duration: 1, frequency: ntof.C4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.C4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.G4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.G4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.A4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.A4, type: "square" });
   await startOscillator({ duration: 2, frequency: ntof.G4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.F4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.F4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.E4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.E4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.D4, type: "square" });
   await startOscillator({ duration: 1, frequency: ntof.D4, type: "square" });
   await startOscillator({ duration: 2, frequency: ntof.C4, type: "square" });
});
