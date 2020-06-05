import { Section } from '.';
import { Typography, Box, Avatar, Divider } from '@material-ui/core';
import theme from '../../theme';

const data = {
  title: `Case Study`,
  content: [
    {
      subtitle: `Take our 1 minute self-marketing audit`,
      body: `Complete our short questionaire to evatuate you actual marketing. It will make you aware of what you need.
             It’s Free! And, it takes 1 minute to complete and with no obligation.
             Once done. We will sent you  straight away to your inbox your marketing plan based on your answers.
      `,
      imgSrc: `/scrum-board.png`,
      imgAlt: `Sales Funnels Illustration`
    },
    {
      subtitle: `We create and optimize your sales funnel`,
      body: `We offer a 100% Done-For-You service, so the only finger you have to lift is the one that gives us the "thumbs-up".
          Then, we handle all the heavy lifting on our side. Strategy, copywriting, design, development, project management, ad management, quality assurance—it’s all done completely in-house by our team of experts.
          Just sit back, click, and relax. You'll be amazed at how much time you save.`,
      imgSrc: `/scrum-board.png`,
      imgAlt: `Sales Funnels Illustration`
    },
    {
      subtitle: `Your relax and focus on you customer`,
      body: `You will start getting high quality, consistent client leads delivered straight to you inbox every single day. The end result? More profits, more efficiency, and more time to focus on what you loves.  `,
      imgSrc: `https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/all_the_data_h4ki.svg`,
      imgAlt: `visualizing-the-progress`
    }
  ]
};

export const CaseStudy = () => (
  <Section title={data.title}>
    <img
      width={`300px`}
      src={
        'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/businessman_97x4.svg'
      }
      alt={'business-owner'}
    />

    <Box>
      <Typography>You’re a busy business owner</Typography>
      <Typography>You’re on a limited budget</Typography>
      <Typography>You want to work on and scale your business</Typography>
    </Box>
    {data.content.map((element, index, content) => (
      <Box
        key={Math.random()
          .toString(36)
          .substr(2, 5)}
      >
        <Box
          paddingBottom={5}
          display={`flex`}
          flexWrap={{ xs: 'nowrap', lg: 'wrap' }}
          flexDirection={{ xs: 'column', lg: 'row' }}
        >
          <Box
            //  order={{ xs: 1, lg: 1 }}
            display={'flex'}
            flexDirection={{ xs: 'column', lg: 'row' }}
            alignItems={{ xs: 'center', lg: 'flex-start' }}
            flexBasis={{ xs: '100%', lg: '100%' }}
            paddingBottom={2}
            paddingTop={2}
          >
            <Box marginRight={{ lg: 2 }} marginBottom={{ xs: 2 }}>
              <Avatar style={{ padding: 30, fontSize: 'x-large', backgroundColor: theme.palette.primary.main }}>
                {index + 1}
              </Avatar>
            </Box>

            <Box textAlign={{ xs: 'center', lg: 'left' }}>
              <Typography variant={`h4`}>
                <span>{element.subtitle}</span>
              </Typography>
            </Box>
          </Box>

          <Box
            // order={{ xs: 2, lg: index % 2 == 0 ? 3 : 2 }}
            flexBasis={{ xs: '100%', lg: '50%' }}
            display={`flex`}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={0}
            // minHeight={'100%'}
          >
            <img width={`75%`} src={element.imgSrc} alt={element.imgAlt} />
          </Box>

          <Box
            // order={{ xs: 3, lg: index % 2 == 0 ? 2 : 3 }}
            flexBasis={{ xs: '100%', lg: '50%' }}
            py={2}
          >
            <Typography dangerouslySetInnerHTML={{ __html: element.body }} />
          </Box>
        </Box>
        {content.length != index + 1 && <Divider variant="middle" style={{ marginTop: 15, marginBottom: 15 }} />}
      </Box>
    ))}
  </Section>
);

export default CaseStudy;
