import { useState, useEffect } from "react"

import { Badge } from "./badgeItem"

interface BadgeScoreProps {
    badges: Badge[]
}

const BadgeScore = ({badges}: BadgeScoreProps) => {
    const [totalScore, setTotalScore] = useState<number>()
    
    const calculateTotalScore = (): number => {
        return badges.reduce((value, currentValue) => value + currentValue.score, 0)
    }
    
    useEffect(() => setTotalScore(calculateTotalScore), [])
    
    return (
        <span className="badge__score">Total score: {totalScore}</span>
    )
}

export default BadgeScore