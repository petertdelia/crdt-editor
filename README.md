# crdt-editor

## Context

Project A (collaborative working application): Decentralization is a key feature of blockchain. For this project, please design and deploy a simple React-based web application that supports real-time collaborative editing from decentralized locations. The application should, at a minimum, enable users to upload files/contents and make modifications at the same time.

## Design

### Major design considerations

#### OT vs CRDT 
- OT (operational transformation) and CRDT (conflict-free replicated data type) are two techniques that enable real-time collaboration. 
- OT involves keeping track of a baseline state, on top of which is a series of operations representing user actions. The baseline and operations are transmitted between users; incoming operations are transformed to take into account local operations, and form a new baseline. Resolving differences between more than a pair of users is a much more difficult task. As a result, in multi-user instances, OT usually relies on a server to coordinate between groups of OT instances, each group consisting of just a client and server.
- CRDT is a newer idea, in which state is changed and transmitted between users, and the two states are merged.
- For our use case, Yjs is a CRDT implementation that supports offline editing and scales well with many users.

#### Rich text vs. plain text editor
- this will depend on what the use case of our app is: for code, plain text, for documents with semantic meaning, rich text.
- Yjs works well with Monaco, a code editor, so I've chosen that, but that could be switched out.

#### Persistent storage 
- for the requirement of being able to upload files, we will use a document store for its high availability and lack of strict schemas.

## Implementation

### using a React frontend w/ various libraries:
- The frontend will consist of a text editor and the option to upload a file
- Example workflow: A user uploads a file, which is parsed by the server into Yjs shared types. This data will then be sent over the network and displayed in the editor. Changes will be immediately propogated to all online users, and the option to save the file will be provided.

Libraries:
- @monaco/react
  - a monaco library that works as a React component
- y-monaco
  - binding that maps monaco to the Yjs data type
- y-websocket
  - A websocket library that enables communication of awareness data like cursors. Using websockets rather than webrtc enables saving of data to the database on the server side
- y-indexeddb
  - a browser store that can be used to persist offline changes


### using a node.js backend w/ libraries:
- yjs
- y-websocket
- 

## Future features
- user authentication

## Note on time spent
- I was able to spend part of a day on this project, maybe 4 hours total. I would like to spend more time in the future on the implementation to get it working.