import { Box, Container, Typography } from '@material-ui/core';

export const Section = ({ children, title }) => (
  <Box component={`section`}>
        <Box
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 999 //:not(:stuck) // should get smaller with a smooth trasition
        }}
        bgcolor={`#4CAF4F`}
        color={`#FFF`}
        py={{
          xs: 5,
          sm: 5,
          md: 5,
          lg: 5,
          xl: 5,
        }}>
          <Container maxWidth={`lg`}>
          <Typography variant={`h3`} align={`center`}>
            {title}
          </Typography>
          </Container>
        </Box>

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
          xl: 5,
        }}
        paddingBottom={{
          xs: 15,
          sm: 15,
          md: 15,
          lg: 15,
          xl: 15,
        }}
      >
              <Container maxWidth={'md'}>
        {children}
    </Container>
      </Box>
  </Box>
);

export default Section;
