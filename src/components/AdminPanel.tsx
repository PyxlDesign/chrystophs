import { useState } from 'react';
import { useData } from '../context/DataContext';
import { Settings, Clock, Radio } from 'lucide-react';

export default function AdminPanel() {
    const { schedule, setSchedule, updateStreamStatus } = useData();
    const [isVisible, setIsVisible] = useState(false);

    const toggleStreamLive = (index: number) => {
        const updatedSchedule = schedule.map((item, i) =>
            i === index ? { ...item, isLive: !item.isLive } : { ...item, isLive: false }
        );
        setSchedule(updatedSchedule);
        updateStreamStatus();
    };

    if (!isVisible) {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setIsVisible(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                    title="Open Admin Panel"
                >
                    <Settings className="w-5 h-5" />
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-black/90 border border-purple-500/30 rounded-lg p-4 min-w-[320px] backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Admin Panel
                </h3>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    ✕
                </button>
            </div>

            <div className="space-y-3">
                <div className="text-sm text-purple-400 font-semibold uppercase tracking-wider">
                    Stream Controls
                </div>

                {schedule.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded border border-purple-500/20">
                        <div className="flex-1">
                            <div className="text-white text-sm font-medium">{slot.day}</div>
                            <div className="text-gray-400 text-xs">{slot.time}</div>
                        </div>

                        <button
                            onClick={() => toggleStreamLive(index)}
                            className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase transition-all ${slot.isLive
                                    ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                                    : 'bg-gray-700/20 text-gray-400 border border-gray-600/30 hover:border-purple-500/50'
                                }`}
                            disabled={slot.time === 'OFF'}
                        >
                            {slot.isLive ? (
                                <>
                                    <Radio className="w-3 h-3" />
                                    LIVE
                                </>
                            ) : (
                                <>
                                    <Clock className="w-3 h-3" />
                                    OFF
                                </>
                            )}
                        </button>
                    </div>
                ))}

                <div className="pt-2 border-t border-purple-500/20">
                    <button
                        onClick={updateStreamStatus}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors"
                    >
                        Refresh Status
                    </button>
                </div>
            </div>
        </div>
    );
}