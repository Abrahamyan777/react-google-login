import { useState } from 'react';
import { GoogleLogin } from 'react-google-login'
import css from './login.module.css'

const clientId = "386097249349-l7bvpuv5fvqr984drb2vlm2ajlou8ib8.apps.googleusercontent.com"

function Login() {
    const [user, setUser] = useState(null)
    const [post, setPost] = useState(null)
    const [comm, setCommets] = useState(null)
    const [stayle, setStayle] = useState(true)

    const onSuccess = (res) => {
        setUser(res)
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => setPost(data.posts));

        fetch('https://dummyjson.com/comments')
            .then(res => res.json())
            .then((com) => setCommets(com.comments));
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
        <div id='signIdButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true} />
            {
                user &&
                <div>
                    <ul>
                        {
                            post &&
                            post.map(({ title, id }, i) => {
                                return <li key={id} 
                                    className={!stayle ? css.comments : css.noComments}
                                    onClick={() => setStayle(!stayle)}
                                >
                                    <a href='#'>{title}</a>
                                    <ul>
                                        {
                                            comm &&
                                            comm.filter(co => co.id === post[i].id).map((filteredName) => (
                                                <li key={id}> {filteredName.body}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Login;