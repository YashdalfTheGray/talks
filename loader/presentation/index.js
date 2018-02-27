// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck,
    Heading,
    Slide,
    Text
} from 'spectacle';

// Import theme
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
            </Deck>
        );
    }
}
