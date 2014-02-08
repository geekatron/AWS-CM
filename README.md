AWS-CM
======

AWS Content Management service. Sample UI and deployment to Heroku.

# Configuration for AWS-CM Deployment

Endpoint configuration driven by Environmental Variables. Please see below for more details.

## Environment Variables

### Amazon AWS Configuration
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

## Sample Environment Variables

### Amazon AWS Configuration
- AWS_ACCESS_KEY_ID=<your AWS key>
- AWS_SECRET_ACCESS_KEY=<your AWS key's secret>

## Heroku Specific Information
### Environment Configuration
Please see below regarding how to set environment variables in Heroku
- heroku config:set ENVVARIABLE=VALUE

### Example Initial Configuration
heroku config:set --app aws-cm NODE_ENV=development AWS_ACCESS_KEY_ID=<your AWS key> AWS_SECRET_ACCESS_KEY=<your AWS key's secret>

# Configuration for WebStorm Node.js Project

WebStorm Node.js project configuration. Please see below for more details.

## Node.js Configuration

### Sample Project Configuration
* Name:
    + server.js
* Path to node:
    + /usr/local/bin/node
* Node Parameters:
    + --debug
* Working directory:
    + /Users/geekatron/workspace/Webstorm/Planet R&D/AWS-CM
* Path to Node App JS File:
    + server.js
* Application Parameters:
    + N/A
#### Sample Environment Variables
* AWS_ACCESS_KEY_ID
	    + <your AWS key>
* AWS_SECRET_ACCESS_KEY
	    + <your AWS key's secret>
