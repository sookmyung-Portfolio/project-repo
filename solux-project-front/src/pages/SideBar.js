import {Link} from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ViewListIcon from '@mui/icons-material/ViewList';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function SideBar() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <Link to="/questions">
        <ListItem button>
            <PsychologyAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
            <ListItemText primary="질문게시판" sx={{ my: 2, color: 'black', display: 'block' }}/>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/reviews">
        <ListItem button>
            <RateReviewIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
            <ListItemText primary="취업후기게시판" sx={{ my: 2, color: 'black', display: 'block' }}/>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/quals">
        <ListItem button>
            <ViewListIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
            <ListItemText primary="스펙게시판" sx={{ my: 2, color: 'black', display: 'block' }}/>
        </ListItem>
      </Link>
      <Divider light />
    </List>
  );
}