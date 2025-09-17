import { PiHashBold } from "react-icons/pi";
import iconTent from '../assets/icon-tent.svg';
import iconFlag from '../assets/icon-flag.svg';
import iconCalendar from '../assets/icon-calendar.svg';

export default function Label({ children, icon = null }) {
    if (icon) {
        switch (icon) {
            case 'tent':
                icon = <img src={iconTent} alt="tent" />
                break;
            case 'flag':
                icon = <img src={iconFlag} alt="flag" />
                break;
            case 'calendar':
                icon = <img src={iconCalendar} alt="calendar" />
                break;
            default:
                icon = null;
        }
    }

    return (
        <span className="text-lg font-bold flex items-center gap-xs">
            {icon && <span className="aspect-square dark:brightness-200">{icon}</span>}
            {children}
        </span>
    )
}