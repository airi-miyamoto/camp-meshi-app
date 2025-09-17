import campMeshiLogo from '../assets/camp-meshi-logo.svg'
import campMeshiLogoWhite from '../assets/camp-meshi-logo-white.svg'
import garLand from '../assets/img-header-garland.png'

function Header() {
  return (
    
      <header className="absolute top-0 left-0 right-0 bg-[#FAFAF0] dark:bg-[#434343] z-10">
        <div className="w-full h-full md:py-[23px] pt-[32px] pb-[20px] px-[40px] relative inset-[0] flex justify-center items-center overflow-hidden">
          <div className="aspect-[744/67] absolute top-0 right-[50%] md:translate-x-[-130px] translate-x-[5.5%] md:h-[67px] h-[24px] z-[0] dark:mix-blend-soft-light"><img className="object-cover object-top" src={garLand} alt="" /></div>
          <h1 className="dark:hidden relative z-[1] sm:w-[220px] w-[150px]"><img src={campMeshiLogo} alt="Camp Meshi" /></h1>
          <h1 className="dark:block hidden relative z-[1] sm:w-[220px] w-[150px]"><img src={campMeshiLogoWhite} alt="Camp Meshi" /></h1>
          <div className="aspect-[744/67] absolute top-0 left-[50%] md:translate-x-[130px] translate-x-[-5.5%] md:h-[67px] h-[24px] z-[0] dark:mix-blend-soft-light"><img className="object-cover object-top" src={garLand} alt="" /></div>
        </div>
      </header>
  )
}

export default Header
