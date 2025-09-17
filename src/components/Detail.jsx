import { useParams } from 'react-router-dom';
import { useCampMeshiData } from '../hooks/useCampMeshiData';
import { PiHashBold } from "react-icons/pi";
import MainContainer from './MainContainer';
import Label from './Label';
import ButtonLink from './ButtonLink';

function Detail() {
    const { id } = useParams(); //URLからIDを取得
    const { data, loading, error } = useCampMeshiData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>エラー: {error}</div>;

    // IDに一致するデータを検索
    const item = data.find(camp => camp.id === parseInt(id));

    if (!item) return <div>データが見つかりません</div>;

    return (
        <MainContainer>
            <div className="max-w-[750px] mx-auto">
                <div className="grid">
                    <img className="w-full mt-[16px] rounded-md dark:border-white dark:border-4" src={item.image} alt={item.name} />
                    <h2 className="flex items-center md:text-xl text-lg font-bold md:mt-[28px] mt-[16px] gap-xs"><PiHashBold className="md:text-2xl text-lg" />{item.name}</h2>
                    <p className="grid justify-items-start gap-xs md:text-md text-sm mt-[40px] leading-[2] font-bold">
                        <Label icon="tent">ひとこと</Label>
                        <span className="pl-[51px]">{item.description}</span>
                    </p>
                    <p className="grid justify-items-start gap-xs md:text-md text-sm mt-[48px] font-bold">
                        <Label icon="flag">作った場所</Label>
                        <span className="pl-[51px]">{item.location}</span>
                    </p>
                    <p className="grid justify-items-start gap-xs md:text-md text-sm mt-[20px] font-bold">
                        <Label icon="calendar">作った日</Label>
                        <span className="pl-[51px]">{item.date}</span>
                    </p>
                    <div className="md:mt-[100px] mt-[80px] flex justify-center">
                        <ButtonLink to="/">一覧に戻る</ButtonLink>
                    </div>
                    
                </div>

            </div>
        </MainContainer>
    )

}

export default Detail