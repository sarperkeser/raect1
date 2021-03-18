import React, { Component } from 'react'
import UserConsumer from "../contex";

export default class user extends Component {
    onDeleteUser=(dispatch,e)=>{
        const {id}=this.props;
        dispatch({type:"DELETE_USER",payload:id});
    }
    render() {
        const {name,surname,age}=this.props
        //const {isvisible}=this.state
        return(
            <UserConsumer>
                {
                    value =>{
                        const {dispatch}=value;
                        return (
                            <div>
                                
                                <div>isim: {name}</div>
                                <div>surname: {surname}</div>
                                <div>age: {age}</div>
                                <div>isim: {name}</div>
                                <i onClick={this.onDeleteUser.bind(this,dispatch)}>X</i>
                                
                                
                                
                                
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}