Bi-Directional TCP Chat Platform => End-to-End Encrypted
======================================

Implements the push architecture to broadcast the message to every online client. 
Only Authenticated Clients are allowed to send messages on private chat servers
In public chat mode, the message is sent to every client on the server
In private chat mode, only the authenticated clients will receive the broadcase. Note : private mode can be one to one messaging as well


As this is a backend focused project, there is a very simple and basic UI implemented

This Project is basically the implementation and the crux of the nodejs NET module

All messages are end to end encrypted, so that bad actors cant sniff messages

Add : uses tcp on transport layer to send messages, there is no http in use, and contrary to popular "chat apps" there are no websockets is use. Other options like webhooks and message queues are also not used
The main purpose of this very very simple app is to showcase the speed that raw tcp offers, even if that means that i have to create my own layer of protocols on top to handle some extra stuff

TODO : Clean up the readme file. State the purpose clearly, Add filesharing capabilities, End to end encryption, Webui, gui, 

This project is not getting the attention it deserves because of its simplicity lol
