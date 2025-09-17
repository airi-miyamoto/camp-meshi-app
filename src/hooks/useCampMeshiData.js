import { useState, useEffect } from 'react'
import { CampMeshiData } from '../data/CampMeshiData'

export const useCampMeshiData = () => {
    // 状態管理用のstate
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'http://localhost:10028/wp-json/wp/v2/pages/2?_fields=id,title,meta'

    //データ取得処理
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                //API取得を模擬実装(500ms待機)
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP Error! status: ${response.status}`);
                }

                const pageData = await response.json();

                // URLでコードとJSONパース
                const encodeData = pageData.meta['camp-meshi'];
                const decodedData = decodeURIComponent(encodeData);
                const wpData = JSON.parse(decodedData);

                // WordPressデータを既存の形式に変換
                const formattedData = wpData.map((item, index) => ({
                    id: index + 1,
                    name: item.name,
                    description: item.description,
                    image: item.image?.url || item.image?.sizes?.medium?.url || 'https://placehold.jp/320x240.png',
                    location: item.location,
                    date: item.date ? new Date(item.date).toISOString().split('T')[0] : '',
                }));

                setData(formattedData);
                

                
            } catch (error) {
                console.error('データの取得に失敗しました:', error);
                setError('データの取得に失敗しました: ${error.message}');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
}