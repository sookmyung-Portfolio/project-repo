import React from 'react';
import './VocHeader3.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Button, Container } from "@mui/material";

const VocHeader3 = props => {
  const { headersName, children } = props;

  return (
    <form style={{ display: 'flex', flexDirection: 'row'}}>
        <div style={{ 
            display: 'flex', justifyContent: 'left', alignItems: 'left', 
            width: '100%', height: '0vh',  
            }}>
            <h2 align="left">질문게시판</h2>
        </div>
        <div style={{ 
            display: 'flex', justifyContent: 'right', alignItems: 'right', 
            width: '100%', height: '10vh',  
            }}>
            <Link to='/voc3/question3'>
                <Button variant="contained" align="right" className="voc-view-go-list-btn" >
                게시글 작성
                </Button>
            </Link>
        </div>
    </form>
  )
}

export default VocHeader3;