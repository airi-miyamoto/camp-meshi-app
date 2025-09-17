import SkeltonCard from './SkeltonCard'

function SkeltonScreen() {
    const cards = Array.from({ length: 9 }, (_, index) => index);
    return (
        <>
            {
                cards.map((index) => (
                <SkeltonCard key={index} />
                ))
            }
        </>
    )
}

export default SkeltonScreen