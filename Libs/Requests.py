import requests
from dotenv import load_dotenv

config = load_dotenv("api_key")

class Requests():

    def __init__(self, api_url, method, data):
        self.headers = {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": config["API_KEY"]
        }
        self.url = api_url+method
        self.data = data

    def update(self):
        response = requests.request("POST", self.url, headers=self.headers, data=self.data)
        return response.status_code
