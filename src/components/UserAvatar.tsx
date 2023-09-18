interface UserAvatarProps{
    props: any
}


export const UserAvatar: React.FC<UserAvatarProps> = ({
    props
}) => {
  return (
    <div>{props}
        <img src="/User.jpg" alt="" className="relative
            inline-block
            rounded-full
            overflow-hidden
            h-9
            w-9
            md:h-11
            md:w-11"/>
    </div>
  )
}
