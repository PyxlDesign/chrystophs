import { Calendar, Clock } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    { day: 'Monday', time: '7:00 PM - 11:00 PM EST', game: 'Arc Raiders', status: 'Extraction Ops' },
    { day: 'Tuesday', time: '7:00 PM - 11:00 PM EST', game: 'Variety', status: 'Tactical Training' },
    { day: 'Wednesday', time: '7:00 PM - 11:00 PM EST', game: 'Arc Raiders', status: 'High Stakes Raids' },
    { day: 'Thursday', time: 'OFF', game: 'Rest & Restock', status: 'Maintenance' },
    { day: 'Friday', time: '8:00 PM - 1:00 AM EST', game: 'Community Night', status: 'Squad Extractions' },
    { day: 'Saturday', time: '2:00 PM - 8:00 PM EST', game: 'Tournament Play', status: 'Competitive' },
    { day: 'Sunday', time: '6:00 PM - 10:00 PM EST', game: 'Arc Raiders', status: 'Loot Runs' }
  ];

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
              className={`group relative bg-black/40 border transition-all duration-500 p-6 clip-corner ${slot.time === 'OFF'
                  ? 'border-gray-700/30 hover:border-gray-600/50'
                  : 'border-purple-500/20 hover:border-purple-500/60'
                }`}
            >
              <div className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${slot.time === 'OFF'
                  ? 'from-gray-500/5 to-transparent'
                  : 'from-purple-500/5 to-transparent'
                }`}></div>

              <div className="relative flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`text-2xl font-black ${slot.time === 'OFF' ? 'text-gray-500' : 'text-white'
                      }`}>
                      {slot.day}
                    </div>
                    <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider clip-corner ${slot.time === 'OFF'
                        ? 'bg-gray-700/20 text-gray-400 border border-gray-600/30'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                      {slot.status}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Clock className={`w-5 h-5 ${slot.time === 'OFF' ? 'text-gray-500' : 'text-purple-400'
                      }`} strokeWidth={1.5} />
                    <span className={`text-lg font-semibold ${slot.time === 'OFF' ? 'text-gray-500' : 'text-gray-300'
                      }`}>
                      {slot.time}
                    </span>
                  </div>

                  <div className={`text-sm uppercase tracking-wider font-medium ${slot.time === 'OFF' ? 'text-gray-600' : 'text-purple-300'
                    }`}>
                    {slot.game}
                  </div>
                </div>

                <div className={`text-6xl font-black transition-all duration-500 ${slot.time === 'OFF'
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
          <div className="inline-block bg-black/60 border border-purple-500/30 px-8 py-6 clip-corner">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-purple-400" />
              <div className="text-left">
                <div className="text-sm text-purple-400 uppercase tracking-wider font-semibold mb-1">Next Stream</div>
                <div className="text-xl font-bold text-white">Monday, 7:00 PM EST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
