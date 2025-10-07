import { useState } from 'react';
import { useAppData } from '../hooks/useAppData';
import { Users, Calendar, Radio, X } from 'lucide-react';

export default function DataDemo() {
    const [isVisible, setIsVisible] = useState(false);
    const {
        streamStats,
        socialLinks,
        highlights,
        isAnyStreamLive,
        getCurrentLiveStream,
        getNextScheduledStream,
        getTodaysStream,
        getStreamsByGame,
        getUpcomingStreams,
        getStreamStatusText,
        setStreamLive
    } = useAppData();

    if (!isVisible) {
        return (
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsVisible(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                    title="Open Data Demo"
                >
                    <Calendar className="w-5 h-5" />
                </button>
            </div>
        );
    }

    const currentLive = getCurrentLiveStream();
    const nextStream = getNextScheduledStream();
    const todaysStream = getTodaysStream();
    const codingStreams = getStreamsByGame('Coding');
    const upcomingStreams = getUpcomingStreams(3);

    return (
        <div className="fixed top-4 right-4 z-50 bg-black/95 border border-blue-500/30 rounded-lg p-6 max-w-md backdrop-blur-sm max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Data Context Demo
                </h3>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-4 text-sm">
                {/* Live Status */}
                <div className="bg-white/5 rounded p-3 border border-blue-500/20">
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                        <Radio className="w-4 h-4" />
                        Live Status
                    </h4>
                    <div className="text-white">
                        <div className={`text-xs ${isAnyStreamLive ? 'text-red-400' : 'text-gray-400'}`}>
                            {getStreamStatusText()}
                        </div>
                        {currentLive && (
                            <div className="text-xs text-red-300 mt-1">
                                🔴 {currentLive.game} - {currentLive.status}
                            </div>
                        )}
                    </div>
                </div>

                {/* Stream Stats */}
                <div className="bg-white/5 rounded p-3 border border-blue-500/20">
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Statistics
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                        <div>Followers: {streamStats.followers.toLocaleString()}</div>
                        <div>Avg Viewers: {streamStats.avgViewers}</div>
                        <div>Total Streams: {streamStats.totalStreams}</div>
                        <div>Hours: {streamStats.hoursStreamed.toLocaleString()}</div>
                    </div>
                </div>

                {/* Today's Stream */}
                {todaysStream && (
                    <div className="bg-white/5 rounded p-3 border border-blue-500/20">
                        <h4 className="text-blue-400 font-semibold mb-2">Today's Stream</h4>
                        <div className="text-xs text-gray-300">
                            <div>{todaysStream.time}</div>
                            <div>{todaysStream.game} - {todaysStream.status}</div>
                            {todaysStream.time !== 'OFF' && (
                                <button
                                    onClick={() => setStreamLive(todaysStream.day, !todaysStream.isLive)}
                                    className={`mt-2 px-2 py-1 rounded text-xs ${todaysStream.isLive
                                            ? 'bg-red-500 text-white'
                                            : 'bg-gray-600 text-gray-300'
                                        }`}
                                >
                                    {todaysStream.isLive ? 'Stop Stream' : 'Go Live'}
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Stream */}
                {nextStream && (
                    <div className="bg-white/5 rounded p-3 border border-blue-500/20">
                        <h4 className="text-blue-400 font-semibold mb-2">Next Stream</h4>
                        <div className="text-xs text-gray-300">
                            <div>{nextStream.day} - {nextStream.time}</div>
                            <div>{nextStream.game} - {nextStream.status}</div>
                        </div>
                    </div>
                )}

                {/* Coding Streams */}
                {codingStreams.length > 0 && (
                    <div className="bg-white/5 rounded p-3 border border-blue-500/20">
                        <h4 className="text-blue-400 font-semibold mb-2">Coding Streams</h4>
                        <div className="space-y-1">
                            {codingStreams.map((stream, idx) => (
                                <div key={idx} className="text-xs text-gray-300">
                                    {stream.day} - {stream.time}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Upcoming Streams */}
                <div className="bg-white/5 rounded p-3 border border-blue-500/20">
                    <h4 className="text-blue-400 font-semibold mb-2">Upcoming Streams</h4>
                    <div className="space-y-1">
                        {upcomingStreams.map((stream, idx) => (
                            <div key={idx} className={`text-xs ${stream.isLive ? 'text-red-300' : 'text-gray-300'}`}>
                                {stream.isLive && '🔴 '}{stream.day} - {stream.game}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Data */}
                <div className="bg-white/5 rounded p-3 border border-blue-500/20">
                    <h4 className="text-blue-400 font-semibold mb-2">Content Data</h4>
                    <div className="text-xs text-gray-300 space-y-1">
                        <div>Highlights: {highlights.length} videos</div>
                        <div>Social Links: {Object.keys(socialLinks).length} platforms</div>
                        <div>Features: {4} core features</div>
                    </div>
                </div>

                <div className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-700">
                    All data is managed through the DataContext and accessible via useAppData hook.
                </div>
            </div>
        </div>
    );
}