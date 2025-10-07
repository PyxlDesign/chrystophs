# Chrystophs Streaming Schedule with Live Indicators

## Overview

This application now features a centralized data management system with live stream indicators and real-time updates.

## Features Added

### 1. Data Context (`src/context/DataContext.tsx`)

- Centralized data management for all schedule information
- Real-time stream status tracking
- Automatic live stream detection based on current time
- Stream statistics management
- Social links management

### 2. Live Stream Indicators

- **Visual Indicators**: Red color scheme when a stream is live
- **Animated Elements**: Pulsing animations for live streams
- **Live Badge**: "LIVE" indicator with radio icon
- **Real-time Updates**: Checks every minute for live status changes
- **Next Stream Display**: Shows "🔴 LIVE NOW" when streaming

### 3. Admin Panel (`src/components/AdminPanel.tsx`)

- Toggle streams live/offline for testing
- Quick access via settings button (bottom-right corner)
- Real-time preview of changes
- Manual refresh functionality

### 4. Schedule Management Hook (`src/hooks/useScheduleManagement.ts`)

Provides easy-to-use functions for:

- Setting streams live/offline
- Updating schedule items
- Getting current live stream
- Finding next scheduled stream

## Usage

### Using the Data Context

```tsx
import { useData } from "../context/DataContext";

function MyComponent() {
  const { schedule, nextStream, isAnyStreamLive, streamStats, socialLinks } =
    useData();

  // Your component logic here
}
```

### Using the Schedule Management Hook

```tsx
import { useScheduleManagement } from "../hooks/useScheduleManagement";

function MyComponent() {
  const { setStreamLive, updateScheduleItem, getCurrentLiveStream } =
    useScheduleManagement();

  // Set Monday stream as live
  setStreamLive("Monday", true);

  // Update a schedule item
  updateScheduleItem("Tuesday", {
    game: "New Game",
    status: "New Status",
  });
}
```

### Manually Triggering Live Status

The admin panel allows you to manually set any stream as live for testing purposes. Click the settings icon in the bottom-right corner to access it.

## Live Detection Logic

The system automatically detects if a stream should be live based on:

1. Current day of the week
2. Current time
3. Scheduled stream times
4. Handles overnight streams (e.g., 11 PM - 1 AM)

## Data Structure

### Schedule Item

```typescript
interface ScheduleItem {
  day: string; // Day of the week
  time: string; // Time range (e.g., "7:00 PM - 11:00 PM EST")
  game: string; // Game or activity name
  status: string; // Stream status/description
  isLive: boolean; // Current live status
}
```

### Stream Stats

```typescript
interface StreamStats {
  followers: number; // Total followers
  totalStreams: number; // Total number of streams
  hoursStreamed: number; // Total hours streamed
  avgViewers: number; // Average viewers per stream
}
```

## Customization

### Updating Schedule Data

Edit the initial schedule in `src/context/DataContext.tsx`:

```typescript
const [schedule, setSchedule] = useState<ScheduleItem[]>([
  {
    day: "Monday",
    time: "7:00 PM - 11:00 PM EST",
    game: "Your Game",
    status: "Your Status",
    isLive: false,
  },
  // ... more schedule items
]);
```

### Updating Stream Stats

Edit the streamStats object in `src/context/DataContext.tsx`:

```typescript
const streamStats: StreamStats = {
  followers: 12500,
  totalStreams: 340,
  hoursStreamed: 1250,
  avgViewers: 85,
};
```

### Updating Social Links

Edit the socialLinks object in `src/context/DataContext.tsx`:

```typescript
const socialLinks: SocialLinks = {
  twitch: "https://twitch.tv/yourusername",
  youtube: "https://youtube.com/@yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  discord: "https://discord.gg/yourusername",
};
```

## Testing Live Functionality

1. Open the application in your browser
2. Click the settings icon (⚙️) in the bottom-right corner
3. Use the admin panel to toggle any stream as "LIVE"
4. Observe the visual changes:
   - Schedule card turns red with pulsing animation
   - "LIVE" badge appears
   - Next stream indicator shows "🔴 LIVE NOW"
   - Stats update in real-time

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will automatically update the live status every minute, but you can use the admin panel for immediate testing and demonstration purposes.
