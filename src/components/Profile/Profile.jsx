import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { quitUser } from "../../store/user/actions";


const Profile = ({
    user, quitUser
}) => {

    const handleLogin = () => {
        quitUser(null)
    }

    return (
        <div>
        {
            user
            ? <Button onClick={handleLogin} style={{fontSize: 18}} color="secondary">{user.login}</Button>
            : null
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        quitUser: (user) => dispatch(quitUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)