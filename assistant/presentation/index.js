import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import {
    Deck,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Slide,
    Text
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
    hubot: require('../assets/hubot.svg'),
    particle: require('../assets/particle.svg'),
    slack: require('../assets/slack.svg'),
    humidity: require('../assets/humidity.svg'),
    temperature: require('../assets/temperature.svg'),
    brightness: require('../assets/brightness.svg'),
    done: require('../assets/thats-all-folks.svg')
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

const sensorSlideNotes = [
    'Temperature icon created by Adrien Coquet from the Noun Project.',
    'Humidity icon created by Arthur Shlain from the Noun Project.',
    'Brightness icon created by Storm Icons from the Noun Project.'
].join('\n');

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
                <Slide>
                    <Image src={images.particle} width="35%" />
                </Slide>
                <Slide notes={sensorSlideNotes}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={images.temperature} />
                        <Image src={images.humidity} />
                        <Image src={images.brightness} width="20%"/>
                    </div>
                </Slide>
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="clike"
                    code={require('raw-loader!../assets/particle-code.ino')}
                    ranges={[
                        { loc: [0, 2] },
                        { loc: [3, 8] },
                        { loc: [9, 17] },
                        { loc: [18, 24] }
                    ]} />
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="clike"
                    code={require('raw-loader!../assets/particle-api.sh')}
                    ranges={[{ loc: [0, 3] }, { loc: [4, 8] }]} />
                <Slide>
                    <Image src={images.hubot} width="35%" />
                </Slide>
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="clike"
                    code={require('raw-loader!../assets/hubot-setup.sh')}
                    ranges={[{ loc: [0, 4] }]} />
                <CodeSlide
                    bgColor="#fff"
                    color="#555"
                    lang="js"
                    code={require('raw-loader!../assets/simple-hubot.txt')}
                    ranges={[{ loc: [0, 1] }, { loc: [1, 5] }, { loc: [5, 13] }]} />
                <Slide>
                    <pre><span style={{ color: '#00c853' }}>$</span> bin/hubot</pre>
                </Slide>
                <Slide>
                    <Image src={images.slack} width="35%" />
                </Slide>
                <Slide>
                    <List style={{ margin: '96px' }}>
                        <ListItem style={{ margin: '32px' }}>Team</ListItem>
                        <ListItem style={{ margin: '32px' }}>Integration</ListItem>
                        <ListItem style={{ margin: '32px' }}>Bot user</ListItem>
                        <ListItem style={{ margin: '32px' }}>Slack access token</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <pre>
                        <div><span style={{ color: '#00c853' }}>$</span> HUBOT_SLACK_TOKEN=xoxb-YOUR-TOKEN-HERE \</div>
                        <div style={{ textAlign: 'left', marginLeft: '58px' }}>bin/hubot --adapter slack</div>
                    </pre>
                </Slide>
                <Slide bgImage={images.done} />
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
            </Deck>
        );
    }
}
