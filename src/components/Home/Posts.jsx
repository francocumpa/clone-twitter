import {
    CommentText,
    CommentGroup,
    CommentContent,
    CommentAvatar,
    CommentActions,
    CommentAction,
    CommentAuthor,
    Comment,
    Icon,
} from 'semantic-ui-react';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../gql/post';
const Posts = ({ auth }) => {
    const { data, loading } = useQuery(GET_POSTS);
    useEffect(() => {
        console.log(data);
        console.log(auth);

    }, [loading]);
    const Render = ({ data }) => {
        if (!data) return null;
        return (
            data.getPosts.map(item => (
                <CommentGroup key={item.id}>
                    <Comment>
                        <CommentAvatar as='a' src={`data:image/jpeg; base64,${item.idUser.avatar}`} />
                        <CommentContent>
                            <CommentAuthor>{item.idUser.username}</CommentAuthor>
                            <CommentText>
                                {item.post}
                            </CommentText>
                            <CommentActions>
                                <CommentAction>Agregar</CommentAction>
                                {
                                    auth.id === item.idUser.id && <CommentAction>Editar</CommentAction>

                                }
                                {
                                    auth.id === item.idUser.id && <CommentAction>Eliminar</CommentAction>

                                }
                            </CommentActions>
                        </CommentContent>
                    </Comment>
                </CommentGroup>
            ))
        )
    }
    return (
        <Render data={data} />
    )
}
export default Posts;