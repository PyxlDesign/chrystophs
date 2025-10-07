import { Target, Zap, Trophy, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Precision Gameplay',
      description: 'Tactical decision-making and calculated risks in every raid'
    },
    {
      icon: Zap,
      title: 'High Energy',
      description: 'Non-stop action with engaging commentary and community interaction'
    },
    {
      icon: Trophy,
      title: 'Victory Focused',
      description: 'Consistent wins, legendary loot, and clutch extractions'
    },
    {
      icon: Shield,
      title: 'Community First',
      description: 'Building a crew of raiders who support and elevate each other'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 diagonal-lines"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 border border-purple-500/30 clip-corner">
              <span className="text-purple-400 uppercase tracking-[0.3em] text-sm font-bold">Mission Briefing</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">About The Operator</h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black/40 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 p-8 clip-corner"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="mb-6 inline-block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl group-hover:bg-purple-500/40 transition-all duration-500"></div>
                    <feature.icon className="relative w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>

              <div className="absolute top-4 right-4 text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-500 font-black text-6xl">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
