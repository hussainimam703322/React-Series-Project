import React from "react"
//context ek global provider hai
const UserContext = React.createContext();
export default UserContext;

/*<UserContext>   jo bhi component hai sabhi ko usercontext ka access mil jayega
    <Login/>
    <card>
       <data/>
    </card> 
  </UserContext> 
  
Usercontext ek method hai ,store kar liye variable me, aur is variable ko output me throw kar denge
har ek context provider hota hai 
UserContext ek provider(variable) hai q ki store kara diye hai 
*/    