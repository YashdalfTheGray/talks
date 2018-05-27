// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck,
    Heading,
    Image,
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
                    bgColor="#fff"
                    color="#007acc"
                    lang="js"
                    code={require('raw-loader!../assets/workbook.txt')}
                    ranges={[{ loc: [9, 18] }]} />
            </Deck>
        );
    }
}
