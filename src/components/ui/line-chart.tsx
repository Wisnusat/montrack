import * as React from "react"
import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface LineChartProps {
  data: Array<{
    date: number
    value: number
  }>
  pathColor?: string
  className?: string
}

export function LineChart({ data, pathColor = "#000000", className }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <RechartsLineChart data={data}>
        <XAxis 
          dataKey="date"
          stroke="#666666"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#666666"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={pathColor}
          strokeWidth={2}
          dot={false}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

