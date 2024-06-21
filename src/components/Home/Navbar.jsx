import { Header, Image, Divider } from 'semantic-ui-react';
import user from "../../assets/img/user.jpg";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from 'react';
import Avatar from './Avatar';
import Histories from './Histories';
const Navbar = () => {
    const { auth } = useAuth();
    const [open, setOpen] = useState(false);
    const [sFile, setFile] = useState(false);
    useEffect(() => {
        console.log(auth);
    })
    const getAvatar = (sFile) => {
        setFile(sFile)
    }
    console.log(auth);
    return (
        <>
            <Header as='h2'>
                <Image onClick={() => setOpen(!open)} circular
                    src={
                        sFile ? `data: image/jpeg; base64, ${sFile}` :
                            auth.avatar ? `data: image/jpeg; base64, ${auth.avatar}` :
                                user
                    } /> {auth.name}
            </Header>
            <Avatar getAvatar={getAvatar} id={auth.id} open={open} setOpen={setOpen} />
            <Divider />
            <Histories />
        </>
    )
};
export default Navbar;