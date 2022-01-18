import React, { Component} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import{ createPost } from '../graphql/mutations'
import{ onCreatePost } from '../graphql/subscriptions'

class CreatePosts extends Component {
    state = {
        postOwnerId:"",
        postOwnerUsername:"",
        postTitle:"",
        postBody:""
    }
    // componentDidMount = async ()=>{
    //     this.getPosts()
    //     this.createPostListener = API.graphql(graphqlOperation(onCreatePost)).subscribe({
    //         next: postData =>{
    //             const newPost = postData.value.data.onCreatePost
    //             const prevPosts=this.state.post.filter(post =>post.id !== new post.id )
    //             const updatedPosts = [newPost, ...prevPosts]
    //             this.setSatet({posts:updatedPosts})
    //         }})
        
    // }
    // componentWillUnmount (){
    //     this.createPostListener.unsubscribe()
    // }
    handleChangePost = event => this.setState({
        [event.target.name]:event.target.value})

    
    handleAddPost = async event =>{
        event.preventDefault()

        const input = {
            postOwnerId:"sfsdf34",//this.state.postOwnerId,
            postOwnerUsername:"qwg568",//this.state.postOwnerUsername,
            postTitle: this.state.postTitle,
            postBody:this.state.postBody,
            createdAt : new Date().toISOString()
        }
        await API.graphql(graphqlOperation(createPost, {input}))
        this.setState({postTitle:"",postBody:""})
    }
     render(){
         return (
             <form className="add-post"
             onSubmit={this.handleAddPost}>
                    <input style ={{ font:'19px'}}
                    type="text" placeholder="Title"
                    name="postTitle"
                    value={this.state.postTitle}
                    onChange={this.handleChangePost}
                    required/>

                    <textarea type="text"
                    name="postBody"
                    rows="3"
                    cols="40"
                    requiredplaceholder="New blog Post"
                    value={this.state.postBody}
                    onChange={this.handleChangePost}
                    />
                    <input type="submit"
                    className="btn"
                    style={{ fontSize: '19px' }}
                    />


             </form>
         )
         
     }
}
export default CreatePosts;