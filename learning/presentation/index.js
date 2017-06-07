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
    commit: require('../assets/commit.png'),
    shadow: require('../assets/shadow.jpg'),
    trello: require('../assets/trello.svg')
};

preloader(images);

const theme = createTheme({
    primary: '#03A9FC',
    secondary: '#1F2022',
    tertiary: '#FFFFFF',
    quartenary: '#CECECE'
}, {
    primary: 'Roboto',
    secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['fade']} transitionDuration={500} theme={theme}>
                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Managing Your Learning
                    </Heading>
                    <Text margin="30px" textColor="tertiary" textSize={48}>
                        Yash Kulshrestha
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
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
                        Dude
                    </Text>
                    <Text textColor="tertiary" textSize={32} margin="10px">
                        Emoji enthusiast
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Image src={images.commit} width="100%" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text textColor="tertiary" textSize={120}>
                        🤔
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Image src={images.shadow} width="100%" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text textColor="tertiary" textSize={120}>
                        🕔
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text textColor="tertiary" textSize={48}>
                        Rome wasn't built in a day.
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Image src={images.trello} width="60%" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text textColor="tertiary" textSize={120}>
                        🥅 🥅 🥅
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text textColor="tertiary" textSize={48}>
                        Motivation is what gets you started...
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text textColor="tertiary" textSize={48}>
                        ...habit is what keeps you going.
                    </Text>
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
                    <Link href="https://github.com/YashdalfTheGray/talks/blob/master/learning/notes.md" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Presentation Notes
                    </Link>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={1} caps lineHeight={1} textColor="secondary">
                        Thank you
                    </Heading>
                    <Text margin="48px 0 0" textColor="tertiary" textSize={24}>
                        Any feedback is welcome!
                    </Text>
                </Slide>
            </Deck>
        );
    }
}
