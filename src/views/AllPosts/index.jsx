import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { useNavigate } from 'react-router-dom';

export const AllPosts = () =>{

    const navigate = useNavigate();

    const handleClick = (action) => action === 'view' ? navigate('/post/view/1') : action === 'edit' ? navigate('/post/edit/1') : alert('something run with problems');

    return(
        <Container flex>
        <Card>
          <h2>This is the title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid mollitia. Dicta eligendi adipisci omnis? Vero quia accusantium veniam dolorem error quo culpa! Libero praesentium dicta quidem sunt tempora velit?</p>
          <button onClick={ ()=>handleClick('view') } >View Post</button>
          <button onClick={ ()=>handleClick('edit') } >Edit Post</button>
        </Card>
      </Container>
    )
}