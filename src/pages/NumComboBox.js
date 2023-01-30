import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function NumComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={num}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="학번" size="small"
       />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const num = [
  { label: '23', year: 1994 },
  { label: '22', year: 1972 },
  { label: '21', year: 1974 },
  { label: '20', year: 2008 },
  { label: '19', year: 1957 },
  { label: "18", year: 1993 },
  { label: '17', year: 1994 },
  {
    label: '16',
    year: 2003,
  },
  { label: '15', year: 1966 },
  { label: '14', year: 1999 },
  {
    label: '13',
    year: 2001,
  },
  {
    label: '12',
    year: 1980,
  },
  { label: '11', year: 1994 },
  { label: '10', year: 2010 },
  {
    label: '09',
    year: 2002,
  },
  { label: "08", year: 1975 },
  { label: '07', year: 1990 },
  { label: '06', year: 1999 },
  { label: '05', year: 1954 },
  {
    label: '04',
    year: 1977,
  },
  { label: '03', year: 2002 },
  { label: '02', year: 1995 },
  { label: '01', year: 1991 },
  { label: "00", year: 1946 },
  { label: '99', year: 1997 },
  { label: '98', year: 1995 },
  { label: '97', year: 1994 },
  { label: '96', year: 2001 },
  { label: '95', year: 1998 },
  { label: '94', year: 1968 },
];