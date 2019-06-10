# **GRAPHQL-BASE-FILES**
Create a base files and folders for graphql 

Install:  
`yarn add graphql-base-files --dev`  
or  
`npm install graphql-base-files --save-dev`


Run in your terminal `graphql-base-files cf posts`  
This command create files and folders:  
```
Posts/
  Posts.gql
  Posts.js
  PostsMutations.gql
  PostsQueries.gql
  PostsSubscriptions.gql
  PostsInputs.gql
  mutations/
  queries/
  subscriptions/
```



> ## **CLI**

| Arg  | Alias  | Description  | Default   |
|---|---|---|---|
| create-files | cf | Create files and folders by arg name | null |
| --dev | -d  | Remove folders by base option | false |
| --init | -i | Init structure with folders: options.base -> scalar, enum, types, interfaces | false |
| --base | -b | Path to schema dir | ./src/graphql |
| --schemaExtension | -se | Extension of graphql files: .gql, .graphql, etc...', 'gql | gql |
| --resolverExtension | -re | Extension of resolvers files: .js, .graphql, etc... | js |
| --version | -V | Output usage information |
| --help | -h | Output the version number |

