import { Box, Container, Paper, Typography } from '@material-ui/core';

export const Section = ({ children, title, titleInTheBox, boxed }) => (
  <Box marginBottom={10}>
    {!titleInTheBox && (
      <Container maxWidth={'sm'}>
        <Box marginBottom={5}>
          <Typography variant={`h3`} align={`center`}>
            {title}
          </Typography>
        </Box>
      </Container>
    )}
    <Container maxWidth={'md'} component="section">
      {boxed && (
        <Paper style={{ borderRadius: 32 }}>
          <Box
            px={{
              xs: 2,
              sm: 6,
              md: 8,
              lg: 10,
              xl: 10
            }}
            py={{
              xs: 4,
              sm: 6,
              md: 8,
              lg: 10,
              xl: 10
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="strech"
          >
            {titleInTheBox && (
              <Box marginBottom={10}>
                <Typography variant={`h3`} align={`center`}>
                  {title}
                </Typography>
              </Box>
            )}
            <Box>{children}</Box>
          </Box>
        </Paper>
      )}
      {!boxed && (
        <Box
          padding={{
            xs: 2,
            sm: 2,
            md: 8,
            lg: 10,
            xl: 10
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="strech"
        >
          {titleInTheBox && (
            <Box marginBottom={10}>
              <Typography variant={`h3`} align={`center`}>
                {title}
              </Typography>
            </Box>
          )}
          <Box>{children}</Box>
        </Box>
      )}
    </Container>
  </Box>
);

export default Section;
