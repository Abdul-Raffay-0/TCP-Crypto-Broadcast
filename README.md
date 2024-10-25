Bi-Directional TCP Chat Platform => End-to-End Encrypted
======================================

Implements the push architecture to broadcast the message to every online client. 
Only Authenticated Clients are allowed to send messages on private chat servers
In public chat mode, the message is sent to every client on the server
In private chat mode, only the authenticated clients will receive the broadcase. Note : private mode can be one to one messaging as well


As this is a backend focused project, there is a very simple and basic UI implemented

This Project is basically the implementation and the crux of the nodejs NET module

All messages are end to end encrypted, so that bad actors cant sniff messages
