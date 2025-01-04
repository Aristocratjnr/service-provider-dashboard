'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight, Clock, Plus } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Event {
  id: string
  title: string
  startTime: string
  endTime: string
  color: string
  participants: number
  column: number
  connected?: {
    direction: 'right' | 'down'
    color: string
  }
  avatar : [string]
}

const events: Event[] = [
  {
    id: '1',
    title: 'Shooting Stars',
    startTime: '09:00',
    endTime: '11:00',
    color: 'green',
    participants: 1,
    column: 2,
    avatar: ['/images/man.png'],
    connected: { direction: 'right', color: 'orange' },
  },
  {
    id: '2',
    title: 'The Amazing Hubble',
    startTime: '11:00',
    endTime: '12:00',
    color: 'orange',
    participants: 2,
    avatar: ['/images/lady.png'],
    column: 2,
    connected: { direction: 'down', color: 'orange' },
  },
  {
    id: '3',
    title: 'Choosing A Quality Conference Set',
    startTime: '11:00',
    endTime: '13:00',
    color: 'red',
    participants: 2,
    avatar: ['/images/woman.png'],
    column: 4,
    connected: { direction: 'right', color: 'yellow' },
  },
  {
    id: '4',
    title: 'Astronomy Binoculars A Great Alternative',
    startTime: '11:00',
    endTime: '13:00',
    color: 'yellow',
    avatar: ['/images/woman.png'],
    participants: 2,
    column: 5,
  },
  {
    id: '5',
    title: "The Universe Through A Child's Eyes",
    startTime: '11:00',
    endTime: '14:00',
    color: 'orange',
    avatar: ['/images/lady.png'],
    participants: 2,
    column: 7,
  },
  {
    id: '6',
    title: 'Radio Astronomy',
    startTime: '13:00',
    endTime: '16:00',
    color: 'purple',
    participants: 2,
    avatar: ['/images/lady.png'],
    column: 3,
    connected: { direction: 'right', color: 'purple' },
  },
  {
    id: '7',
    title: 'The Amazing Hubble',
    startTime: '14:00',
    endTime: '15:00',
    color: 'blue',
    participants: 3,
    avatar: ['/images/lady.png'],
    column: 6,
  },
  {
    id: '8',
    title: 'Astronomy Binoculars A Great Alternative',
    startTime: '15:00',
    endTime: '17:00',
    color: 'blue',
    participants: 2,
    avatar: ['/images/lady.png'],
    column: 4,
  },
  {
    id: '9',
    title: 'The Amazing Hubble',
    startTime: '17:00',
    endTime: '18:00',
    avatar: ['/images/woman.png'],
    color: 'purple',
    participants: 3,
    column: 2,
  },
]

const colorMap: { [key: string]: { bg: string; border: string; text: string; hover: string; shadow: string } } = {
  green: { 
    bg: 'bg-emerald-50', 
    border: 'border-l-4 border-emerald-500', 
    text: 'text-emerald-700',
    hover: 'hover:bg-emerald-100',
    shadow: 'shadow-emerald-100'
  },
  orange: { 
    bg: 'bg-orange-50', 
    border: 'border-l-4 border-orange-500', 
    text: 'text-orange-700',
    hover: 'hover:bg-orange-100',
    shadow: 'shadow-orange-100'
  },
  red: { 
    bg: 'bg-rose-50', 
    border: 'border-l-4 border-rose-500', 
    text: 'text-rose-700',
    hover: 'hover:bg-rose-100',
    shadow: 'shadow-rose-100'
  },
  yellow: { 
    bg: 'bg-amber-50', 
    border: 'border-l-4 border-amber-500', 
    text: 'text-amber-700',
    hover: 'hover:bg-amber-100',
    shadow: 'shadow-amber-100'
  },
  purple: { 
    bg: 'bg-purple-50', 
    border: 'border-l-4 border-purple-500', 
    text: 'text-purple-700',
    hover: 'hover:bg-purple-100',
    shadow: 'shadow-purple-100'
  },
  blue: { 
    bg: 'bg-sky-50', 
    border: 'border-l-4 border-sky-500', 
    text: 'text-sky-700',
    hover: 'hover:bg-sky-100',
    shadow: 'shadow-sky-100'
  }
}

