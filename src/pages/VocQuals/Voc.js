import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import CommonTable from '../CommonTable';
import CommonTableColumn from '../CommonTableColumn';
import CommonTableRow from '../CommonTableRow';
import VocHeader from './VocHeader';
import {Container} from "@mui/material";


function GetData() {
  const [data, setData] = useState({});
  const [num, setNum] = useState(1);
  
  useEffect(() => {
    axios.get('http://localhost:5050/quals').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((item) => (
    <CommonTableRow key={item._id}>
      <CommonTableColumn>{item.num}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/voc/${item._id}`}>
            {item.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{item.createAt}</CommonTableColumn>
      <CommonTableColumn>{item.username}</CommonTableColumn>
    </CommonTableRow>
  ));
  // 문제: createAt값이 넘어오지 않음, 글번호란(첫번째 열)에 모든 정보가 적용됨  NaN

  return item;
}

function Voc() {
  const item = GetData();

  return (<>
    <Container maxWidth="sm">
        <div>
            <VocHeader></VocHeader>
        </div>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}> 
          {item}
        </CommonTable>
    </Container>
  </>);
}
  
export default Voc;