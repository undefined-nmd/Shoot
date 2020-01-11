export type Badge = {
    id: string;
    name: string;
    image: string;
    score: number;
}

interface BadgeProps {
    badge: Badge
}

const BadgeItem = ({ badge }: BadgeProps) => {
    return (
        <div className="badge">
            <img src={badge.image} alt="Badge image" />
        </div>
    )
}

export default BadgeItem