interface BotAvatarProps{
    props: any
}


export const BotAvatar: React.FC<BotAvatarProps> = ({
    props
}) => {
  return (
    <div>{props}
        <img src="/public/Bot.png" alt="" className="relative
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
