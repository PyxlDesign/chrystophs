import { Play, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 retro-grid opacity-30"></div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="absolute top-8 left-8 flex items-center gap-3 z-20">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center animate-pulse">
          <Radio className="w-6 h-6 text-purple-400" />
        </div>
        <div className="text-sm font-medium">
          <div className="text-purple-400 uppercase tracking-wider">Status</div>
          <div className="text-gray-300">Ready to Extract</div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
            <img
              src="/chrystophs-logo.png"
              alt="Chrystophs Logo"
              className="relative h-48 md:h-64 w-auto object-contain filter drop-shadow-[0_0_30px_rgba(139,92,246,0.6)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <div className="inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/40 blur-xl"></div>
              <h1 className="relative text-6xl md:text-8xl font-black tracking-tight text-white">
                CHRYSTOPHS
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-purple-400 text-sm md:text-base font-semibold uppercase tracking-[0.3em]">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-purple-500"></div>
            <span>Elite Extraction Specialist</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-purple-500"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Tactical gameplay, high-stakes extractions, and maximum loot.
            Join the raid every stream.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://twitch.tv/chrystophs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-purple-600 hover:bg-purple-500 transition-all duration-300 clip-corner overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-400/0 via-white/20 to-purple-400/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <div className="relative flex items-center gap-3 font-bold text-lg uppercase tracking-wider">
              <Play className="w-5 h-5 fill-current" />
              Watch Live
            </div>
          </a>

          <a
            href="#schedule"
            className="group relative px-10 py-5 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300 clip-corner"
          >
            <div className="relative font-bold text-lg uppercase tracking-wider text-purple-400 group-hover:text-purple-300">
              View Schedule
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent"></div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-linear-to-b from-purple-500 to-transparent"></div>
      </div>
    </div>
  );
}
