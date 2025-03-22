import { Card } from '@/components/ui/card'
import React from 'react'
import {
  FaUsers,
  FaCalendarAlt,
  FaStethoscope,
  FaRegCalendarAlt
} from 'react-icons/fa'

interface StatisticCardProps {
  title: string
  value: number | string
  icon: React.ReactNode
}

function SingleStatisticCard({ title, value, icon }: StatisticCardProps) {
  return (
    <Card
      className={`mt-6 flex items-center gap-5 border-none p-4 shadow-none`}
    >
      <div className='bg-primary/25 flex size-12 items-center justify-center rounded-md'>
        <div className='text-primary text-2xl'>{icon}</div>
      </div>
      <div>
        <h3 className='text-2xl font-semibold'>{value}</h3>
        <p className='text-sm text-slate-500'>{title}</p>
      </div>
    </Card>
  )
}

function StatisticsCards() {
  const statistics = [
    {
      title: 'Total Patients',
      value: 45,
      icon: <FaUsers />
    },
    {
      title: 'Most Common Diagnosis',
      value: 'Diabetes',
      icon: <FaStethoscope />
    },
    {
      title: 'Upcoming Appointments',
      value: 50,
      icon: <FaCalendarAlt />
    }
  ]
  return (
    <div className='poppins mt-5 grid grid-cols-1 gap-10 px-5 md:grid-cols-3'>
      {statistics.map((stat, index) => (
        <SingleStatisticCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  )
}

export default StatisticsCards
