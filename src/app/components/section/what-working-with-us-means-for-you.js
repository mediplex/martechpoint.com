import { Section } from '.';
import { Typography, Box, Avatar, Divider } from '@material-ui/core';
import theme from '../../theme';

const data = {
  title: `What working with us means for you?`,
  content: [
    {
      subtitle: `We take care of your marketing tasks, So you can focus on your clients`,
      body: `(Rewrite) We offer a 100% Done-For-You service, so the only finger you have to lift is the one that gives us the "thumbs-up".
          All it takes to get started is selecting the AutoTask you want done through our app.
          Then, we handle all the heavy lifting on our side. Strategy, copywriting, design, development, project management, ad management, quality assurance—it’s all done completely in-house by our team of experts.
          Just sit back, click, and relax. You'll be amazed at how much time you save.`,
      imgSrc: `/scrum-board.png`,
      imgAlt: `Sales Funnels Illustration`
    },

    {
      subtitle: `We build your optimal Sales Funnel & You will own all of it`,
      body: `Your sales funnel is yours and yours alone. We build all the components you'll ever need to make it successful.
             But at the end of the day, every marketing asset created is yours.
             No having to argue of ownership rights, no licensing, no back and forth with support staff.
             We build it for you. We launch it for you. We optimise it. And YOU own that lead machine. Simple.`,
      imgSrc: `https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/abstract_x68e.svg`,
      imgAlt: `Sales Funnels Illustration`
    },
    {
      subtitle: `One-Stop-Marketing-Shop Scalable Service, Powered By Our Easy-to-Use App`,
      body: `Our On-Demand model and intuitive software app is designed with business use in mind.
             We know you want to get your whole funnel live as soon as possible.
             It's why we offer 4 unique pricing packages to suit your specific launch goals.
             And it's why we made ordering content as easy as clicking a button.
             No waiting around for months.
             No revision after revision after revision.
             No “dead air” that only ends up costing you money.
             We work fast, so you don't have to.`,
      imgSrc: `https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/add_to_cart_vkjp.svg`,
      imgAlt: `Sales Funnels Illustration`
    },
    {
      subtitle: `Rest Easy Knowing You’re In Good Hands`,
      body: `We have been building growth-generating sales funnels for our precious clients over 10 years.
             Since then, we’ve worked with 660+ businesses to build high-converting funnels with professional strategy, copy, and design.
             It is impossible to find another option with Us's same level of experience, affordability, and marketing savvy.
             For instance, our Triple Quality Check Guarantee to ensures your sales funnel is as polished as possible and ready to sell.`,
      imgSrc: `https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/High_five_u364.svg`,
      imgAlt: `Sales Funnels Illustration`
    }
  ]
};

export const WhatWorkingWithUsMeansForYou = () => (
<Section title={data.title}>
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
              <Avatar style={{padding: 30, fontSize: 'x-large', backgroundColor: theme.palette.primary.main}}>{index + 1}</Avatar>
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
            <Typography>{element.body}</Typography>
          </Box>
        </Box>
        {content.length != index + 1 && <Divider variant="middle" style={{ marginTop: 15, marginBottom: 15 }} />}
      </Box>
    ))}
  </Section>
);

export default WhatWorkingWithUsMeansForYou;
