import React, {useState} from "react";
import { Button } from "@material-ui/core";
import SignUp from "../SignUp/SignUp";
import { connect } from "react-redux"


const Login = ({
    user
}) => {
    const [openLogin, setOpenLogin] = useState(false)

    const handleLogin = () => {
        setOpenLogin(!openLogin)
    }

    return (
        <div>
        <Button
            color="secondary"
            variant="contained"
            onClick={handleLogin}>
               login
        </Button>
            {
                user
                    ?  null
                    : <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleLogin}>
                        register
                    </Button>
            }
            {
               openLogin && <SignUp setOpenLogin={setOpenLogin} />
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}


export default connect(mapStateToProps,null)(Login)