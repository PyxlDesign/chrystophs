import { Heart, Terminal } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Footer() {
  const { socialLinks } = useData();

  return (
    <footer className="relative border-t border-purple-500/20 py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-purple-950/10"></div>
      <div className="absolute inset-0 retro-grid opacity-10"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/ChatGPT Image Oct 7, 2025, 11_04_22 AM.png"
                alt="Chrystophs"
                className="h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elite extraction specialist bringing tactical gameplay and high-energy content to the streaming community.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Highlights
                </a>
              </li>
              <li>
                <a href={socialLinks.twitch} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Twitch
                </a>
              </li>
              <li>
                <a href={socialLinks.discord || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Sponsor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>© 2025 Chrystophs. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-purple-400 fill-purple-400" />
              <span>for the raider community</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </footer>
  );
}
