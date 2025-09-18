import { PiHashBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Card({ id, image, name}) {
    return (
        <Link to={`/detail/${id}`} className="group cursor-pointer text-left block drop-shadow-sm dark:drop-shadow-white aspect-[3/4] w-full h-full relative">
            <div className="rounded-md overflow-hidden w-full h-full absolute inset-[0]">
                <img className="group-hover:scale-105 transition-transform duration-300 object-cover inset-[0] w-full h-full" src={image} alt={name} />
                <div className="absolute left-0 bottom-0 w-full aspect-[300/150] z-[1] bg-gradient-to-b from-transparent to-[#390607] opacity-[0.7]"></div>
            </div>
            <h3 className="pb-[16px] px-[16px] text-white flex items-center gap-[8px] text-lg font-bold absolute bottom-0 left-0 z-[2]"><PiHashBold className="shrink-0" />{name}</h3>
        </Link>
    )
}

export default Card