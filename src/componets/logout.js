import { GoogleLogout } from 'react-google-login'

const clientId = "386097249349-l7bvpuv5fvqr984drb2vlm2ajlou8ib8.apps.googleusercontent.com"


function Logout() {

    const onSuccess = () => {
        console.log('Logout is Successfull:');
    };

    return (
        <div id='signIdButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;