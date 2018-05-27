// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck,
    Heading,
    Image,
    Link,
    Slide,
    Text
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: '#2d2d2d',
        secondary: '#007acc',
        tertiary: '#007acc',
        quarternary: '#007acc'
    },
    {
        primary: 'Roboto, sans-serif',
        secondary: 'sans-serif'
    }
);

const images = {
    typescript: require('../assets/typescript-logo.svg')
};

const imageStyle = {
    paddingBottom: '20px'
};


export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['slide']}
                transitionDuration={500}
                progress="pacman"
                theme={theme}>
                <Slide>
                    <Image src={images.typescript} height="100px" style={imageStyle} />
                    <Heading textSize="32px" textColor="secondary">
                        Around Typescript in (less than) 60 minutes
                    </Heading>
                    <Text textColor="secondary" margin="16px" textSize="24px">
                        @yashdalfthegray
                    </Text>
                </Slide>
                <CodeSlide
                    lang="ts"
                    code={require('raw-loader!../assets/workbook.txt')}
                    ranges={[
                        { loc: [0, 3], title: 'Intro' },
                        { loc: [4, 11], title: 'Adding Types' },
                        { loc: [12, 19], title: 'Function Types' },
                        { loc: [20, 30], title: 'Better Function Types' }
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
                    <Link href="https://yashdalfthegray.github.io/talks/typescript/notes" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Presentation Notes
                    </Link>
                </Slide>
            </Deck>
        );
    }
}
