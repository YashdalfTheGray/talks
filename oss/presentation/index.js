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
