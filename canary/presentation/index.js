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
  qrLink: require('../assets/qr-link.png'),
  thinkingFace: require('../assets/thinking-face.gif'),
  jestLogo: require('../assets/jest.svg'),
  puppeteerLogo: require('../assets/puppeteer.png'),
  dockerLogo: require('../assets/docker.png'),
  powerpuffGirls: require('../assets/powerpuff.jpg')
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
            Audiophile
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
        <Slide transition={['zoom']}>
          <Image src={images.thinkingFace} />
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={1} textColor="secondary">
            💡
          </Heading>
        </Slide>
        <Slide transition={['zoom']}>
          <Image src={images.jestLogo} height="240px" />
        </Slide>
        <Slide transition={['zoom']}>
          <Image src={images.puppeteerLogo} height="240px" />
        </Slide>
        <Slide transition={['zoom']}>
          <Image src={images.dockerLogo} height="240px" />
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 24px" textColor="secondary">
            Let's get it started!
          </Heading>
          <Text textColor="tertiary" textSize={24}>
            (Ha! Let's get it started in here!)
          </Text>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            The future is canaries
          </Heading>
        </Slide>
        <Slide transition={['zoom']}>
          <Image
            src="https://static1.squarespace.com/static/518f5d62e4b075248d6a3f90/t/544ca7a9e4b0d4afb025e2e7/1414309804946/"
            height="600px"
          />
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            The Tech
          </Heading>
          <Image
            src="http://8.media.bustedtees.cvcdn.com/9/-/bustedtees.9341ea69-a0fc-411f-ac58-c2dd6d6d.gif"
            height="400px"
          />
        </Slide>
        <Slide transition={['zoom']}>
          <Image src="https://i.stack.imgur.com/9SvDE.jpg" height="240px" />
        </Slide>
        <Slide transition={['zoom']}>
          <Image
            src="http://images2.fanpop.com/image/photos/9800000/Chemical-X-powerpuff-girls-movie-9885363-427-320.jpg"
            height="240px"
          />
        </Slide>
        <Slide transition={['zoom']}>
          <Image src={images.powerpuffGirls} height="240px" />
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            Write once, run everywhere
          </Heading>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={4} margin="0 0 36px" textColor="secondary">
            Demos
          </Heading>
          <Link
            href="https://github.com/YashdalfTheGray/todos"
            target="_blank"
            textColor="tertiary"
            textSize={48}
            margin="24px">
            Todos demo app
          </Link>
          <p />
          <Link
            href="https://github.com/YashdalfTheGray/todos-tester"
            target="_blank"
            textColor="tertiary"
            textSize={48}
            margin="24px">
            Todos demo app integration tests
          </Link>
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
