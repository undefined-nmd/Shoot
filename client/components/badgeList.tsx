import BadgeItem, { Badge } from "./badgeItem"

interface BadgeListProps {
    badges?: Badge[]
}

const BadgeList = ({ badges }: BadgeListProps) => {
    if(!badges) {
        return <p>You currently have no badges.</p>
    }
    return (

        <section className="badge__group">
            {badges.map(badge => {
                return <BadgeItem key={badge._id} badge={badge} />
            })}
        </section>
    )
}

export default BadgeList