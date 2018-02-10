# Ionic3MFP8_Example
This is a sample application that using Ionic 3 and IBM Mobile First 8.0. It has provider that connects to MFP Adapter

$ node -v
v6.10.1 (Also works in LTS 8.9)

$ npm -v
3.10.10

$ ionic -v
3.19.1


## Adapter used in this example
https://github.com/soumyarout/ReadPostsAdapter

## Running exmaple

1. Build and deploy adapter (ensure MFP server is running)

`mfpdev adapter build`
`mfpdef adapter deploy` 

2. verify in console


3. In Ionic3MFP8_Example/

run 

`npm install`. 
`ionic cordova platform add` .
`ionic cordova build <Platform_Name>`. 
`mfpdev app register` .
`mfpdev app preview` .

