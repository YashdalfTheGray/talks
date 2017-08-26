import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import {
    Deck,
    Heading,
    Image,
    Link,
    Slide,
    Text
} from 'spectacle';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
    hubot: require('../assets/hubot.svg'),
    particle: require('../assets/particle.svg'),
    slack: require('../assets/slack.svg')
};

preloader(images);

const theme = createTheme(
    {
        primary: '#FFF',
        secondary: '#1F2022',
        tertiary: '#FF6D00',
        quarternary: '#FF6D00'
    },
    {
        primary: 'Roboto',
        secondary: 'Helvetica'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['fade']} transitionDuration={500} theme={theme}>
                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Virtual House Assistant
                    </Heading>
                    <Text margin="30px" textColor="tertiary" textSize={48}>
                        Yash Kulshrestha
                    </Text>
                </Slide>
                <Slide>
                    <Text margin="36px" textColor="secondary" textSize={48}>
                        Hey, Jarvis...
                    </Text>
                </Slide>
                <Slide>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={images.particle} width="25%" style={{ transform: 'rotate(90deg)' }} />
                        <Image src={images.hubot} width="25%" />
                        <Image src={images.slack} width="25%" />
                    </div>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Link href="https://github.com/yashdalfthegray" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Github
                    </Link>
                    <Link href="https://twitter.com/yashdalfthegray" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Twitter
                    </Link>
                    <Link href="https://yashkulshrestha.carrd.co" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Website
                    </Link>
                    <Text textColor="secondary" textSize={48} margin="24px ">
                        ~~
                    </Text>
                    <Link href="https://yashdalfthegray.github.io/talks/assistant/notes" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Presentation Notes
                    </Link>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={3} caps lineHeight={1} textColor="secondary">
                        Thanks for listening!
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
