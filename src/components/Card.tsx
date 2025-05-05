import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

const CARD_STYLE = {
  base: 'absolute flex size-full items-center justify-center rounded-xl border-2 backface-hidden',
  back: 'bg-pink border-white/20',
  front: 'rotate-y-180 text-2xl xs:text-3xl sm:text-4xl border-purple-200 bg-white',
}

type CardProps = {
  emoji: string
  isFlipped: boolean
  isMatched: boolean
  onClick: () => void
}

function Card({ emoji, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <div className="xs:size-20 relative size-16 cursor-pointer sm:size-24" onClick={onClick}>
      <div className={cn('size-full transition-transform duration-500 transform-3d', isFlipped && 'rotate-y-180')}>
        <div className={cn(CARD_STYLE.base, CARD_STYLE.back)}>
          <Sparkles className="size-6 animate-pulse text-white sm:size-8" />
        </div>

        <div className={cn(CARD_STYLE.base, CARD_STYLE.front, isMatched && 'bg-gray-300')}>{emoji}</div>
      </div>
    </div>
  )
}

export default Card
