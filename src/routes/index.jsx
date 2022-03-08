import { Routes, Route } from 'react-router-dom';
import { AllPosts } from '../views/AllPosts';
import { ViewPost } from '../views/ViewPost';
import { EditPost } from '../views/EditPost';
import { CreatePost } from '../views/CreatePost';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={ <AllPosts/> } />
            <Route path='/post/view/:id' element={ <ViewPost/> } />
            <Route path='/post/edit/:id' element={ <EditPost/> } />
            <Route path='/post/new' element={ <CreatePost/> } />
        </Routes>
    )
}