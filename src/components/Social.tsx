import { Twitch, Youtube, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Social() {
  const { socialLinks } = useData();

  const socials = [
    {
      icon: Twitch,
      name: 'Twitch',
      handle: '@chrystophs',
      link: socialLinks.twitch,
      color: 'from-purple-600 to-purple-400',
      hoverColor: 'hover:border-purple-400'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: '@chrystophs',
      link: socialLinks.youtube,
      color: 'from-red-600 to-red-400',
      hoverColor: 'hover:border-red-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@chrystophs',
      link: socialLinks.twitter,
      color: 'from-blue-500 to-blue-300',
      hoverColor: 'hover:border-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@chrystophs',
      link: socialLinks.instagram,
      color: 'from-pink-600 via-purple-600 to-orange-500',
      hoverColor: 'hover:border-pink-400'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      handle: 'Join Server',
      link: socialLinks.discord || '#',
      color: 'from-indigo-600 to-indigo-400',
      hoverColor: 'hover:border-indigo-400'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/5 to-black"></div>
      <div className="absolute inset-0 diagonal-lines opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 border border-purple-500/30 clip-corner">
              <span className="text-purple-400 uppercase tracking-[0.3em] text-sm font-bold">Connect</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Join The Squad</h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Follow on all platforms for updates, content, and community raids
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className={`group relative bg-black/60 border border-purple-500/20 ${social.hoverColor} transition-all duration-500 p-8 clip-corner overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className={`w-20 h-20 rounded-full bg-linear-to-br ${social.color} p-[2px]`}>
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center group-hover:bg-transparent transition-all duration-500">
                      <social.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{social.name}</h3>
                <p className="text-purple-400 font-semibold">{social.handle}</p>

                <div className="mt-6 text-sm uppercase tracking-wider text-gray-500 group-hover:text-purple-400 transition-colors duration-300 font-bold">
                  Follow →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 px-12 py-8 clip-corner-all max-w-3xl">
            <h3 className="text-3xl font-black text-white mb-4">Ready to Extract?</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Subscribe and turn on notifications to never miss a raid
            </p>
            <a
              href={socialLinks.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-500 transition-all duration-300 clip-corner group"
            >
              <span className="font-bold text-lg uppercase tracking-wider text-white">
                Subscribe Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
