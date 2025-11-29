'use client';

import { GHL_CONFIG } from '@/lib/ghl';

interface GHLCalendarProps {
  /** Override the default calendar URL */
  calendarUrl?: string;
  /** Calendar height */
  height?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * GHL Calendar Embed Component
 *
 * Usage:
 * <GHLCalendar />
 *
 * Or with custom calendar URL:
 * <GHLCalendar calendarUrl="https://api.leadconnectorhq.com/widget/booking/xyz123" />
 */
export default function GHLCalendar({
  calendarUrl,
  height = '700px',
  className = '',
}: GHLCalendarProps) {
  const url = calendarUrl || GHL_CONFIG.calendarUrl;

  // Don't render if no calendar URL is configured
  if (!url) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-500">Calendar not configured. Add NEXT_PUBLIC_GHL_CALENDAR_URL to your .env.local file.</p>
      </div>
    );
  }

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <iframe
        src={url}
        style={{ width: '100%', height, border: 'none' }}
        scrolling="no"
        title="Schedule Appointment"
      />
    </div>
  );
}
