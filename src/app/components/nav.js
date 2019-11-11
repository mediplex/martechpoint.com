import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

export const Nav = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <AppBar
        position="fixed"
        // color="primary"
 
      >
        <Tabs
          centered
          // indicatorColor="primary"
          // textColor="primary"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Who we are" />
          <Tab label="Martech? Why? What? How?" />
          <Tab label="Our Work" />
          <Tab label="Insights" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
    </nav>
  );
};

export default Nav;
