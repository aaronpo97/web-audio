import AudioContext from "./AudioContext";

interface OscillatorArgs {
   duration: number;
   type: OscillatorType;
   frequency: number;
}

/**
 * @param args
 * @param args.duration How long you want the oscillator to play for. Measured in seconds.
 * @param args.type The type of oscillator you would like to use.
 * @param args.type The frequency in hertz the oscillator will play at.
 */
const startOscillator = ({ duration, type, frequency }: OscillatorArgs): Promise<void> => {
   return new Promise(resolve => {
      const osc = AudioContext.createOscillator();

      osc.type = type;
      osc.frequency.value = frequency;

      osc.start();
      osc.connect(AudioContext.destination);
      osc.stop(AudioContext.currentTime + duration);

      setTimeout(() => {
         resolve();
      }, duration * 1000);
   });
};

export default startOscillator;
