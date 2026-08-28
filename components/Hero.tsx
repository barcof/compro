"use client";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background min-h-screen"
    >
      {/* <div className="relative aspect-video flex h-svh w-full items-center justify-center overflow-hidden"> */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          preload="auto"
          autoPlay
          muted
          playsInline
          loop
          // className="absolute top-0 transform inset-0 w-screen h-screen object-cover z-0"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/uploads/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <div className="z-20 font-bold text-center text-accent p-5 gap-2 lg:gap-4 flex flex-col">
          <h1 className="text-6xl">QUICK ACTION</h1>
          <h1 className="text-6xl">BEST QUALITY</h1>
        </div> */}

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Quick Action and Best Quality
          </h1>
          <TypeAnimation
            sequence={[
              'Kualitas bukanlah kata tanpa makna',
              100,
              'Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari kreatifitas',
              100,
              'Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari kreatifitas, idealisme',
              100,
              'Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari kreatifitas, idealisme, kesungguhan',
              100,
              'Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari kreatifitas, idealisme, kesungguhan, kerja keras',
              100,
              'Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari kreatifitas, idealisme, kesungguhan, kerja keras, kebersamaan',
              100,
              'Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari kreatifitas, idealisme, kesungguhan, kerja keras, kebersamaan dan do’a.',
              10000,
              '',
              100
            ]}
            speed={50}
            wrapper="p"
            cursor={false}
            repeat={Infinity}
            // style={{ fontSize: "2em", display: "inline-block" }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          />
          {/* <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari
            kreatifitas, idealisme, kesungguhan, kerja keras, kebersamaan, dan
            do’a.
          </p> */}
        </div>
      </div>
      {/* <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4">
        <div className="flex flex-col z-10 mx-auto">
          <div className="relative font-bold tracking-tight flex flex-col gap-4 text-6xl text-left text-accent mx-auto lg:text-6xl">
            <span>Quick Action and Best Quality</span>
          </div>
        </div>
        <video
          preload="auto"
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-0 transform inset-0 w-screen h-screen object-cover z-0"
        >
          <source src="/uploads/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </section>
  );
};

export default Hero;
