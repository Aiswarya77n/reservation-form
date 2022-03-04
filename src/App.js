

import ValidationForm from './Form';

import {  makeStyles,CssBaseline } from '@material-ui/core';
import Employees from './Employee';
import SideMenu from './SideMenu';



const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})
function App() {
  const classes = useStyles();

  return (<div>
   
      <SideMenu />
      <div className={classes.appMain}>
        
        
        <Employees />
        <ValidationForm/>
      </div>
      <CssBaseline />
      </div>
    
  
   
  );
}

export default App;
