import axios from "axios"

export const useSavePost = (data) =>{

    const baseUrl = 'https://fastapi-post-array.herokuapp.com/'

    const savePost = async () =>{
        const res = await axios.post(`${baseUrl}post`, data);
        console.log(res)
    }
    
    savePost();
}