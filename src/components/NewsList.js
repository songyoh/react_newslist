import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";
import axios from "axios";

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160'
// };

const NewsList = ({ category }) => { // 부모쪽에서 보내준 메뉴바 정보 (props형태(category)로 받아와 짐)
    // articles는 기사 관련 정보가 든 상태변수, loading은 비동기 요청이 처리중인지 아닌지를 보여주는 상태변수
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); // 로딩 시작
        const query = (category === 'all' ? '' : `&category=${category}`);
        //setTimeout(function() {
            axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7c2c6df5badd4f72ac9a4a6e21131405`)
            .then(response => {
                setArticles(response.data.articles); // 비동기 요청을 넣어 얻어온 데이터로 articles 갱신
            });
        //}, 3000); // 3초 지연 코드
        setLoading(false); // 로딩 완료
    }, [category]); // 마지막에 []를 넣어야 최초 렌더링시에만 비동기 요청 자동 호출 -> [category] 상태변수 변경시 렌더링 

    // 대기 중일때
    if(loading){ // loading변수로 참, 거짓 판단이 가능하니 바로 조건식에 대입
        return <div className={styles.newslistblock}>대기중...</div>;
    } 
    if(!articles){ // articles에 값이 저장되지 않았을때
        return <div className={styles.newslistblock}>데이터 수신이 불가능합니다.</div>;
    }

    // articles의 값이 유효하게 처리되었을 때
    return (
        <div className={styles.newslistblock}>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </div>
    );


    // return(
    //     <div className={styles.newslistblock}>
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //     </div>
    // );
};

export default NewsList;