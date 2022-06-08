import { Container, UserContent } from '../Card/style'

interface CardData{
    username: string,
    avatarUrl: string,
    post: string
}

const Card = ({username, avatarUrl,post}: CardData) => {
    return(
        <Container>
            <UserContent>
            <img src={avatarUrl}/>
            <h3>{username}</h3>
            </UserContent>
            <p>{post}</p>
        </Container>
    )
}

export default Card