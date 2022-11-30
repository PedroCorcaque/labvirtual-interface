#!/usr/bin/env python3
import time
import serial
import argparse
from Requests import Requests

MONGODB_API = "https://data.mongodb-api.com/app/data-gvnvn/endpoint/data/beta/action/"
METHODS = {
    "update": "updateOne"
}

class LaboratorioVirtual(Requests):

    def __init__(self, port, baudrate, method, interval):
        self.port = port
        self.baudrate = baudrate
        self.method = method
        self.interval = interval
        self.count_error = 0

    def read_serial_port(self):
        ser = serial.Serial(self.port, self.baudrate)

        self.reading = ""
        self.reading = ser.readline()

        if self.reading == "":
            return False

        self.reading = self._binary_to_string()
        return True

    def _binary_to_string(self):
        data = self.reading.decode("utf-8")
        infos = data.split("+")
        
        return [str(i).replace("\r", "").replace("\n", "") for i in infos]

    def send_request(self):
        super().__init__(api_url=MONGODB_API, method=METHODS[self.method], data=self.reading)

    def main(self):
        try:
            while True:
                if self.read_serial_port():
                    self.send_request()

                    time.sleep(self.interval)
                else:
                    time.sleep(self.interval)
                    self.count_error += 1

                if self.count_error > 5:
                    return Exception("Maximum attempts achieved, please see the error.")
        except Exception as e:
            raise e

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="This software must be run from the interface.")
    parser.add_argument("-p", "--port", type=str, default="/dev/ttyUSB0", help="Serial port that the Arduino is connected")
    parser.add_argument("-b", "--baudrate", type=int, default=9600, help="The baudrate used in Arduino Serial communication")
    parser.add_argument("-m", "--method", type=str, default="update", help=f"You can use this methods: {METHODS}")
    parser.add_argument("-i", "--interval", type=float, default=600, help="Time in seconds to make another reading. Default: 600 seconds")
    args = vars(parser.parse_args())

    port = args["port"]
    baudrate = args["baudrate"]
    method = args["method"]
    interval = args["interval"]

    laboratorio_virtual = LaboratorioVirtual(port, baudrate, method, interval)
    laboratorio_virtual.main()
