import BadgeItem, { Badge } from "./badgeItem"

interface BadgeListProps {
    badges?: Badge[]
}

const BadgeList = ({ badges }: BadgeListProps) => {
    return (
        <section className="badge__group">
            {badges.map(badge => {
                return <BadgeItem key={badge.id} badge={badge} />
            })}
        </section>
    )
}

export default BadgeList