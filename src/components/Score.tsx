import { MousePointerClick, Clock, RotateCcw, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { ANIMATIONS } from '@/constants'

type ScoreProps = {
  moves: number
  time: string
  onRestart: () => void
}

type ScoreItemProps = {
  icon: LucideIcon
  label: string
  value: string | number
  color: string
}

const SCORE_ITEMS = [
  {
    icon: MousePointerClick,
    label: 'Moves',
    color: 'text-yellow-400',
  },
  {
    icon: Clock,
    label: 'Time',
    color: 'text-blue-400',
  },
] as const

const ScoreItem = ({ icon: Icon, label, value, color }: ScoreItemProps) => (
  <div className="flex w-[130px] items-center justify-center gap-2 text-lg text-white">
    <Icon className={cn('size-5', color)} />
    {label}:<span className="min-w-[16px]">{value}</span>
  </div>
)

export function Score({ moves, time, onRestart }: ScoreProps) {
  return (
    <motion.div
      {...ANIMATIONS.fadeInDown}
      className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-blue-100 p-4 sm:w-auto sm:flex-row sm:gap-8"
    >
      {SCORE_ITEMS.map(({ icon, label, color }) => (
        <ScoreItem key={label} icon={icon} label={label} color={color} value={label === 'Time' ? time : moves} />
      ))}

      <button onClick={onRestart} className="group hover:text-pink flex items-center gap-2 px-2 text-base text-white">
        <RotateCcw className="size-4 transition-transform duration-500 group-hover:-rotate-180" />
        Restart
      </button>
    </motion.div>
  )
}

export default Score
