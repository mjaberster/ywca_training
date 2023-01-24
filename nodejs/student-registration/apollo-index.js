const { ApolloServer, gql } = require('apollo-server');

const students = [
    {
        id: 1,
        name: 'Alice',
        grade: 'A',
    },
    {
        id: 2,
        name: 'Bob',
        grade: 'B',
    },
    {
        id: 3,
        name: 'Charlie',
        grade: 'C',
    },
];

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    grade: String!
  }

  type Query {
    students: [Student]
    student(id: ID!): Student
  }

  type Mutation {
    addStudent(name: String!, grade: String!): Student
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        students: () => students,
        student: (_, { id }) => students.find(student => student.id === id),
    },
    Mutation: {
        addStudent: (_, { name, grade }) => {
            const newStudent = {
                id: students.length + 1,
                name,
                grade,
            };
            students.push(newStudent);
            return newStudent;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});