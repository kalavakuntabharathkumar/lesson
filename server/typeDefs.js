const { gql } = require('graphql-tag');
const typeDefs=gql`
 type Lesson { id: ID!, title: String!, subject: String!, gradeLevel: String!, scheduledDate: String!, durationMinutes: Int!, objectives: [String!]!, materials: [String!]!, status: String! }
 type ParentMessage { id: ID!, parentName: String!, parentEmail: String!, studentName: String!, subject: String!, body: String!, sentAt: String!, readAt: String }
 type DashboardSummary { totalLessons: Int!, readyLessons: Int!, totalMessages: Int!, unreadMessages: Int! }
 input LessonInput { title: String!, subject: String!, gradeLevel: String!, scheduledDate: String!, durationMinutes: Int!, objectives: [String!], materials: [String!] }
 input ParentMessageInput { parentName: String!, parentEmail: String!, studentName: String!, subject: String!, body: String! }
 type Query { lessons(status: String): [Lesson!]!, lesson(id: ID!): Lesson, messages: [ParentMessage!]!, dashboardSummary: DashboardSummary! }
 type Mutation { createLesson(input: LessonInput!): Lesson!, updateLessonStatus(id: ID!, status: String!): Lesson, sendParentMessage(input: ParentMessageInput!): ParentMessage! }
`;
module.exports={typeDefs};
