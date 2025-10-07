import { Users, Clock, Award, Crosshair } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Stats() {
  const { streamStats } = useData();

  const formatNumber = (num: number, showPlus: boolean = false) => {
    if (num >= 1000000) {
      const mValue = Math.round(num / 100000) / 10; // Round to 1 decimal place
      return `${mValue}M${showPlus ? '+' : ''}`;
    } else if (num >= 1000) {
      const kValue = Math.round(num / 100) / 10; // Round to 1 decimal place
      return `${kValue}K${showPlus ? '+' : ''}`;
    }
    return `${num}${showPlus ? '+' : ''}`;
  };

  const stats = [
    { icon: Users, value: formatNumber(streamStats.followers, true), label: 'Followers', color: 'from-purple-500 to-pink-500' },
    { icon: Clock, value: formatNumber(streamStats.hoursStreamed, true), label: 'Hours Streamed', color: 'from-purple-500 to-blue-500' },
    { icon: Award, value: formatNumber(streamStats.totalStreams, true), label: 'Total Streams', color: 'from-purple-500 to-cyan-500' },
    { icon: Crosshair, value: formatNumber(streamStats.avgViewers), label: 'Avg Viewers', color: 'from-purple-500 to-violet-500' }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/20 to-black"></div>

      <div className="absolute inset-0 retro-grid opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-black/60 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 p-8 clip-corner backdrop-blur-xs">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 rounded-full bg-linear-to-br ${stat.color} p-[2px]`}>
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <stat.icon className="w-7 h-7 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <div className="text-4xl md:text-5xl font-black mb-2 text-white text-shadow-glow">
                    {stat.value}
                  </div>

                  <div className="text-sm uppercase tracking-wider text-purple-400 font-semibold">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
