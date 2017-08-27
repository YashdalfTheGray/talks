# Managing Your Learning

## Introduction and Contact

* [Twitter](https://twitter.com/YashdalfTheGray)
* [Github](https://github.com/YashdalfTheGray)
* [Website](https://yashkulshrestha.carrd.co/)

## Opener

Show of hands, who wish they had something like Tony Stark's Jarvis? Who wouldn't want a personal assistant that can connect to things in your house and help you out whenever you need it. Matching Jarvis' intelligence and presence is still not fully out of the realm of science fiction, we can get pretty close. All it takes is some components, some duct tape here and some glue there.

Let's get into the details of making this thing work. We'll get started with making our house more intelligent. There are a lot of IoT devices that you can find for the low cost of $99 per thing (technical term) and spread across the house but instead of paying all that money, we can get the components and with a little work, get the same product for much less. Once we have devices that collect data from across the house, we'll use GitHub's Hubot to request that data and the finally, Slack to display that data in a nice way.

## Components involved

As mentioned above, we'll connect smart devices in our house to GitHub's Hubot project and then use slack to ask Hubot questions which will get us access to the data in a more conversational way than just a dashboard on the web or a readout display. Over the next few sections, we'll look at these pieces in detail and put it all together to ultimately achieve conversational user experience like Jarvis.

## IoT

First, we will look at how to make the house smarter. Like I mentioned, we could buy a bunch of smart devices but that would be a lot of money and would also make for a boring talk. Instead, let's see how the sausage is made. Now we could do this with many different platforms - Arduino, Raspberry Pi, 8266 but we'll go for the easiest setup with Particle. Particle offers a small, wi-fi connected board called Proton which is programmed similarly to an Arduino. To make a smart device, we'll connect it to some sensors like  DHT11 (digital temperature and humidity) and a photocell and set up the Photon to collect data from the sensors.

Once we've got the sensors connected, we'll write some Particle C++ code to wire our sensors up to the cloud. The code to set up the Particle Photon is included below.

```cpp
// include the Adafruit DHT11/DHT22 library
#include <Adafruit_DHT.h>
#include "Adafruit_DHT/Adafruit_DHT.h"

// define some constants
#define DHTPIN 5
#define DHTTYPE DHT11

// declare variables to hold our sensor values
int photoResistorValue = 0;
int tempSensorValue = 0;
int humiditySensorValue = 0;

// declare a DHT sensor type so that we can get data from it
DHT dht(DHTPIN, DHTTYPE);

// this method runs only once when the device boots up
void setup() {
    // register variables with the Particle cloud
    Particle.variable("lightSensor", photoResistorValue));
    Particle.variable("temperature", tempSensorValue));
    Particle.variable("humidity", humiditySensorValue));

    // Set up the sensors so that they can start logging
    pinMode(A0, INPUT);
    dht.begin();
}

// this method runs constantly
void loop() {
    // get readings from the connected sensors every second
    photoResistorValue = analogRead(A0);
    tempSensorValue = dht.getTempFarenheit();
    humiditySensorValue = dht.getHumidity();
    delay(1000);
}
```

## Hubot

Hubot is a project from GitHub which they use to automate their chatbot actions. They recently rewrote the underlying infrastructure and open sourced it so that anyone can get a Hubot instance up and running.

The first thing to do to set up Hubot is to get the Yeoman generator and then call the Yeoman generator to set up a dummy project. The commands involved are listed below.

```shell
npm install --global yo generator-hubot
mkdir myhubot
cd myhubot
yo hubot
```

This will set up an empty Hubot project in the `myhubot` directory. At this point, it's recommended that you initialize a git repository in the folder and make your first commit. This way, you can add version control to your app, roll back changes if things stop working and also put this code up on Github to share.

To get to the Hubot terminal prompt, just run `bin/hubot` from the `myhubot` folder and you'll be able to test out any commands that you created. Before running Hubot, know that Hubot uses Redis to store any data and will require Redis before you can get started with it. Redis is a lightweight key-value store and it can be installed via Homebrew by running `brew install redis`. You can then start the Redis server by running `redis-server` from a different Terminal tab.

You can also use the `--name` switch to give it a custom name and the `--adapter` switch to make HUbot reply to your favorite chat program. More on adapters later but let's write our first script! Once you set up Hubot, there will be a `scripts` folder that you can put all the custom scripts in. Let's write one that responds with a greeting.

```javascript
// a custom script is just a function that gets the Hubot instance
// passed in as an argument that we can put custom responses on
module.exports = robot => {
    // .respond() takes a regular expression as the message to respond to and
    // a function that gets a res object that you can use to send responses
    robot.respond(/(hi|hello|hey)/i, res => res.send('Hello, how are you?'));
}
```

There it is, our first custom Hubot response. Anything in the scripts folder will automatically be read in as a custom script and if there is a collection of responses that you find online like `hubot-darksky` for weather, you can include it in the array in the file called `external-scripts.json`.

## Slack

Now that we have our Hubot set up, let's connect it to Slack. The first thing we need is a Slack team or a community. You can either create a new one or add Hubot to any Slack team that you have admin rights to. You can find Hubot in Slack's App Directory under bots or by going [here](https://slack.com/apps/A0F7XDU93-hubot). Once there, log into a Slack team and add Hubot to your team. It'll ask for a name, a username and a picture and also provide you with an access token that we're going to use to get Hubot connected to Slack. Once you've got the bot registered, running Hubot with Slack is just a command away.

```shell
HUBOT_SLACK_TOKEN=xoxb-YOUR-TOKEN-HERE ./bin/hubot --adapter slack
```

Done and done. Now we have an IoT device connected to Hubot which is then connected to Slack. Your personal assistant is ready to go!

## Resources

* [Particle Photon](https://store.particle.io/products/photon)
* [Particle Photon Docs](https://docs.particle.io/reference/firmware/photon/)
* [DHT11 Temperature and Humidity Sensor](https://www.adafruit.com/product/386)
* [Photocell](https://www.adafruit.com/product/161)
* [Hubot Getting Started](https://hubot.github.com/docs/)
* [Slack App Directory - Hubot](https://slack.com/apps/A0F7XDU93-hubot)
* [Slack for Hubot](https://slackapi.github.io/hubot-slack/)
