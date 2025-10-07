import { useData } from '../context/DataContext';

export const useAppData = () => {
    const {
        schedule,
        setSchedule,
        nextStream,
        isAnyStreamLive,
        updateStreamStatus,
        streamStats,
        socialLinks,
        highlights,
        features,
        getCurrentLiveStream,
        getNextScheduledStream
    } = useData();

    const setStreamLive = (day: string, isLive: boolean = true) => {
        const updatedSchedule = schedule.map(item => ({
            ...item,
            isLive: item.day === day ? isLive : false
        }));
        setSchedule(updatedSchedule);
        updateStreamStatus();
    };

    const updateScheduleItem = (day: string, updates: Partial<{
        time: string;
        game: string;
        status: string;
    }>) => {
        const updatedSchedule = schedule.map(item =>
            item.day === day ? { ...item, ...updates } : item
        );
        setSchedule(updatedSchedule);
    };

    const getTodaysStream = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const currentDayName = daysOfWeek[today.getDay()];
        return schedule.find(item => item.day === currentDayName);
    };

    const getStreamsByGame = (game: string) => {
        return schedule.filter(item =>
            item.game.toLowerCase().includes(game.toLowerCase()) && item.time !== 'OFF'
        );
    };

    const getUpcomingStreams = (count: number = 3) => {
        const currentLive = getCurrentLiveStream();
        if (currentLive) {
            return [currentLive, ...schedule.filter(s => !s.isLive && s.time !== 'OFF').slice(0, count - 1)];
        }
        return schedule.filter(s => s.time !== 'OFF').slice(0, count);
    };

    const getStreamStatusText = () => {
        if (isAnyStreamLive) {
            const liveStream = getCurrentLiveStream();
            return `Live: ${liveStream?.game || 'Streaming'}`;
        }
        return `Next: ${nextStream}`;
    };

    return {
        // Data
        schedule,
        streamStats,
        socialLinks,
        highlights,
        features,
        nextStream,
        isAnyStreamLive,

        // Stream management
        setStreamLive,
        updateScheduleItem,
        updateStreamStatus,

        // Utility functions
        getCurrentLiveStream,
        getNextScheduledStream,
        getTodaysStream,
        getStreamsByGame,
        getUpcomingStreams,
        getStreamStatusText
    };
};