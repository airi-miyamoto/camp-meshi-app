import Card from './Card'
import ListWrapper from './ListWrapper'
import SkeltonCard from './SkeltonCard'
import { useCampMeshiData } from '../hooks/useCampMeshiData'

function List() {
    const { data, loading, error } = useCampMeshiData();


    //ローディング
    if (loading) {
        return (

            <ListWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[18px] md:gap-y-[40px]">
                    <SkeltonCard />
                    <SkeltonCard />
                    <SkeltonCard />
                    <SkeltonCard />
                    <SkeltonCard />
                    <SkeltonCard />
                    <SkeltonCard />
                    <SkeltonCard />
                    <SkeltonCard />
                </div>
            </ListWrapper>

        );
    }

    //エラー
    if (error) {
        return (
            <ListWrapper>
                <div className="container mx-auto px-[40px] py-[120px]">
                    <div className="text-center text-red-500">{error}</div>
                </div>
            </ListWrapper>
        );
    }



    return (

        <ListWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[18px] md:gap-y-[40px]">
                {
                    data.map((campMeshi) => (
                        <Card key={campMeshi.id} {...campMeshi} />
                    ))
                }
            </div>
        </ListWrapper>

    )
}

export default List
