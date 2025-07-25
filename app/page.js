'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import decorations from './decorations.module.css'

const prizes = [
  {
    name: 'はち歯科オリジナル歯ブラシ',
    image: '/images/haburashi.png',
    weight: 100,
  },
]

function getWeightedPrize(prizes) {
  const totalWeight = prizes.reduce((sum, prize) => sum + prize.weight, 0)
  const rand = Math.random() * totalWeight
  let sum = 0
  for (const prize of prizes) {
    sum += prize.weight
    if (rand <= sum) return prize
  }
  return prizes[0]
}

export default function Home() {
  const [isShaking, setIsShaking] = useState(false)
  const [selectedPrize, setSelectedPrize] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleDraw = () => {
    setIsShaking(true)
    setSelectedPrize(null)
    setShowResult(false)
    setTimeout(() => {
      const prize = getWeightedPrize(prizes)
      setSelectedPrize(prize)
      setIsShaking(false)
      setTimeout(() => {
        setShowResult(true)
      }, 500)
    }, 1500)
  }

  const handleBackToKuji = () => {
    setShowResult(false)
    setSelectedPrize(null)
  }

  // 結果画面
  if (showResult && selectedPrize) {
    return (
      <div className={styles.resultContainer}>
        <div className={decorations.geometricElements}>
          <div className={decorations.triangle1}></div>
          <div className={decorations.triangle2}></div>
          <div className={decorations.circle1}></div>
          <div className={decorations.dotPattern2}></div>
          <div className={decorations.stripePattern}></div>
          <div className={decorations.pinkElement1}></div>
          <div className={decorations.greenElement}></div>
        </div>
        
        <div className={styles.resultContent}>
          <h1 className={styles.congratulations}>🎉 おめでとうございます！ 🎉</h1>
          <div className={styles.prizeImageContainer}>
            <Image
              src={selectedPrize.image}
              alt={selectedPrize.name}
              width={600}
              height={400}
              className={selectedPrize.name.includes('はちクラブ') ? styles.prizeImageSmall : styles.prizeImage}
            />
          </div>
          <p className={styles.prizeTitle}>{selectedPrize.name}</p>
          <button className={styles.backButton} onClick={handleBackToKuji}>
            もう一度くじを引く
          </button>
        </div>
      </div>
    )
  }

  // くじ引き画面
  return (
    <div className={styles.container}>
      <div className={decorations.geometricElements}>
        <div className={decorations.dotPattern1}></div>
        <div className={decorations.dotPattern3}></div>
        <div className={decorations.triangle1}></div>
        <div className={decorations.triangle3}></div>
        <div className={decorations.stripePattern}></div>
        <div className={decorations.pinkElement2}></div>
      </div>
      
      <h1 className={styles.header}>はち歯科新規開業記念<br />総額100万円分の特別企画！</h1>

      <div className={`${styles.boxContainer} ${isShaking ? styles.shake : ''}`}>
        <Image
          src="/images/box.png"
          alt="くじボックス"
          width={250}
          height={250}
        />
      </div>

      <button className={styles.drawButton} onClick={handleDraw} disabled={isShaking}>
        {isShaking ? '抽選中...' : 'くじを引く'}
      </button>
    </div>
  )
} 