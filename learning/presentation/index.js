import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text
} from 'spectacle';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {};

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
            <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Managing Your Learning
                    </Heading>
                    <Text margin="30px 0 0" textColor="tertiary" size={4}>
                        Yash Kulshrestha
                    </Text>
                </Slide>
            </Deck>
        );
    }
}
