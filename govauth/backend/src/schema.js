const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {       
    Person(id: ID!): Person
    Persons(limit: Int): [Person]

    Service(id: ID!): Service
    Services(limit: Int): [Service]

    Role(id: ID!): Role
    Roles(limit: Int): [Role]

    Business(id: ID!): Business
    Businesses(limit: Int): [Business]

    Idp(id: ID!): Idp
    Idps(limit: Int): [Idp]

    GraphEdge(id: ID!): GraphEdge
    GraphEdges(type: String, a: String, b: String): [GraphEdge]

    BusinessServices( business: ID, service: ID): [BusinessService]
    BusinessService(id: ID!): BusinessService

    BusinessPersons( business: ID, person: ID): [BusinessPerson]
    BusinessPerson(id: ID!): BusinessPerson

    BusinessPersonRequests( type: String, business: ID, person: ID): [BusinessPersonRequest]
    BusinessPersonRequest(id: ID!): BusinessPersonRequest

  }
  type Mutation {
    createPerson(input:PersonInput): Person        
    updatePerson(input:PersonInput): Person

    createService(input:ServiceInput): Service
    updateService(input:ServiceInput): Service
    createBusiness(input:BusinessInput): Business
    updateBusiness(input:BusinessInput): Business

    createIdp(input:IdpInput): Idp
    updateIdp(input:IdpInput): Idp

    createGraphEdge(input:GraphEdgeInput): GraphEdge    
    deleteGraphEdge(id: ID!): GraphEdge

    createBusinessService(input:BusinessServiceEdgeInput): BusinessService    
    createBusinessPerson(input:BusinessPersonEdgeInput): BusinessPerson   
    createPersonBusinessRequest(input:PersonBusinessRequestEdgeInput): BusinessPersonRequest   


    

  } 
  
  type BusinessService {
    id: ID!    
    business: Business
    service: Service 
    date:String    
}   
type BusinessPerson {
    id: ID!    
    business: Business
    person: Person 
    role: Role 
    date:String    
}   
type BusinessPersonRequest {
    id: ID!    
    business: Business
    person: Person 
    role: Role 
    date:String    
}   
type GraphEdge {
    id: ID!
    type: String
    a: String
    b: String 
    date:String    
    bucket: String
}   
type Person {  
    id: ID,        
    name:String        
    email:String     
    mobile:String         
}     
type Service {  
    id: ID!        
    name: String 
    bucket: String       
}
type Role {  
    id: ID!        
    name: String 
    bucket: String       
}
type Business {  
    id: ID! 
    name: String   
    abn: String
    bucket: String
}
type Event {  
    id: ID!,
    type: String
    name: String
    document_id: String
    date: String 
}
type Idp {  
    id: ID        
    name: String
}
input PersonInput { 
        id: ID,        
        name:String        
        email:String  
        mobile:String     
        date:String    
    }
input ServiceInput { 
        id: ID,        
        name: String 
    }
input BusinessInput { 
        id: ID,    
        name: String   
        abn: String  
        date: String
        type: String
    }
input IdpInput { 
        id: ID     
        name: String
    }
input GraphEdgeInput { 
        id: ID
        type: String
        a: String
        b: String 
        role: String 
        date:String               
    }
input BusinessServiceEdgeInput { 
    id: ID
    type: String
    business: String
    service: String         
    date:String             
}
input BusinessPersonEdgeInput { 
    id: ID  
    type: String
    business: String
    person: String 
    role: String 
    date:String               
}

input PersonBusinessRequestEdgeInput { 
    id: ID
    type:String
    business: String
    person: String 
    role: String 
    date:String          
}




`;
module.exports = typeDefs;
