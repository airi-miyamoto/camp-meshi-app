import bgBackMountain from '../assets/bg-back-mountain.png';
import bgFrontMountain from '../assets/bg-front-mountain.png';
import leftTrees from '../assets/left-trees.png';
import trees from '../assets/trees.png';
import bgClouds from '../assets/bg-clouds.png';
import bgStarsLess from '../assets/bg-stars-less.png';
import bgStarsMore from '../assets/bg-stars-more.png';

function MainContainer({ children }) {
    return (
        <main className="md:mt-[115px] mt-[100px] relative bg-gradient-to-b from-[rgb(207,226,255)] to-[#FFF] min-h-screen dark:from-[#0C0B1D] dark:to-[#BCB1FF] overflow-hidden">
            <div className="container mx-auto px-[24px] md:pt-[120px] pt-[40px] md:pb-[240px] pb-[140px] relative z-[2]">
                {children}
            </div>
            <div className="flex absolute overflow-hidden md:top-[200px] top-[40px] left-0 right-0 bottom-0 z-[0] w-full h-[884px] dark:hidden">
                <div className="md:w-[135%] w-[250%] aspect-[1879/884]">
                    <img className="object-contain object-bottom animate-slow-move" src={bgClouds} alt="" />
                </div>
                <div className="md:w-[135%] w-[250%] aspect-[1879/884]">
                    <img className="object-contain object-bottom animate-slow-move" src={bgClouds} alt="" />
                </div>
            </div>
            <div className="dark:block hidden absolute left-[50%] translate-x-[-50%] md:top-0 top-[-15px] z-[0] md:w-full aspect-[1400/1122] w-[300%]">
                <div className="absolute top-0 left-0 z-[0] w-full aspect-[1400/1122] animate-twinkle">
                    <img className="object-contain" src={bgStarsLess} alt="" />
                </div>
                <div className="absolute top-0 left-0 z-[0] w-full aspect-[1400/1122] animate-twinkle animate-delay-10 mix-blend-color-burn blur-[2px]">
                    <img className="object-contain" src={bgStarsMore} alt="" />
                </div>
            </div>
            <div className="h-[297px] w-full absolute bottom-0 left-0 z-[0] overflow-hidden dark:mix-blend-multiply">
                <div className="absolute left-0 bottom-0 z-[0] w-[1041px] aspect-[1041/244] max-[1041px]:w-full">
                    <img className="object-cover object-bottom" src={bgBackMountain} alt="背景山" />
                </div>
                <div className="absolute right-0 bottom-0 z-[1] w-[1147px] aspect-[1147/297] max-[1147px]:w-full">
                    <img className="object-cover object-bottom" src={bgFrontMountain} alt="前景山" />
                </div>
                <div className="absolute left-[12px] bottom-0 z-[3] w-[237px] aspect-[237/118] max-[1400px]:hidden">
                    <img className="object-contain" src={leftTrees} alt="左の木" />
                </div>
                <div className="absolute right-[-1.2%] bottom-0 z-[4] w-[555px] aspect-[555/297] max-[1200px]:w-[clamp(200px,50%,555px)]">
                    <img className="object-contain" src={trees} alt="右の木" />
                </div>
            </div>
        </main> 
    )
}

export default MainContainer