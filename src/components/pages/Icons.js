import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
// import LightModeIcon from '@mui/icons-material/LightMode';

export default function SvgIconsColor() {
  return (
    <div>
      <Box
        sx={{
          '& > :not(style)': {
            m: 2,
          },
        }}
      >
        <Grid container justifyContent="center">
          <Grid item>
            <a href="tel:17202261469">
              <IconButton><PhoneIphoneIcon sx={{ color: blue[500], fontSize: 30 }} /></IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href="mailto:naraamtm@yahoo.com">
              <IconButton><MailOutlineIcon sx={{ color: blue[500], fontSize: 30 }} /></IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href="https://github.com/Nara1469">
              <IconButton><GitHubIcon sx={{ color: blue[500], fontSize: 30 }} /></IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href="https://linkedin.com/in/naradavaasuren">
              <IconButton><LinkedInIcon sx={{ color: blue[500], fontSize: 30 }} /></IconButton>
            </a>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
