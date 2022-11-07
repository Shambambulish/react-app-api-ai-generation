# Simple program to AI generate images with either user-created or random prompts.

APIs used:
https://replicate.com/stability-ai/stable-diffusion
http://random-word-api.herokuapp.com/

Replicate's API does not have CORS enabled so I hosted a NodeJS server API of my own to send the requests.

Use `npm i` in both the root folder and the /server folder, then `npm start` in root and `npm run devStart` in /server

Replicate's API requires an API key to run, sign up on their site and find it on your account page.