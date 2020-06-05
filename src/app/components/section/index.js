import { useRef, useEffect, useState } from 'react';
import { AppBar, Box, Container, useScrollTrigger } from '@material-ui/core';

const ElevationScroll = ({ children }) => {
  const [threshold, setThreshold] = useState(99999)

  useEffect(()=>{
    if (children.ref.current){
      setThreshold(children.ref.current.getBoundingClientRect().y)
    }
  },[children.ref.current])

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

export const Section = ({ children, title }) => {
  const sectionHeader = useRef();

  return (
    <Box component={`section`}>
      <ElevationScroll>
        <AppBar
          position="sticky"
          ref={sectionHeader}
        >
          <Container maxWidth={`lg`}>
            <Box fontSize={{xs: 'h4.fontSize', lg: 'h3.fontSize'}}  align={`center`} py={{xs: 1, lg: 2}}>
              {title}
            </Box>
          </Container>
        </AppBar>
      </ElevationScroll>


      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="strech"
        paddingTop={{
          xs: 5,
          sm: 5,
          md: 5,
          lg: 5,
          xl: 5
        }}
        paddingBottom={{
          xs: 15,
          sm: 15,
          md: 15,
          lg: 15,
          xl: 15
        }}
      >
        <Container maxWidth={'md'}>{children}</Container>
      </Box>
    </Box>
  );
};
export default Section;
