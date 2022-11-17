import os
from flask import Flask

app = Flask(__name__)

@app.route("/run_read_serial", methods=["GET"])
def read_serial():
    response_code = os.system("~/laboratorio_virtual/LabVirtual-AgroIOT/read_serial.py")

    if response_code == 0:
        return "The read_serial script is running.", 200
    else:
        return "An error occured", 500

if __name__ == "__main__":
    app.run(host="localhost", port=5818)