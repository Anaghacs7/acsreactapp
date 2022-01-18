import React, { Component} from 'react';
import { deletePost } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
class DeletePosts extends Component {
    handleDeletePost= async postId =>{
        const input = {
            id:postId
        }
        await API.graphql(graphqlOperation (deletePost,{input}))
    }
     render(){
         const post = this.props.data
         return (
             <button onClick ={()=> this.handleDeletePost(post.id)}> Delete</button>
         )
         
     }
}
export default DeletePosts;