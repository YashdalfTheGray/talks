// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Code,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Slide,
    Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: '#1976D2',
        secondary: '#FFF',
        tertiary: '#FFF',
        quarternary: '#FFF'
    },
    {
        primary: 'Roboto, sans-serif',
        secondary: 'sans-serif'
    }
);

const images = {
    react: require('../assets/react-logo-white.svg')
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
                    <Image src={images.react} height="200px"/>
                    <Heading size={2} textColor="white">
                        Introduction to React
                    </Heading>
                    <Text textColor="white" margin="16px" textSize="24px">
                        @yashdalfthegray
                    </Text>
                </Slide>
                <Slide>
                    <Text textColor="white">
                        A library for building user interfaces.
                    </Text>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="white">
                        Basic Syntax
                    </Heading>
                    <CodePane
                        margin="32px"
                        lang="javascript"
                        source={require('raw-loader!../assets/basic-syntax.example')} />
                </Slide>
                <Slide>
                    <Heading size={4} textColor="white" margin="32px">
                        JSX
                    </Heading>
                    <Layout>
                        <Fill>
                            <CodePane
                                lang="jsx"
                                source={require('raw-loader!../assets/jsx-es5.example')} />
                        </Fill>
                        <Fill>
                            <CodePane
                                lang="jsx"
                                source={require('raw-loader!../assets/jsx-es6.example')} />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Text textColor="white">
                        It's components all the way down.
                    </Text>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="white">
                        Data Flow
                    </Heading>
                    <List margin="32px">
                        <ListItem textColor="white"><Code textColor="white">this.props</Code></ListItem>
                        <ListItem textColor="white">Event Handlers</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="white">
                        Component State
                    </Heading>
                    <List margin="32px">
                        <ListItem textColor="white"><Code textColor="white">this.state</Code></ListItem>
                        <ListItem textColor="white"><Code textColor="white">this.setState()</Code></ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="white" margin="32px">
                        Performance
                    </Heading>
                    <Text textColor="white" margin="32px">
                        Browser DOM
                    </Text>
                    <Text textColor="white" margin="32px">
                        Optimizations?
                    </Text>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="white">
                        Virtual DOM
                    </Heading>
                    <Text textColor="white" margin="32px">
                        Diffin' all over the world!
                    </Text>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="white">
                        More Resources
                    </Heading>
                    <List margin="32px">
                        <ListItem textColor="white">
                            <Link href="https://facebook.github.io/react/docs/tutorial.html" target="_blank" textColor="secondary">
                                React Tutorial
                            </Link>
                        </ListItem>
                        <ListItem textColor="white">
                            <Link href="https://github.com/kohei-takata/learnyoureact" target="_blank" textColor="secondary">
                                Learn You React
                            </Link>
                        </ListItem>
                        <ListItem textColor="white">
                            <Link href="https://github.com/asbjornenge/thinking-in-react" target="_blank" textColor="secondary">
                                Thinking in React
                            </Link>
                        </ListItem>
                        <ListItem textColor="white">
                            <Link href="http://redux.js.org/" target="_blank" textColor="secondary">
                                Redux
                            </Link>
                        </ListItem>
                    </List>
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
                    <Link href="https://yashdalfthegray.github.io/talks/react/notes" target="_blank" textColor="tertiary" textSize={48} margin="24px">
                        Presentation Notes
                    </Link>
                </Slide>
            </Deck>
        );
    }
}
