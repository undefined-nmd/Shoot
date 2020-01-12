interface AvatarProps {
    image: string
}

const Avatar = ({ image }: AvatarProps) => {
    if(!image) {
        return null
    }

    return (
        <figure className="avatar">
            <img src={image} alt="User Image" />
        </figure>
    )
}

export default Avatar