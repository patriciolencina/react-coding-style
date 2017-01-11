# React Code-Challenge

#### The Problem

In simple terms, I need to display an array of nodes and edges(From a json file) on the screen and allow users to comment on the nodes and edges. Also need to make sure the data is persisted and the UI is user friendly.

#### The Solution

I approached sloving this problem in the folowing steps:

1. Search for a libary which has similar functionality to the Graph Visualization tool required.
2. Customize that library if needed and impliment the basic layout without the comments feature.
3. For the comments feature, since this a test task, I store the data in localstorage. I would create two arrays one for
   comments and one for answers. And link them through id's for example. Every answer would have the id of the coment it
   is associated with and each comment would have an id for the node it is associated with.
