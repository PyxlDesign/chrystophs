import { useData } from '../context/DataContext';

export const useScheduleManagement = () => {
    const { schedule, setSchedule, updateStreamStatus } = useData();

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

    const getCurrentLiveStream = () => {
        return schedule.find(item => item.isLive);
    };

    const getNextScheduledStream = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const currentDayIndex = today.getDay();

        for (let i = 1; i <= 7; i++) {
            const nextDayIndex = (currentDayIndex + i) % 7;
            const nextDayName = daysOfWeek[nextDayIndex];
            const nextStream = schedule.find(item => item.day === nextDayName && item.time !== 'OFF');
            if (nextStream) {
                return nextStream;
            }
        }
        return null;
    };

    return {
        schedule,
        setStreamLive,
        updateScheduleItem,
        getCurrentLiveStream,
        getNextScheduledStream,
        updateStreamStatus
    };
};