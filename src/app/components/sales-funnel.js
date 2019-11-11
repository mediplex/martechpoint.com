import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

import { Section } from './section';

export const SalesFunnel = () => {
  return (
    <Section title={'What is a Sales Funnel'}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            //   srcset="elva-fairy-320w.jpg 320w,
            //  elva-fairy-480w.jpg 480w,
            //  elva-fairy-800w.jpg 800w"
            //   sizes="(max-width: 320px) 280px,
            // (max-width: 480px) 440px,
            // 800px"
            width={`250px`}
            src="https://lh3.googleusercontent.com/Li4LTDIURBd-PctEf4r3wsV-2jrce8WcMR-pLEPBJF6neyVLKoae46lsWoDglBxVMpmeqiU1gMMyPCDWs2vh=w903"
            alt="Sales Funnels Illustration"
          />
        </Grid>
        <Grid item container spacing={0} xs={6}>
          <Grid item>
            <Typography>
              {`A sales funnel is a series of emails, ads, lead magnets, landing pages, and sales
              pages—all designed to ease your leads into the next stage of the buyer journey. And
              with the right sales funnel, it means…`}
            </Typography>
          </Grid>
          <Grid item>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    'Guide your visitors step-by-step through the entire sales process (so they don’t get confused or LOST, and leave)'
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    'Point your customer straight to the ONE product or service they need most to help solve their problem'
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={'​Follow-up with your visitors, even after they leave your page!'}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Typography>
              {`It’s pretty simple: a sales funnel does all the hard work of nurturing your leads for you.`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {`But creating a sales funnel takes time, money, and expertise that most busy business owners don’t have...`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {`So what if there was a solution that brought the convenience of a ride-hailing app to sales funnels?`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default SalesFunnel;
