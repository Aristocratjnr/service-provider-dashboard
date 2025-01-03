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
  row: number
  height: number
  connected?: {
    direction: 'right' | 'down'
    color: string
  }
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
    row: 0,
    height: 2,
    connected: { direction: 'right', color: 'orange' },
  },
  {
    id: '2',
    title: 'The Amazing Hubble',
    startTime: '11:00',
    endTime: '12:00',
    color: 'orange',
    participants: 2,
    column: 2,
    row: 2,
    height: 2,
    connected: { direction: 'down', color: 'orange' },
  },
  {
    id: '3',
    title: 'Choosing A Quality Conference Set',
    startTime: '11:00',
    endTime: '13:00',
    color: 'red',
    participants: 2,
    column: 4,
    row: 2,
    height: 3,
    connected: { direction: 'right', color: 'yellow' },
  },
  {
    id: '4',
    title: 'Astronomy Binoculars A Great Alternative',
    startTime: '11:00',
    endTime: '13:00',
    color: 'yellow',
    participants: 2,
    column: 5,
    row: 2,
    height: 2.5,
  },
  {
    id: '5',
    title: "The Universe Through A Child's Eyes",
    startTime: '11:00',
    endTime: '14:00',
    color: 'orange',
    participants: 2,
    column: 7,
    row: 2,
    height: 3,
  },
  {
    id: '6',
    title: 'Radio Astronomy',
    startTime: '13:00',
    endTime: '16:00',
    color: 'purple',
    participants: 2,
    column: 3,
    row: 4,
    height: 3,
    connected: { direction: 'right', color: 'purple' },
  },
  {
    id: '7',
    title: 'The Amazing Hubble',
    startTime: '14:00',
    endTime: '15:00',
    color: 'blue',
    participants: 2,
    column: 6,
    row: 5,
    height: 3,
  },
  {
    id: '8',
    title: 'Astronomy Binoculars A Great Alternative',
    startTime: '15:00',
    endTime: '17:00',
    color: 'blue',
    participants: 2,
    column: 4,
    row: 6,
    height: 2.5,
  },

  {
    id: '9',
    title: 'The Amazing Hubble',
    startTime: '17:00',
    endTime: '18:00',
    color: 'purple',
    participants: 3,
    column: 2,
    row: 8,
    height: 4,
  },


]

const colorMap: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
  green: { 
    bg: 'bg-[#E8F5E9]', 
    border: 'border-l-4 border-[#4CAF50]', 
    text: 'text-[#2E7D32]',
    hover: 'hover:bg-[#C8E6C9]'
  },
  orange: { 
    bg: 'bg-[#FFF3E0]', 
    border: 'border-l-4 border-[#FF9800]', 
    text: 'text-[#E65100]',
    hover: 'hover:bg-[#FFE0B2]'
  },
  red: { 
    bg: 'bg-[#FFEBEE]', 
    border: 'border-l-4 border-[#F44336]', 
    text: 'text-[#C62828]',
    hover: 'hover:bg-[#FFCDD2]'
  },
  yellow: { 
    bg: 'bg-[#FFFDE7]', 
    border: 'border-l-4 border-[#FDD835]', 
    text: 'text-[#F57F17]',
    hover: 'hover:bg-[#FFF9C4]'
  },
  purple: { 
    bg: 'bg-[#F3E5F5]', 
    border: 'border-l-4 border-[#9C27B0]', 
    text: 'text-[#6A1B9A]',
    hover: 'hover:bg-[#E1BEE7]'
  },
  blue: { 
    bg: 'bg-[#E3F2FD]', 
    border: 'border-l-4 border-[#2196F3]', 
    text: 'text-[#1565C0]',
    hover: 'hover:bg-[#BBDEFB]'
  }
}

