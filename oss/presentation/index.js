// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck,
    Heading,
    Link,
    Slide,
    Text
} from 'spectacle';
// import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: '#fff',
        secondary: '#40a647',
        tertiary: '#40a647',
        quarternary: '#40a647'
    },
    {
        primary: 'Roboto, sans-serif',
        secondary: 'sans-serif'
    }
);


export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['slide']}
                transitionDuration={500}
                progress="pacman"
                theme={theme}>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Contributing to Open Source Software
                    </Heading>
                    <Text textColor="secondary" margin="16px" textSize="28px">
                        Yash Kulshrestha
                    </Text>
                    <Text textColor="secondary" margin="16px" textSize="24px">
                        @yashdalfthegray
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="96px" textColor="secondary">
                        🤔
                    </Heading>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Commencing time travel...
                    </Heading>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Early 1970s
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        ✨Open✨
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Early 1980s
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        Proprietary software
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        1984
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        GNU Project
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Early 1990s
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        GNU/Linux
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        1997
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        The Cathedral and The Bazaar
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        1998
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        Open Source Initiative
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        2005
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        Git
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Now
                    </Heading>
                    <Text textColor="secondary" margin="24px" textSize="36px">
                        Open by default
                    </Text>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Getting involved
                    </Heading>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Write some code for it
                    </Heading>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Writing code every day for 1046 days
                    </Heading>
                </Slide>
                <Slide>
                    <Heading textSize="48px" textColor="secondary">
                        Questions?
                    </Heading>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
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
                        href="https://yashkulshrestha.carrd.co"
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
                        href="https://yashdalfthegray.github.io/talks/oss/notes"
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
