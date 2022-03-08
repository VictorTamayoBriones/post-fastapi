import { Card } from '../../components/Card';
import { Container } from '../../components/Container';

export const AllPosts = () =>{
    return(
        <Container flex>
        <Card>
          <h2>This is the title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid mollitia. Dicta eligendi adipisci omnis? Vero quia accusantium veniam dolorem error quo culpa! Libero praesentium dicta quidem sunt tempora velit?</p>
          <button>View Post</button>
          <button>Edit Post</button>
        </Card>
      </Container>
    )
}