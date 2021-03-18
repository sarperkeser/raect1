import React, { Component } from 'react'

const UserContext=React.createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case "DELETE_USER":
            return{
                ...state,
                users:state.users.filter(user => action.payload!==user.id)
            }
        default:
            return state
    }
}
export class UserProvider extends Component {
      state = {
    
    users : [
      {
        id :1,
        name:"sarper",
        surname:"keser",
        age:"20"
      },
      {
        id :2,
        name:"hasan",
        surname:"keser",
        age:"12"
      }
      
    ],
    dispatch : action=>{
        this.setState(state=>reducer(state,action))
    }
  }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer=UserContext.Consumer;

export default UserConsumer;