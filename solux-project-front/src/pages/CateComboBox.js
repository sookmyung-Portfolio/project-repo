import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CateComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={dep}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="태그" size="small" id="fullWidth"/>}
    />
  );
}

const dep = [
  { label: '한국어문학부'},
  { label: '역사문화학과'},
  { label: '프랑스언어·문화학과'},
];