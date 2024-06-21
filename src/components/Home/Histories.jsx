import { useEffect, useState } from 'react'
import {
    ListItem,
    ListHeader,
    ListContent,
    Image,
    List,
    Transition,
} from 'semantic-ui-react'

const Histories = () => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 500);
    }, []);
    return (
        <List horizontal className='flex flex-row'>
            {
                [...Array(10).keys()].map((i) => (
                    <Transition visible={ready} animation='scale' duration={500}>
                        <ListItem key={i} className='item-avatar'>

                            <Image avatar src='' />
                            <ListContent>
                                <ListHeader>Tom</ListHeader>
                                Top Contributor
                            </ListContent>
                        </ListItem>

                    </Transition>
                ))
            }

        </List>
    )
};

export default Histories;