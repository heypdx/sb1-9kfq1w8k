import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '../ui/Card';

export const AdSchedule = () => {
  const schedules = [
    {
      id: 1,
      campaign: 'Spring Promotion',
      distribution: 'April 15, 2024',
      areas: ['Pearl District', 'Northwest Portland'],
      status: 'scheduled'
    },
    {
      id: 2,
      campaign: 'Summer Special',
      distribution: 'June 1, 2024',
      areas: ['Southeast Portland', 'Northeast Portland'],
      status: 'pending'
    }
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Distribution Schedule</h2>
        <Calendar className="h-5 w-5 text-primary" />
      </div>

      <div className="space-y-4">
        {schedules.map(schedule => (
          <div
            key={schedule.id}
            className="p-4 bg-dark-lighter rounded-lg border border-dark-lighter hover:border-primary/30 transition-all duration-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-white">{schedule.campaign}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-400">{schedule.distribution}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {schedule.areas.map((area, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <span className={`text-sm px-2 py-1 rounded-full ${
                schedule.status === 'scheduled'
                  ? 'bg-green-900/50 text-green-300'
                  : 'bg-yellow-900/50 text-yellow-300'
              }`}>
                {schedule.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};