import React from "react";
import styles from "./Categories.module.css";

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
];

const Categories = ({ onSelect, category }) => {    
    return(
        <div className={styles.categoriesblock}>
            {categories.map(c => (
                <div className={`${styles.category} ${category === c.name && styles.active}`}
                    key={c.name}
                    onClick={() => onSelect(c.name)}>
                        {c.text}
                </div>
            ))}
        </div>
    );
}

export default Categories;