import { useState, useCallback } from 'react';
import {
    ModalContent,
    ModalActions, Modal, Header, Button, Icon
} from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from "@apollo/client";
import { UPDATE_AVATAR } from "../../gql/user"
import Storage from '../../plugins/storage';
import { useNavigate } from 'react-router-dom';
const Avatar = ({ getAvatar, id, open, setOpen }) => {
    const [updateAvatar] = useMutation(UPDATE_AVATAR);
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(false);
    const onDrop = useCallback((oFile) => {
        const reader = new FileReader();
        reader.onload = () => {
            const sFile = reader.result.replace("data:", "").replace(/^.+,/, "");
            setFile(sFile)
        }
        reader.readAsDataURL(oFile[0]);
        // Do something with the files
    }, []);
    const sendFile = async () => {
        try {
            setStatus(!status);
            const response = await updateAvatar({
                variables: {
                    input: {
                        id,
                        file
                    }
                }
            });
            setStatus(false);
            setOpen(false);
            getAvatar(file);
        } catch (error) {
            console.error(error.message);
        }
    }
    console.log(file);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg',
        noKeyboard: true,
        multiple: false,
        onDrop
    });
    const navigate = useNavigate();
    const logout = () => {
        Storage.reset();
        navigate('/login')
    }
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='mini'
            trigger={<Button>Basic Modal</Button>}
        >
            <Header icon>
                <Icon name='upload' />
                Sube una foto de perfil
            </Header>
            <ModalContent className='flex flex-row flex-align-center flex-justify-center'>
                <Button secondary onClick={logout}>
                    <Icon name='logout' /> Cerrar sesion
                </Button>
                <Button {...getRootProps()} primary>
                    Seleccionar mi foto
                </Button>
                <input {...getInputProps()} />
            </ModalContent>
            <ModalActions className='flex flex-row flex-align-center flex-justify-center'>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Cancelar
                </Button>
                <Button disabled={status} loading={status} color='green' inverted onClick={sendFile}>
                    <Icon name='checkmark' /> Actualizar foto
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default Avatar;