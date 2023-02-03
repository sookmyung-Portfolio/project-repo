import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import CommonTable from '../CommonTable';
import CommonTableColumn from '../CommonTableColumn';
import CommonTableRow from '../CommonTableRow';
import VocHeader from './VocHeader';
import { Button, Container } from "@mui/material";


function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/toyseven/voc').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((item) => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/voc/${item.id}`}>
            {item.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{item.createAt}</CommonTableColumn>
      <CommonTableColumn>{item.username}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Voc() {
  const item = GetData();

  return (<>
    <Container maxWidth="sm">
        <div>
            <VocHeader></VocHeader>
        </div>
    </Container>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
        {item}
        </CommonTable>
    
  </>);
}
  
export default Voc;