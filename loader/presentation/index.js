import React from 'react';
import {
    Deck,
    Heading,
    Link,
    Markdown,
    Slide,
    Text
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: '#FFF',
        secondary: '#1F2022',
        tertiary: '#4CAF50',
        quarternary: '#4CAF50'
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
                        Writing your first Webpack Loader
                    </Heading>
                    <Text margin="30px" textColor="tertiary" textSize={48}>
                        Yash Kulshrestha
                    </Text>
                </Slide>
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="js"
                    code={require('raw-loader!../assets/config.txt')}
                    ranges={[{ loc: [9, 18] }]} />
                <Slide>
                    <Text margin="36px" textColor="secondary" textSize={48}>
                        ✨Loaders✨
                    </Text>
                </Slide>
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="js"
                    code={require('raw-loader!../assets/identity-loader.txt')}
                    ranges={[{ loc: [0, 9] }]} />
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="js"
                    code={require('raw-loader!../assets/local-loader.txt')}
                    ranges={[{ loc: [0, 11] }]} />
                <Slide>
                    <Text margin="36px" textColor="secondary" textSize={48}>
                        Let's get fancy!
                    </Text>
                </Slide>
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="js"
                    code={require('raw-loader!../assets/remove-console.txt')}
                    ranges={[{ loc: [0, 9] }]} />
                <Slide>
                    <Markdown margin="36px" textColor="secondary" textSize={48}>
                        `loader-utils`
                    </Markdown>
                </Slide>
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="js"
                    code={require('raw-loader!../assets/loader-utils.txt')}
                    ranges={[
                        { loc: [0, 1] },
                        { loc: [3, 4] },
                        { loc: [6, 11] },
                        { loc: [12, 13] }
                    ]} />
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
                    <Link href="https://yashdalfthegray.github.io/talks/loader/notes" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Presentation Notes
                    </Link>
                </Slide>
            </Deck>
        );
    }
}
