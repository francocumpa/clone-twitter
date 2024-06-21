import { useState } from "react";
import { useMutation } from '@apollo/client'
import { useNavigate } from "react-router-dom";
import { Grid, Image, Form, Button, Modal, Message, Container } from "semantic-ui-react";
import BgLogin from "../../assets/img/bgLogin.jpg";
import useForm from "../../hooks/useForm";
import { NEW_USER, AUTHENTICATION } from "../../gql/user";
import Storage from "../../plugins/storage";
import useAuth from "../../hooks/useAuth";
import './Login.scss';
const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [addUser] = useMutation(NEW_USER);
    const [logeandome] = useMutation(AUTHENTICATION);

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({
        status: null,
        header: null,
        message: null
    });
    const [formLogin] = useForm({ email: '', password: '' });
    const [formLoginRegister] = useForm({ name: '', username: '', email: '', password: '' });


    const ShowMessage = () => {
        return message.status === 'SUCCESS' ? (
            <Container textAlign="center">
                <Message
                    compact
                    success
                    header={message.header}
                    content={message.message}
                />
            </Container>) : message.status === 'ERROR' ? (
                <Container textAlign="center">
                    <Message
                        compact
                        error
                        header={message.header}
                        content={message.message}
                    />
                </Container>) : null
    }
    console.log(formLogin);
    //const [formLogin, setFormLogin] = useState();
    const handleClickOpen = () => {
        setOpen(!open);
    }
    // const handleChange = ({ target: { name, value } }) => {
    //     console.log(name, value)
    //     //setFormLogin(formLogin => ({ ...formLogin, [name]: value }));
    // }
    const handleClickLogin = async (e) => {
        e.preventDefault();
        if (formLogin.handleErrors) {
            console.log('error')
            setMessage({
                status: 'ERROR',
                header: 'Faltan campos por llenar',
                message: 'El campo email o contrasenia se encuentran vacios'
            });
        } else {
            try {
                const response = await logeandome({
                    variables: {
                        input: formLogin.values
                    }
                })
                const { data: { authentication: { token } } } = response;
                Storage.set('token', token);
                setUser(token);
                navigate('/home')
                console.log(token);
                console.log('all good');
                setMessage({
                    status: 'SUCCESS',
                    header: 'Datos llenados exitosamente',
                    message: 'Espere unos segundos por favor'
                })
            } catch (error) {
                setMessage({
                    status: 'ERROR',
                    header: 'Ocurrio un error',
                    message: error.message
                });

            }
        }
    }
    const handleClickRegister = async (e) => {
        e.preventDefault();
        if (formLoginRegister.handleErrors) {
            console.log('error')
            setMessage({
                status: 'ERROR',
                header: 'Faltan campos por llenar',
                message: 'El campo email o contrasenia se encuentran vacios'
            });
        } else {
            try {
                const response = await addUser({
                    variables: {
                        input: formLoginRegister.values,

                    }
                });
                handleClickOpen();
                formLoginRegister.handleReset();
                console.log('all good')
                setMessage({
                    status: 'SUCCESS',
                    header: 'Datos llenados exitosamente',
                    message: 'Espere unos segundos por favor ...'
                })
            } catch (error) {
                setMessage({
                    status: 'ERROR',
                    header: 'Ocurrio un error',
                    message: error.message
                });
            }
        }
    }
    return (
        <>
            <Grid columns={2} className="login">
                <Grid.Row>
                    <Grid.Column>
                        <Image src={BgLogin} className="img"></Image>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle">
                        <ShowMessage />
                        <Form onSubmit={handleClickLogin}>
                            <Form.Field className="">
                                <Form.Input name="email"
                                    label='Email' placeholder='Email'
                                    onBlur={formLogin.handleTouched}
                                    onChange={formLogin.handleChange}
                                    value={formLogin.values.email}
                                    error={
                                        formLogin.touched.email &&
                                            formLogin.errors.email ?
                                            { content: 'tu correo esta mal escrito', pointing: 'below' } : null
                                    }></Form.Input>

                            </Form.Field>
                            <Form.Field className="">
                                <Form.Input name="password"
                                    onBlur={formLogin.handleTouched}
                                    onChange={formLogin.handleChange}
                                    value={formLogin.password}
                                    label='Password' placeholder='Password'
                                    type="password"
                                    error={
                                        formLogin.touched.password &&

                                            formLogin.errors.password ?
                                            { content: 'tu password esta mal escrito', pointing: 'below' } : null
                                    }></Form.Input>

                            </Form.Field>
                            <Button primary floated="left">Ingresar</Button>
                            <Button secondary floated="right" onClick={handleClickOpen}>Registrarme</Button>

                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Modal
                closeOnEscape={false}
                closeOnDimmerClick={true}
                open={open}
                size="mini">
                <Modal.Header>Registrar un nuevo usuario</Modal.Header>
                <Modal.Content>
                    <ShowMessage />
                    <Form onSubmit={handleClickRegister}>
                        <Form.Field>
                            <Form.Input name="name"
                                label='Nombre'
                                onBlur={formLoginRegister.handleTouched}
                                onChange={formLoginRegister.handleChange}
                                value={formLoginRegister.values.name}
                                error={
                                    formLogin.touched.name &&

                                        formLoginRegister.errors.name ?
                                        { content: 'tu correo esta mal escrito', pointing: 'below' } : null
                                }
                                placeholder='Nombre'></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="username"
                                label='Username'
                                onBlur={formLoginRegister.handleTouched}
                                onChange={formLoginRegister.handleChange}
                                value={formLoginRegister.values.username}
                                error={
                                    formLogin.touched.username &&

                                        formLoginRegister.errors.username ?
                                        { content: 'tu correo esta mal escrito', pointing: 'below' } : null
                                }
                                placeholder='Username'></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="email"
                                label='Email'
                                onBlur={formLoginRegister.handleTouched}
                                onChange={formLoginRegister.handleChange}
                                value={formLoginRegister.values.email}
                                error={
                                    formLogin.touched.email &&
                                        formLoginRegister.errors.email ?
                                        { content: 'tu correo esta mal escrito', pointing: 'below' } : null
                                }
                                placeholder='Email'></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="password"
                                label='Password'
                                onBlur={formLoginRegister.handleTouched}
                                onChange={formLoginRegister.handleChange}
                                value={formLoginRegister.values.password}
                                error={
                                    formLogin.touched.password &&
                                        formLoginRegister.errors.password ?
                                        { content: 'tu correo esta mal escrito', pointing: 'below' } : null
                                }
                                placeholder='Password'
                                type="password"></Form.Input>
                        </Form.Field>

                        <Modal.Actions>
                            <Button secondary onClick={() => handleClickOpen()}>Cancelar</Button>
                            <Button primary type="submit">Registrar</Button>

                        </Modal.Actions>
                    </Form>

                </Modal.Content>

            </Modal>
        </>
    )
};

export default Login;