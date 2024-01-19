


    
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
            <div>
    
                    {/* <div className="card  bg-dark bg-opacity-25" style={{height:"100vh",border:"none"}}> */}
    
                    <div className="row bg-img-login">
                        <div className="col">
                            <div className="card  bg-dark bg-opacity-25  " style={{height:"80vh",border:"none"}}>
    
    
    
    
                                <div className="card login-card p-5">
                                <h1 className=" mt-5 text-white fw-bold mb-4" style={{fontFamily:"serif"}}>Welcome Back</h1>

                                    <form className='w-75 ' onSubmit={loginForm.handleSubmit}>
                                        <span style={{ color: 'red', fontsize: '10' }}>{loginForm.touched.email && loginForm.errors.email}</span>
    
                                        <input type="email" placeholder="Email" className="form-control text-white bg-transparent mb-3 input-login " id="email" value={loginForm.values.email} onChange={loginForm.handleChange} />
                                        <span style={{ color: 'red', fontsize: '10',  }}>{loginForm.touched.password && loginForm.errors.password}</span>
                                      
                                        <input type="password" placeholder="password" className="form-control  input-login text-white bg-transparent" id="password" value={loginForm.values.password} onChange={loginForm.handleChange} />
    
                                         <button className="btn btn-light w-100   mt-4 fs-4 p-1 text-secondary fw-semibold" type='submit' style={{  borderRadius: "20px", fontFamily: "serif" }}>Log In</button>
                                     
    
                                    </form>
                                </div>
    
    
    
                            </div>
                            {/* </div> */}
                        </div>
                        {/* <div className="col-md-6">
                            <div className="bg-img-login"></div>
                        </div> */}
                    </div>
                </div>
        )
    }
    
    export default Login
        
    
    
    