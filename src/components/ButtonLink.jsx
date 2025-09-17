import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

function ButtonLink({ children, to }) {
    return (
        <Link to={to} className="group hover:bg-white transition-colors duration-300 border-[1px] border-brand-primary bg-brand-primary rounded-full pt-[19px] pb-[20px] pl-[68px] pr-[38px] inline-flex items-center justify-center text-center text-[20px] relative min-w-[260px]">
            <div className="group-hover:bg-brand-primary absolute left-[16px] top-[50%] translate-y-[-50%] w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white">
                <IoMdArrowBack className="w-[24px] group-hover:text-white dark:text-brand-primary-dark dark:group-hover:text-white" />
            </div>
            <span className="dark:group-hover:text-brand-primary-dark">{children}</span>
        </Link>
    )
}

export default ButtonLink