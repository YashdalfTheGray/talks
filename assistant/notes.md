# Managing Your Learning

## Introduction and Contact

* [Twitter](https://twitter.com/YashdalfTheGray)
* [Github](https://github.com/YashdalfTheGray)
* [Website](https://yashkulshrestha.carrd.co/)

## Opener

Show of hands, who wish they had something like Tony Stark's Jarvis? Who wouldn't want a personal assistant that can connect to things in your house and help you out whenever you need it. Matching Jarvis' intelligence and presence is still not fully out of the realm of science fiction, we can get pretty close. All it takes is some components, some duct tape here and some glue there.

Let's get into the details of making this thing work. We'll get started with making our house more intelligent. There are a lot of IoT devices that you can find for the low cost of $99 per thing (technical term) and spread across the house but instead of paying all that money, we can get the components and with a little work, get the same product for much less. Once we have devices that collect data from across the house, we'll use GitHub's Hubot to request that data and the finally, Slack to display that data in a nice way.

## Components involved

As mentioned above, we'll connect smart devices in our house to GitHub's Hubot project and then use slack to ask Hubot questions which will get us access to the data in a more conversational way than just a dashboard on the web or a readout display. Over the next few sections, we'll look at these pieces in detail and put it all together to ulitmately achieve conversational user experience like Jarvis.

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

Getting started, chat adapters, running locally, running on Heroku, Docker?

## Slack

Setting up a slack team, adding your bot, giving it a cool name, constructing help

## Pull it all together

Any glue/duct tape that needs mentioning here

## That's all folks
