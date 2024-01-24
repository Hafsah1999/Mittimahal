



import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required').min(3, 'Too short')
        .max(20, 'Too long'),
    email: Yup.string().required('Required').email('Invalid email'),
    password: Yup.string().required('Required').min(6, 'Too short').max(12, "Too Long")
})



const Login = () => {
    const navigate = useNavigate();


    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: (values) => {
            console.log(values)
            navigate('/Shop');

        },

        validationSchema: LoginSchema

    })
    return (
        <>


            <div className="row bg-img-login d-flex align-items-center">

                <div className="col d-flex align-items-center justify-content-center">

                    <div className="card shadow-lg bg-light w-50  " style={{  border: "none" }}>
                        <div className="row" >
                            <div className="col-md-2 bg-warning" style={{ height: "400px" }}>
                            </div>
                            <div className="card shadow mt-5 bg-dark d-flex justify-content-center ms-4" style={{ height: "300px", width: "200px", position: "absolute" }}>

                            </div>
                            <div className="card  shadow d-flex justify-content-center " style={{ height: "200px",backgroundColor: "rgb(24, 67, 122)",marginTop:"100px", width: "100px", position: "absolute" }}>

</div>
                            <div className="col-md-2 " style={{ height: "400px", backgroundColor: "lightblue" }}>
                            </div>
                            <div className="col-md-8" style={{ height: "400px", backgroundColor: "lightblue" }}>
                                <h1 className=" mt-5 ms-5 fw-bold mb-4" style={{ fontFamily: "serif" }}>Welcome to <br />Mitti Mahal</h1>
                                <form className='w-75 ms-5' onSubmit={loginForm.handleSubmit}>
                                    <span style={{ color: 'red', fontsize: '10' }}>{loginForm.touched.email && loginForm.errors.email}</span>

                                    <input type="email" placeholder="Email" className="form-control text-dark bg-transparent mb-3 input-login " id="email" value={loginForm.values.email} onChange={loginForm.handleChange} />
                                    <span style={{ color: 'red', fontsize: '10', }}>{loginForm.touched.password && loginForm.errors.password}</span>

                                    <input type="password" placeholder="password" className="form-control  input-login text-white bg-transparent" id="password" value={loginForm.values.password} onChange={loginForm.handleChange} />

                                    <button className="btn btn-dark w-100   mt-4 fs-4 p-1 text-white fw-semibold" type='submit' style={{ fontFamily: "serif" }}>Log In</button>


                                </form>
                            </div>
                        </div>





                    </div>
                </div>

            </div>
          
        </>

    )
}

export default Login



