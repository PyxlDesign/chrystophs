import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ScheduleItem {
    day: string;
    time: string;
    game: string;
    status: string;
    isLive: boolean;
}

export interface StreamStats {
    followers: number;
    totalStreams: number;
    hoursStreamed: number;
    avgViewers: number;
}

export interface SocialLinks {
    twitch: string;
    youtube: string;
    twitter: string;
    instagram: string;
    discord?: string;
}

export interface Highlight {
    id: string;
    title: string;
    views: string;
    duration: string;
    thumbnail: string;
    url: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface DataContextType {
    // Schedule data
    schedule: ScheduleItem[];
    setSchedule: (schedule: ScheduleItem[]) => void;
    nextStream: string;
    isAnyStreamLive: boolean;
    updateStreamStatus: () => void;

    // Statistics
    streamStats: StreamStats;

    // Social links
    socialLinks: SocialLinks;

    // Content data
    highlights: Highlight[];
    features: Feature[];

    // Utility functions
    getCurrentLiveStream: () => ScheduleItem | undefined;
    getNextScheduledStream: () => ScheduleItem | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([
        { day: 'Monday', time: '8:00 PM - 11:00 PM EST', game: 'Arc Raiders', status: 'Extraction Ops', isLive: false },
        { day: 'Tuesday', time: '8:00 PM - 11:00 PM EST', game: 'Coding', status: 'Development', isLive: false },
        { day: 'Wednesday', time: '8:00 PM - 11:00 PM EST', game: 'Arc Raiders', status: 'High Stakes Raids', isLive: false },
        { day: 'Thursday', time: 'OFF', game: 'Rest & Restock', status: 'Maintenance', isLive: false },
        { day: 'Friday', time: '8:00 PM - 1:00 AM EST', game: 'Coding', status: 'Development', isLive: false },
        { day: 'Saturday', time: '8:00 PM - 1:00 AM EST', game: 'Coding', status: 'Development', isLive: false },
        { day: 'Sunday', time: '8:00 PM - 11:00 PM EST', game: 'Arc Raiders', status: 'Loot Runs', isLive: false }
    ]);

    const [nextStream, setNextStream] = useState('Monday, 7:00 PM EST');
    const [isAnyStreamLive, setIsAnyStreamLive] = useState(false);

    const streamStats: StreamStats = {
        followers: 64,     // Will show as 64
        totalStreams: 340,    // Will show as 340+
        hoursStreamed: 240,  // Will show as 2.4K+
        avgViewers: 10        // Will show as 85
    };

    const socialLinks: SocialLinks = {
        twitch: 'https://twitch.tv/chrystophs',
        youtube: 'https://youtube.com/@chrystophs',
        twitter: 'https://twitter.com/chrystophs',
        instagram: 'https://instagram.com/chrystophs',
        discord: 'https://discord.gg/chrystophs'
    };

    const highlights: Highlight[] = [
        {
            id: '1',
            title: 'Legendary Extract Under Fire',
            views: '125K',
            duration: '12:45',
            thumbnail: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
            url: '#'
        },
        {
            id: '2',
            title: 'Solo Squad Wipe Clutch',
            views: '890',
            duration: '8:32',
            thumbnail: 'https://images.pexels.com/photos/7915442/pexels-photo-7915442.jpeg?auto=compress&cs=tinysrgb&w=800',
            url: '#'
        },
        {
            id: '3',
            title: 'Max Loot Speedrun Record',
            views: '2.5K',
            duration: '15:20',
            thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
            url: '#'
        },
        {
            id: '4',
            title: 'Tournament Finals Victory',
            views: '203K',
            duration: '24:15',
            thumbnail: 'https://images.pexels.com/photos/7862604/pexels-photo-7862604.jpeg?auto=compress&cs=tinysrgb&w=800',
            url: '#'
        }
    ];

    const features: Feature[] = [
        {
            icon: 'Target',
            title: 'Precision Gameplay',
            description: 'Tactical decision-making and calculated risks in every raid'
        },
        {
            icon: 'Zap',
            title: 'High Energy',
            description: 'Non-stop action with engaging commentary and community interaction'
        },
        {
            icon: 'Trophy',
            title: 'Victory Focused',
            description: 'Consistent wins, legendary loot, and clutch extractions'
        },
        {
            icon: 'Shield',
            title: 'Community First',
            description: 'Building a crew of raiders who support and elevate each other'
        }
    ];

    const parseTime = (timeStr: string) => {
        const [time, period] = timeStr.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        let hour24 = hour;

        if (period === 'PM' && hour !== 12) hour24 += 12;
        if (period === 'AM' && hour === 12) hour24 = 0;

        return hour24 * 60 + minute;
    };

    const updateStreamStatus = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const currentDayName = daysOfWeek[now.getDay()];
        const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();

        // Reset all streams to not live
        const updatedSchedule = schedule.map(item => ({ ...item, isLive: false }));
        let hasLiveStream = false;

        // Find today's schedule and check if stream is live
        const todaySchedule = updatedSchedule.find(item => item.day === currentDayName);

        if (todaySchedule && todaySchedule.time !== 'OFF') {
            const timeRange = todaySchedule.time.split(' - ');
            if (timeRange.length === 2) {
                const [startTimeStr, endTimeStr] = timeRange;
                const startTime = parseTime(startTimeStr);
                const endTime = parseTime(endTimeStr);

                // Handle overnight streams (e.g., 11 PM - 1 AM)
                if (endTime < startTime) {
                    // Stream goes past midnight
                    if (currentTimeInMinutes >= startTime || currentTimeInMinutes <= endTime) {
                        const scheduleIndex = updatedSchedule.findIndex(item => item.day === currentDayName);
                        updatedSchedule[scheduleIndex].isLive = true;
                        hasLiveStream = true;
                    }
                } else {
                    // Normal stream within the same day
                    if (currentTimeInMinutes >= startTime && currentTimeInMinutes <= endTime) {
                        const scheduleIndex = updatedSchedule.findIndex(item => item.day === currentDayName);
                        updatedSchedule[scheduleIndex].isLive = true;
                        hasLiveStream = true;
                    }
                }
            }
        }

        setIsAnyStreamLive(hasLiveStream);

        // Find the next stream
        if (hasLiveStream) {
            setNextStream('🔴 LIVE NOW');
        } else {
            // Find next scheduled stream
            let nextStreamFound = false;
            let daysAhead = 1;

            while (!nextStreamFound && daysAhead <= 7) {
                const nextDayIndex = (now.getDay() + daysAhead) % 7;
                const nextDayName = daysOfWeek[nextDayIndex];
                const nextDaySchedule = updatedSchedule.find(item => item.day === nextDayName);

                if (nextDaySchedule && nextDaySchedule.time !== 'OFF') {
                    const startTime = nextDaySchedule.time.split(' - ')[0];
                    setNextStream(`${nextDayName}, ${startTime}`);
                    nextStreamFound = true;
                }
                daysAhead++;
            }
        }

        // Reorder schedule to show today's or next stream first if live
        if (hasLiveStream) {
            const liveStreamIndex = updatedSchedule.findIndex(item => item.isLive);
            const reorderedSchedule = [
                updatedSchedule[liveStreamIndex],
                ...updatedSchedule.slice(0, liveStreamIndex),
                ...updatedSchedule.slice(liveStreamIndex + 1)
            ];
            setSchedule(reorderedSchedule);
        } else {
            const currentDayIndex = updatedSchedule.findIndex(item => item.day === currentDayName);
            const reorderedSchedule = [
                ...updatedSchedule.slice(currentDayIndex),
                ...updatedSchedule.slice(0, currentDayIndex)
            ];
            setSchedule(reorderedSchedule);
        }
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
        return undefined;
    };

    useEffect(() => {
        updateStreamStatus();
        // Update every minute to check for live status changes
        const interval = setInterval(updateStreamStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const value: DataContextType = {
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
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};