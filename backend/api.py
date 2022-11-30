#!/usr/bin/env python3
import os, sys
from flask import Flask, request

app = Flask(__name__)

windows_path = r"D:\Dev\labvirtual-interface\Libs\LaboratorioVirtual.py"

@app.route("/run_read_serial", methods=["POST"])
def read_serial():
    req = request.get_json()
    port = req["port"]
    baudrate = req["baudrate"]
    method = req["method"]
    interval = req["interval"]

    try:
        response_code = os.system("python "+windows_path+" -p {} -b {} -m {} -i {}".format(port, baudrate, method, interval))

        return "The read_serial script is running.", 200
    except Exception as err:
        return str(err), 500

if __name__ == "__main__":
    app.run(host="localhost", port=5818)