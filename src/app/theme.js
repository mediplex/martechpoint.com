import { createMuiTheme } from '@material-ui/core/styles';
import { green, deepOrange, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#4CAF50', contrastText: '#ffffff' },
    secondary: { main: '#FF5722', contrastText: '#ffffff' }
  }
});

export default theme;
