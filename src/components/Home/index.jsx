import { useState } from "react";
import { Menu, MenuItem, Icon } from "semantic-ui-react";
import Navbar from "./Navbar";
import Search from "./Search";
import Posts from "./Posts";
import Messages from "./Messages";
import Notifications from "./Notifications";

import useAuth from "../../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth();
    const [active, setActive] = useState({
        name: 'home',
        component: null
    });

    const Render = () => active.component ? active.component : <Posts auth={auth} />;

    const handleClickMenu = (e, { name, component }) => {
        setActive({
            name,
            component
        });
    }

    return (
        <>
            <Navbar />
            <Render />
            <div className="items--container">
                <Menu attached='bottom' tabular widths='4'>
                    <MenuItem
                        component={<Posts auth={auth} />}
                        name='home'
                        active={active.name === 'home'}
                        onClick={handleClickMenu}
                    >
                        <Icon name='home' />
                    </MenuItem>

                    <MenuItem
                        component={<Search />}
                        name='search'
                        active={active.name === 'search'}
                        onClick={handleClickMenu}
                    >
                        <Icon name='search' />
                    </MenuItem>

                    <MenuItem
                        component={<Notifications />}
                        name='notifications'
                        active={active.name === 'notifications'}
                        onClick={handleClickMenu}
                    >
                        <Icon name='bell' />
                    </MenuItem>

                    <MenuItem
                        component={<Messages />}
                        name='messages'
                        active={active.name === 'messages'}
                        onClick={handleClickMenu}
                    >
                        <Icon name='mail' />
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
};

export default Home;