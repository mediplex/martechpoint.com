import { Box, Container, Paper, Typography } from '@material-ui/core';

export const Section = ({ children, title }) => (
  <Box marginBottom={5}>
    <Container maxWidth={'md'} component="section">
      <Paper style={{ borderRadius: 32 }}>
        <Box
          px={10}
          py={10}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="strech"
        >
          <Box paddingBottom={10}>
            <Typography variant={`h3`} align={`center`}>
              {title}
            </Typography>
          </Box>

          <Box>{children}</Box>
        </Box>
      </Paper>
    </Container>
  </Box>
);

export default Section;
