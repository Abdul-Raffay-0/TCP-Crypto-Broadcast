Bi-Directional TCP WebSockets Platform implemented with a Vector Database
======================================

A **bi-directional conversation platform** built in vanilla Node.js and deployed on **AWS**, featuring **end-to-end encryption**, real-time langauge translation for multilingual users, and advanced search capabilities.

Key Features
------------

*   **Bi-Directional Communication**: Real-time chat using TCP WebSockets for instant messaging. Blazingly fast because of minimal abstractions, No sockets.io. No express.js
    
*   **End-to-End Encryption**: Secure conversations ensuring data privacy between participants.
    
*   **Translate as You Go**: Powered by **OpenAI's API**, enabling seamless multilingual communication in real-time.
    
*   **User Presence**: Similar to WhatsApp, users can see whether others are online or offline.
    
*   **Anonymous & Authenticated Chat**:
    
    *   **Anonymous Mode**: Chat temporarily without authentication.
        
    *   **Authenticated Mode**: Log in via Google accounts, with session-based authentication.
        
*   **Advanced Search**: Leveraging **Pinecone (Vector Database)** for enhanced search functionality across conversations.
    
*   **Timezone Awareness**: Automatically adjusts timestamps to each user's local timezone.
    

Tech Stack
----------

*   **Backend**: Node.js (WebSockets, TCP, Encryption, Authentication)
    
*   **Cloud**: AWS for deployment
    
*   **Database**: Pinecone (Vector Database) for search indexing and storage (upto 7 days storage due to cost constraints)
    
*   **Frontend**: React.js + Tailwind CSS
