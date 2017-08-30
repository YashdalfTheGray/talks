#include <Adafruit_DHT.h>
#include "Adafruit_DHT/Adafruit_DHT.h"

int light = 0;
int temp = 0;
int humidity = 0;

DHT dht(5, DHT11);

void setup() {
    Particle.variable("light", light));
    Particle.variable("temp", temp));
    Particle.variable("humidity", humidity));

    pinMode(A0, INPUT);
    dht.begin();
}

void loop() {
    light = analogRead(A0);
    temp = dht.getTempFarenheit();
    humidity = dht.getHumidity();
    delay(1000);
}
