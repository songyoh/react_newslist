import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import React from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  // const [data, setData] = useState();
  // const url = 'https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=7c2c6df5badd4f72ac9a4a6e21131405'

  // const onClick = () => {
  //   // axios도 fetch처럼 요청 주소를 집어넣을 수 있다.
  //   // 단, axios는 fetch와 달리 axios.요청메서드(주소).then(콜백함수...); 양식으로 작성한다.
  //   //axios.get('https://jsonplaceholder.typicode.com/todos/1') //, { headers: {Authorization: 'token'},body: JSON.stringify})
  //   axios.get(url)
  //     .then(response => {
  //     setData(response.data);
  //   });
  // };

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {/* and연산자를 썼기 때문에, data 상태변수가 null이 아닌 경우(출력할 자료가 있는 경우)만
    //   true && true가 되어 뒤쪽 태그가 화면에 나타나게됨. */}
    //   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    // </div>
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
