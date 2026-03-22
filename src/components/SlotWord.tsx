'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface SlotWordProps {
  words: string[]
  final: string
  startDelay?: number
  beat?: number
  wordDuration?: number
  finalDuration?: number
}

export function SlotWord({
  words,
  final,
  startDelay = 1000,
  beat = 850,
  wordDuration = 0.12,
  finalDuration = 1,
}: SlotWordProps) {
  const [word, setWord] = useState(words[0])
  const skipAnimation = useRef(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setWord(final)
      return
    }

    // Randomize the starting word on the client without animating the swap
    skipAnimation.current = true
    setWord(words[Math.floor(Math.random() * words.length)])
    requestAnimationFrame(() => {
      skipAnimation.current = false
    })

    // Animate 2 more random words then land on final — consistent beat, slower final roll
    const pool = [...words].sort(() => Math.random() - 0.5).slice(0, 2)
    const START_DELAY = startDelay
    const BEAT = beat

    const timers: ReturnType<typeof setTimeout>[] = []
    pool.forEach((next, i) => {
      timers.push(setTimeout(() => setWord(next), START_DELAY + BEAT * i))
    })
    timers.push(setTimeout(() => setWord(final), START_DELAY + BEAT * pool.length))

    return () => timers.forEach(clearTimeout)
  }, [words, final, shouldReduceMotion])

  return (
    <span className="relative inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
      {/* Invisible placeholder keeps final word width reserved at all times */}
      <span aria-hidden className="invisible whitespace-nowrap">
        {final}
      </span>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={word}
          className="absolute left-0 whitespace-nowrap text-red-700"
          initial={skipAnimation.current ? false : { y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{ duration: word === final ? finalDuration : wordDuration, ease: 'easeInOut' }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
