// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, Image, Link, Slide, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const images = {
  qrLink: require('../assets/qr-link.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'fade']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Image src="https://secureimg.stitcher.com/feedimageswide/480x270_100921.jpg" />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading margin="0 0 36px" textSize={60} textColor="tertiary">
            http://bit.ly/docker-canary
          </Heading>
          <Image src={images.qrLink} />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading caps textSize={60} textColor="tertiary">
            Canaries and Acceptance Testing with Docker
          </Heading>
          <Text margin="16px 0 0" textColor="secondary" size={1} fit bold>
            Yash Kulshrestha (@yashdalfthegray)
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text textColor="secondary" textSize={32} margin="10px">
            Yash
          </Text>
          <Text textColor="tertiary" textSize={32} margin="10px">
            Standard issue codemonkey
          </Text>
          <Text textColor="tertiary" textSize={32} margin="10px">
            Gamer
          </Text>
          <Text textColor="tertiary" textSize={32} margin="10px">
            Buckeye
          </Text>
          <Text textColor="tertiary" textSize={32} margin="10px">
            Petrolhead
          </Text>
          <Text textColor="tertiary" textSize={32} margin="10px">
            Emoji enthusiast
          </Text>
          <Text textColor="tertiary" textSize={32} margin="10px">
            Person
          </Text>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={1} textColor="secondary">
            🙋‍♂️ 🖥 👉 ☁️
          </Heading>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading margin="0 0 24px" size={1} textColor="secondary">
            Agenda
          </Heading>
          <Image src="https://i.imgflip.com/2kty7g.jpg" height="140px" />
          <Image
            src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif"
            height="140px"
          />
          <Image
            src="http://heppsanhometraining.com/wp-content/uploads/2018/08/to-infinity-and-beyond-buzz-lightyear-toy-story-passiton-with-buzz-lightyear-quotes-825x510.jpg"
            height="140px"
          />
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            Context
          </Heading>
          <Text textColor="tertiary" textSize={36} margin="10px">
            Console
          </Text>
          <Text textColor="tertiary" textSize={36} margin="10px">
            Region
          </Text>
          <Text textColor="tertiary" textSize={36} margin="10px">
            Deployment
          </Text>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            Feature Lifecycle
          </Heading>
          <Text textColor="tertiary" textSize={48} margin="10px">
            🗓 → 🖥 → ✅
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            Feature Lifecycle
          </Heading>
          <Text textColor="tertiary" textSize={48} margin="10px">
            🗓 → 🖥 → 🖥
          </Text>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            Let's talk about tests, baby
          </Heading>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            #ThereHasToBeABetterWay
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Link
            href="https://github.com/yashdalfthegray"
            target="_blank"
            textColor="tertiary"
            textSize={48}
            margin="24px">
            Github
          </Link>
          <Link
            href="https://twitter.com/yashdalfthegray"
            target="_blank"
            textColor="tertiary"
            textSize={48}
            margin="24px">
            Twitter
          </Link>
          <Link
            href="https://yashdalfthegray.github.io"
            target="_blank"
            textColor="tertiary"
            textSize={48}
            margin="24px">
            Website
          </Link>
          <Text textColor="secondary" textSize={48} margin="24px ">
            ~~
          </Text>
          <Link
            href="https://yashdalfthegray.github.io/talks/canary/outline"
            target="_blank"
            textColor="tertiary"
            textSize={48}
            margin="24px">
            Presentation Notes
          </Link>
        </Slide>
      </Deck>
    );
  }
}
