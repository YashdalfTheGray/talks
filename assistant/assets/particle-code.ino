#include <Adafruit_DHT.h>
#include "Adafruit_DHT/Adafruit_DHT.h"

int photoResistorValue = 0;
int tempSensorValue = 0;
int humiditySensorValue = 0;

DHT dht(5, DHT11);
