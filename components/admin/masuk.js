import { Formik, Form, Field } from 'formik';
import { supabase } from '../../utils/supabase/supabase-client';
import Head from 'next/head';

const init = { username : '', password : '' };

const prosesSignIn = async (values) => {
    const { error } = await supabase.auth.signIn({
        email : values.username,
        password : values.password,
    });

    if(error) alert(error.message);
    else location.replace('/admin');
     
}

export default function FormLogin(){
    return(
        <>
            <Head>
                <title>Login</title>
            </Head>    
            <div className='container my-5 py-5'>
                <img className="mb-4" src="/gambar/asd.jpg" alt="" width="112" height="97" />
                <Formik initialValues={init} onSubmit={prosesSignIn}>
                    {({ isSubmitting }) => (
                        <Form align='center'>
                            <h1 className='fw-bold py-5 text-darj'>Login</h1>
                            <table align='center'>
                                <tr>
                                    <td htmlFor='username'>Username</td>
                                    <td>:</td>
                                    <td>
                                    <Field placeholder="name@example.com" type='text' name='username'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td htmlFor='password'>Password</td>
                                    <td>:</td>
                                    <td>
                                    <Field placeholder="Password" type='password' name='password'/>
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <button className="btn btn-dark text-white"type='submit' disabled={isSubmitting}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>  
        </>
    )
}
