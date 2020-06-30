import { Button, Input } from "@material-ui/core";
import React, {useState} from "react";
import "./SignUp.css"
import { connect } from "react-redux"
import { addUser } from "../../store/user/actions";

const SignUp = ({ setOpenLogin, addUser }) => {

    const [user, setUser] =  useState({});
    const [login, setLogin] =  useState('');
    const [password, setPassword] =  useState('');


    const handleClose = (e) => {
        setOpenLogin(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose()
        addUser(user)
    }

    const handleLogin = (e) => {
        const { value } = e.target
        setLogin(value)
        setUser({
            ...user,
            login: value
        })
    }

    const handlePassword = (e) => {
        const { value } = e.target
        setPassword(value)
        setUser({
            ...user,
            password: value})
    }

    return (
        <div className="SignUp">
            <form>
                <Button onClick={(e) => handleClose(e)}>close</Button>
                <Input style={{marginBottom: 40}} required={true} onChange={handleLogin} name={login} value={login} placeholder='Username' />
                <Input placeholder='Password' required={true} name={password} onChange={handlePassword}  value={password} />
                <Button onClick={handleSubmit} style={{marginTop: 30}} variant="contained" color="secondary">Submit</Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)