export default function CalendarApp() {
  const [currentTime, setCurrentTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const getCurrentTimePosition = () => {
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    return ((hours - 9) * 120) + ((minutes / 60) * 120)
  }

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Calendar Controls */}
      <div className="border-b border-gray-200 px-6 py-4 sticky top-0 bg-white z-20 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white font-semibold text-gray-600 hover:bg-gray-50 rounded-full px-6 border shadow-sm transition-all duration-200 hover:shadow"
            >
              Today
            </Button>
            <div className="flex items-center justify-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-8 h-8 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:shadow"
              >
                <ChevronLeft className="h-4 w-4 text-gray-500" />
              </Button>
              <span className="text-sm font-semibold text-gray-600 hover:bg-gray-50 min-w-[90px] text-center rounded-full px-3 py-1 transition-colors">
                May 21 - 26, 2045
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-8 h-8 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:shadow"
              >
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
          <div className="inline-flex items-center rounded-[100px] border border-gray-200 bg-white p-1 shadow-sm">
            <Button variant="ghost" size="sm" className="text-gray-600 font-semibold hover:bg-gray-50 px-4 transition-all duration-200">Day</Button>
            <Button variant="ghost" size="sm" className="text-gray-900 font-semibold bg-blue-50 hover:bg-blue-100 px-4 transition-all duration-200">Week</Button>
            <Button variant="ghost" size="sm" className="text-gray-600 font-semibold hover:bg-gray-50 px-4 transition-all duration-200">Month</Button>
            <Button variant="ghost" size="sm" className="text-gray-600 font-semibold hover:bg-gray-50 px-4 transition-all duration-200">Year</Button>
          </div>
        </div>

        {/* Calendar Header */}
        <div className="grid grid-cols-8 gap-4">
          <div className="h-12 flex items-center justify-center">
            <Clock className="h-5 w-4 mr-20 text-gray-400" />
          </div>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
            <div key={day} className="text-sm py-2">
              <div className="text-gray-700 font-semibold flex items-center gap-2">
                {day}
                {index === 0 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                )}
              </div>
              <div className="text-gray-500 text-xs mt-1 font-medium">{12 + index}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-visible relative">
        <div className="grid grid-cols-[80px_1fr] gap-2" style={{ height: '1020px' }}>
          {/* Time Slots */}
          <div className="col-span-1 bg-white">
            {Array.from({ length: 18 }, (_, i) => (
              <div key={i} className="h-[120px] relative">
                <span className="absolute top-0 right-4 text-[11px] text-gray-500 font-medium tracking-wide">
                  {String(9 + i).padStart(2, '0')}:00
                </span>
              </div>
            ))}
          </div>

          {/* Calendar Cells */}
          <div className="grid grid-cols-7 col-span-1">
            {Array.from({ length: 7 }, (_, dayIndex) => (
              <div key={dayIndex} className="relative border-l border-gray-200">
                {Array.from({ length: 18 }, (_, hourIndex) => (
                  <div 
                    key={hourIndex} 
                    className={cn(
                      "h-[120px] w-full border-t border-gray-100",
                      hourIndex === 0 && "border-t-0"
                    )}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Events Layer */}
          <div className="absolute inset-0 col-start-2 col-span-7">
            {events.map((event) => {
              const eventStart = new Date(currentTime)
              eventStart.setHours(parseInt(event.startTime.split(':')[0]), parseInt(event.startTime.split(':')[1]), 0, 0)
              const eventEnd = new Date(currentTime)
              eventEnd.setHours(parseInt(event.endTime.split(':')[0]), parseInt(event.endTime.split(':')[1]), 0, 0)
              
              const startOffset = (eventStart.getHours() - 9) * 120 + (eventStart.getMinutes() / 60) * 120
              const duration = (Number(eventEnd) - Number(eventStart)) / (1000 * 60) * 2

              return (
                <div
                  key={event.id}
                  className={cn(
                    "absolute p-3 rounded-lg border-b transition-all duration-200",
                    "shadow-sm hover:shadow-md",
                    colorMap[event.color].bg,
                    colorMap[event.color].border,
                    colorMap[event.color].hover,
                    colorMap[event.color].shadow,
                    "cursor-pointer group"
                  )}
                  style={{
                    left: `${(event.column - 1) * (100 / 7)}%`,
                    top: `${startOffset}px`,
                    width: `calc(${100 / 7}% - 8px)`,
                    height: `${duration}px`,
                    margin: '0 4px'
                  }}
                >
                  <div className="flex gap-1 mb-1.5 border-b border-gray-200/50 pb-1.5">
                    <span className={cn(
                      "text-[11px] font-semibold px-2.5 py-1 rounded-full",
                      colorMap[event.color].bg,
                      colorMap[event.color].text
                    )}>
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-gray-900">
                    {event.title}
                  </div>
                  <div className="flex -space-x-2 mt-2">
                    {Array.from({ length: event.participants }).map((_, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-white ring-2 ring-white">
                        <AvatarImage src={event.avatar[i]} alt={`Participant ${i + 1}`} />
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                          {String.fromCharCode(65 + i)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              )
            })}
    
            {/* Connection Lines */}
            {events
              .filter(event => event.connected)
              .map(event => {
                const x = (event.column - 1) * 14.28
                const y = ((parseInt(event.startTime.split(':')[0]) - 9) * 120) + ((parseInt(event.startTime.split(':')[1]) / 60) * 120)
                return event.connected?.direction === 'right' ? (
                  <div
                    key={`line-${event.id}`}
                    className={cn(
                      "absolute h-[2px] transition-all duration-200",
                      colorMap[event.connected.color].text
                    )}
                    style={{
                      left: `${x + 14.28}%`,
                      top: `${y + 25}px`,
                      width: '12.28%'
                    }}
                  />
                ) : (
                  <div
                    key={`line-${event.id}`}
                    className={cn(
                      "absolute w-[2px] transition-all duration-200",
                      colorMap[event.connected?.color || ''].text
                    )}
                    style={{
                      left: `${x + 7.14}%`,
                      top: `${y}px`,
                      height: '100px'
                    }}
                  />
                )
              })}

            {/* Current Time Indicator */}
            <div 
              className="absolute left-0 right-0 flex items-center transition-all duration-1000"
              style={{ top: `${getCurrentTimePosition()}px` }}
            >
              <div className="w-[10.5%] flex justify-end pr-2">
                <div className="bg-red-500 text-white text-[10px] font-semibold rounded-full px-2 py-0.5 shadow-sm">
                  {currentTime.getHours().toString().padStart(2, '0')}:
                  {currentTime.getMinutes().toString().padStart(2, '0')}
                </div>
              </div>
              <div className="flex-1 h-0.5 bg-red-500 shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

