import { useState } from "react"
import { useSavePost } from "../../hooks/useSavePost";

export const CreatePost = () =>{

    const savePost = useSavePost;

    const[newPost, setNewPost]=useState({
        title: '',
        author: '',
        content: '',
        createdAt: new Date,
        publishedAt: null,
        published: false
    });

    const handleChange = (action, e) =>{
        if( action === 'title' ){
            setNewPost({
                ...newPost,
                title: e.target.value
            })
        }else if( action === 'author' ){
            setNewPost({
                ...newPost,
                author: e.target.value
            })
        }
        else if( action === 'content' ){
            setNewPost({
                ...newPost,
                content: e.target.value
            })
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        savePost(newPost)
    }

    return(
        <form onSubmit={ handleSubmit } >
            <input type="text" placeholder="Title" value={newPost.title} onChange={ (e)=>handleChange('title', e) } />
            <input type="text" placeholder="Author" value={newPost.author} onChange={ (e)=>handleChange('author', e) } />
            <input type="text" placeholder="Content" value={newPost.content} onChange={ (e)=>handleChange('content', e) } />
            <button>Create New Post</button>
        </form>
    )
}