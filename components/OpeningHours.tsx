'use client';

import { data } from '@/lib/data';

export default function OpeningHours() {
  // Aktuellen Wochentag ermitteln (0 = Sonntag, 1 = Montag, ..., 6 = Samstag)
  const today = new Date().getDay();
  
  // Mapping: JavaScript getDay() -> unsere Datenstruktur
  const dayMapping: { [key: number]: keyof typeof data.openingHours } = {
    1: 'monday',    // Montag
    2: 'tuesday',   // Dienstag
    3: 'wednesday', // Mittwoch
    4: 'thursday',  // Donnerstag
    5: 'friday',    // Freitag
    6: 'saturday',  // Samstag
    0: 'sunday',    // Sonntag
  };

  const currentDayKey = dayMapping[today];

  // Parse die Labels, um Wochentag und Uhrzeit zu trennen
  const parseDayLabel = (label: string) => {
    const match = label.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      return { day: match[1], time: match[2] };
    }
    return { day: label, time: '' };
  };

  const days = [
    { key: 'monday' as const, ...parseDayLabel(data.openingHours.monday) },
    { key: 'tuesday' as const, ...parseDayLabel(data.openingHours.tuesday) },
    { key: 'wednesday' as const, ...parseDayLabel(data.openingHours.wednesday) },
    { key: 'thursday' as const, ...parseDayLabel(data.openingHours.thursday) },
    { key: 'friday' as const, ...parseDayLabel(data.openingHours.friday) },
    { key: 'saturday' as const, ...parseDayLabel(data.openingHours.saturday) },
    { key: 'sunday' as const, ...parseDayLabel(data.openingHours.sunday) },
  ];

  return (
    <div className="space-y-2">
      {days.map((day) => {
        const isCurrentDay = day.key === currentDayKey;
        return (
          <p
            key={day.key}
            className={`grid grid-cols-[120px_1fr] gap-2 ${isCurrentDay ? 'text-accent font-semibold' : ''}`}
          >
            <span>{day.day}:</span>
            <span>{day.time}</span>
          </p>
        );
      })}
    </div>
  );
}