export default function CalendarApp() {
  const [currentTime, setCurrentTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const getCurrentTimePosition = () => {
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    return ((hours - 9) * 100) + ((minutes / 60) * 100)
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Calendar Controls */}
      <div className="border-b border-gray-200 px-6 py-6 sticky top-0 bg-white z-20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="bg-transparent font-bold text-gray-500 hover:bg-gray-100 rounded-full">
              Today
            </Button>
                  <div className="flex items-center justify-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full w-8 h-8 bg-white border border-gray-100 shadow-sm hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4 text-gray-400" />
            </Button>
            <span className="text-sm font-bold text-gray-500 hover:bg-gray-100  min-w-[90px]  text-center">
              May 21 - 26, 2045
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full w-8 h-8 bg-white border border-gray-100 shadow-sm hover:bg-gray-50"
            >
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
          </div>
          <div className="inline-flex items-center rounded-[100px] border border-b-2 border-[#E5E7EB] bg-white p-1">
            <Button variant="ghost" size="sm" className="text-gray-500 font-bold  hover:bg-gray-50 px-4">Day</Button>
            <Button variant="ghost" size="sm" className="text-gray-500 font-extrabold  bg-blue-50 hover:bg-blue-100 px-4">Week</Button>
            <Button variant="ghost" size="sm" className="text-gray-500 font-bold  hover:bg-gray-50 px-4">Month</Button>
            <Button variant="ghost" size="sm" className="text-gray-500 font-bold  hover:bg-gray-50 px-4">Year</Button>
          </div>
        </div>

        {/* Calendar Header */}
        <div className="grid grid-cols-8 gap-4">
          <div className="h-12 flex items-center justify-center">
            <Clock className="h-5 w-4 mr-20 text-gray-400" />
          </div>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
            <div key={day} className="text-sm py-2">
              <div className=" text-gray-500 font-semi-bold flex items-center gap-2">
                {day}
                {index === 0 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 animate-pulse"></div>
                )}
              </div>
              <div className="text-gray-500 text-xs mt-0.5">{12 + index}</div>
            </div>
          ))}
        </div>
      </div>

     {/* Calendar Grid */}
<div className="flex-1 overflow-visible relative">
  <div className="grid grid-cols-[80px_1fr] gap-0" style={{ height: '450px' }}>
    {/* Time Slots */}
    <div className="col-span-1 bg-white">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="h-[80px] relative">
          <span className="absolute top-0 right-4 text-[11px] text-gray-500 font-medium border-b border-gray-200">
            {String(9 + i).padStart(2, '0')}:00
          </span>
        </div>
      ))}
    </div>

    {/* Calendar Cells */}
    <div className="grid grid-cols-7 col-span-1">
      {Array.from({ length: 6 }, (_, dayIndex) => (
        <div key={dayIndex} className="relative border-l border-gray-200">
          {Array.from({ length: 8 }, (_, hourIndex) => (
            <div 
              key={hourIndex} 
              className={cn(
                "h-[50px] border-t border-gray-100",
                hourIndex === 0 && "border-t-0"
              )}
            />
          ))}
        </div>
      ))}
    </div>

    {/* Events Layer */}
    <div className="absolute inset-0 col-start-0 col-span-7">
      {events.map((event) => (
        <div
          key={event.id}
          className={cn(
            "absolute p-3 rounded-lg transition-colors duration-200 border-b-2",
            colorMap[event.color].bg,
            colorMap[event.color].border,
            colorMap[event.color].hover,
            "cursor-pointer group"
          )}
          style={{
            left: `${(event.column - 1) * (100 / 7)}%`,
            top: `${event.row * 50}px`,
            width: `calc(${100 / 7}% - 8px)`,
            height: `${event.height * 50}px`,
            margin: '0 4px'
          }}
        >
          <div className="flex gap-1 mb-1.5 border-b border-gray-200 pb-1.5">
            <span className={cn(
              "text-[11px] font-medium px-2 py-0.5 rounded-full",
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
                <AvatarImage src="/images/woman.png" />
                <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                  {String.fromCharCode(65 + i)}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      ))}
    
            {/* Connection Lines */}
                {events
              .filter(event => event.connected)
              .map(event => {
                const x = (event.column - 1) * 14.28
                const y = event.row * 50
                return event.connected?.direction === 'right' ? (
                  <div
                    key={`line-${event.id}`}
                    className={`absolute h-[2px] ${colorMap[event.connected.color].text}`}
                    style={{
                      left: `${x + 14.28}%`,
                      top: `${y + 25}px`,
                      width: '14.28%'
                    }}
                  />
                ) : (
                  <div
                    key={`line-${event.id}`}
                    className={`absolute w-[2px] ${colorMap[event.connected?.color || ''].text}`}
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
              <div className="w-[12.5%] flex justify-end pr-2">
                <div className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow-sm">
                  {currentTime.getHours().toString().padStart(2, '0')}:
                  {currentTime.getMinutes().toString().padStart(2, '0')}
                </div>
              </div>
              <div className="flex-1 h-0.5 bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}