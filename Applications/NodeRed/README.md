# Node-RED node for Orbiwise Application
This is Node-RED node which allows user to connect to Orbiwise Server and retrieve data via websocket.

## Prerequisite
* NodeJS
* Node-RED

## Install NodeJS
Node-RED requires NodeJS installation. Refer [here](https://nodejs.org/en/) to install latest NodeJS package.

## Install Node-RED
After NodeJs installation, open command window and run following command
```c
npm install -g --unsafe-perm node-red
```
**NOTE**: 'sudo' might be needed for Linux/MacOS.

> More detailed info please refer [here](https://nodered.org/docs/getting-started/installation#install-node-red)

## Run Node-RED

Once installed, you are ready to run Node-RED. Run following command in command window
```c
node-red
```
You can see some console output at your command window after running the command. If the output shows **Server now running at http://127.0.0.1:1880/**, navigate to 127.0.0.1:1880 in your web browser. Node-RED platform should appear. If everything is good, press `Ctrl+C` to close Node-RED. 

> More detailed info please refer [here](https://nodered.org/docs/getting-started/running)

## Install Node-RED orbiwise node

* After download or git clone Hackathon-Penang-2016.zip, go to **Hackathon-Penang-2016 > Applications > NodeRed > node-red-contrib-orbiwise**. In the directory containing package.json file (as it should be), run this command in command window: 
```c
npm link
```
* Go to Node-RED directory (normally `C:/Users/<Username>/.node-red` for Windows, `$HOME/.node-red` for Linux/OSX), open command window and run this command: 
```c
npm link node-red-contrib-orbiwise
```
* Install this node in the same Node-RED directory for base64 encode and decode function.
```c
npm install node-red-node-base64
```
> More info on [node-red-node-base64](https://github.com/node-red/node-red-nodes/tree/master/parsers/base64).

Run Node-RED. Navigate to //localhost:1880 at web browser. Check if there are **orbiwise** and **base64** node being added.

## How to use orbiwise node

1. Drag the **orbiwise** node and **debug** node to the dashboard. Attach these 2 nodes with link.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered1.png)
2. Double-click the orbiwise node, give a name to the node. Click on 'pencil' icon.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered2.png)
3. Enter your account username and password and click `Add` after finish. Finally click `Done` to complete configuration for orbiwise node.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered3.png)
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered4.png)
4. Double-click the **debug** node. Change output from `msg.payload` to `complete msg object`. Click `Done` to complete configuration for debug node.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered5.png)
5. Click `Deploy` to start the application.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered6.png)
6. With successful connection to Orbiwise server, 'connected' green dot will be seen underneath orbiwise node.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered7.png)

With the application running, user should be able to see messages at debug screen if there is any uplink or downlink event of your LoRa device.
