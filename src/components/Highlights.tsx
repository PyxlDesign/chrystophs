import { Play, ExternalLink } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Highlights() {
  const { highlights } = useData();

  const formatViews = (views: string) => {
    // If views already contains 'K' or 'M', check if it should be formatted differently
    if (views.includes('K') || views.includes('M')) {
      const number = parseFloat(views.replace(/[KM]/g, ''));
      const unit = views.includes('M') ? 'M' : 'K';

      if (unit === 'K' && number < 1) {
        // If less than 1K (like 0.5K), convert back to actual number
        return Math.round(number * 1000).toString();
      }
      return views; // Keep original formatting for 1K+ or M
    }

    // If it's a plain number, format appropriately
    const num = parseInt(views);
    if (isNaN(num)) return views; // Return original if not a number

    if (num >= 1000) {
      const kValue = Math.round(num / 100) / 10; // Round to 1 decimal place
      return kValue >= 1 ? `${kValue}K` : num.toString();
    }
    return num.toString();
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/10 to-black"></div>
      <div className="absolute inset-0 retro-grid opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 border border-purple-500/30 clip-corner">
              <span className="text-purple-400 uppercase tracking-[0.3em] text-sm font-bold">Best Moments</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Epic Highlights</h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch the most intense extractions and legendary plays
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight) => (
            <a
              key={highlight.id}
              href={highlight.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black/40 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 overflow-hidden clip-corner"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={highlight.thumbnail}
                  alt={highlight.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500 box-shadow-glow">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-sm font-bold text-white backdrop-blur-xs">
                  {highlight.duration}
                </div>

                <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-sm font-semibold text-purple-400 backdrop-blur-xs">
                  {formatViews(highlight.views)} views
                </div>
              </div>

              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {highlight.title}
                </h3>

                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider">
                  <span>Watch Now</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300 clip-corner group"
          >
            <span className="font-bold text-lg uppercase tracking-wider text-purple-400 group-hover:text-purple-300">
              View All Highlights
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
