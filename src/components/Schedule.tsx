import { Calendar, Clock, Radio } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Schedule() {
  const { schedule, nextStream, isAnyStreamLive } = useData();

  return (
    <section id="schedule" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/5 to-black"></div>
      <div className="absolute inset-0 diagonal-lines opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 border border-purple-500/30 clip-corner">
              <span className="text-purple-400 uppercase tracking-[0.3em] text-sm font-bold">Operation Times</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Weekly Schedule</h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lock in these times for maximum extraction efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {schedule.map((slot, index) => (
            <div
              key={index}
              className={`group relative border transition-all duration-500 p-6 clip-corner ${slot.isLive
                ? 'bg-red-500/10 border-red-500/50 animate-pulse'
                : slot.time === 'OFF'
                  ? 'bg-black/40 border-gray-700/30 hover:border-gray-600/50'
                  : 'bg-black/40 border-purple-500/20 hover:border-purple-500/60'
                }`}
            >
              <div className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${slot.isLive
                ? 'from-red-500/10 to-transparent'
                : slot.time === 'OFF'
                  ? 'from-gray-500/5 to-transparent'
                  : 'from-purple-500/5 to-transparent'
                }`}></div>

              {/* Live indicator overlay */}
              {slot.isLive && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-red-500 text-white pl-2 pr-5 py-1 text-xs font-bold uppercase tracking-wider clip-corner animate-pulse">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3 h-3" />
                      LIVE
                    </div>
                  </div>
                </div>
              )}

              <div className="relative flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`text-2xl font-black ${slot.isLive
                      ? 'text-red-400'
                      : slot.time === 'OFF'
                        ? 'text-gray-500'
                        : 'text-white'
                      }`}>
                      {slot.day}
                      {slot.isLive && (
                        <span className="ml-2 inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      )}
                    </div>
                    <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider clip-corner-sm ${slot.isLive
                      ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                      : slot.time === 'OFF'
                        ? 'bg-gray-700/20 text-gray-400 border border-gray-600/30'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                      {slot.status}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Clock className={`w-5 h-5 ${slot.isLive
                      ? 'text-red-400'
                      : slot.time === 'OFF'
                        ? 'text-gray-500'
                        : 'text-purple-400'
                      }`} strokeWidth={1.5} />
                    <span className={`text-lg font-semibold ${slot.isLive
                      ? 'text-red-300'
                      : slot.time === 'OFF'
                        ? 'text-gray-500'
                        : 'text-gray-300'
                      }`}>
                      {slot.time}
                    </span>
                    {slot.isLive && (
                      <span className="text-red-400 text-sm font-bold animate-pulse">
                        ● STREAMING NOW
                      </span>
                    )}
                  </div>

                  <div className={`text-sm uppercase tracking-wider font-medium ${slot.isLive
                    ? 'text-red-300'
                    : slot.time === 'OFF'
                      ? 'text-gray-600'
                      : 'text-purple-300'
                    }`}>
                    {slot.game}
                  </div>
                </div>

                <div className={`text-6xl font-black transition-all duration-500 ${slot.isLive
                  ? 'text-red-500/20'
                  : slot.time === 'OFF'
                    ? 'text-gray-800/20'
                    : 'text-purple-500/10 group-hover:text-purple-500/20'
                  }`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-block border px-8 py-6 clip-corner ${isAnyStreamLive
            ? 'bg-red-500/10 border-red-500/50'
            : 'bg-black/60 border-purple-500/30'
            }`}>
            <div className="flex items-center gap-4">
              {isAnyStreamLive ? (
                <Radio className="w-8 h-8 text-red-400 animate-pulse" />
              ) : (
                <Calendar className="w-8 h-8 text-purple-400" />
              )}
              <div className="text-left">
                <div className={`text-sm uppercase tracking-wider font-semibold mb-1 ${isAnyStreamLive ? 'text-red-400' : 'text-purple-400'
                  }`}>
                  {isAnyStreamLive ? 'Currently Streaming' : 'Next Stream'}
                </div>
                <div className={`text-xl font-bold ${isAnyStreamLive ? 'text-red-300' : 'text-white'
                  }`}>
                  {nextStream}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}