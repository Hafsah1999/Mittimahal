import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

// step4: validation schema
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
        .min(3, 'Too short')
        .max(20, 'Too long'),
    email: Yup.string()
        .email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too short')
        .max(20, 'Too long')
        .required('Required'),
})


const Signup = () => {
    const navigate = useNavigate();
    //step1 : formik initialization
    const SignupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {

            console.log(values);

            const res = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(res.status)
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Success',
                    text: 'You have been successfully signed up!',
                })
                navigate('/Login');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })

            }
        },
        validationSchema: SignupSchema
    })
    return (


        <div className="row bg-img-login d-flex align-items-center">

            <div className="col d-flex align-items-center justify-content-center">

                <div className="card shadow-lg bg-light w-50  " style={{ border: "none" }}>
                    <div className="row" >
                        <div className="col-md-2 bg-warning" style={{ height: "400px"}} >
                        </div>
                        <div className="card  mt-5 bg-dark d-flex justify-content-center ms-4" style={{ height: "300px", width: "220px", position: "absolute" }}>

                            <p style={{ fontFamily: "cursive" }} className="text-white fs-5 text-center">Already have an account click below to continue using the service.</p>
                            <Link to='/Login'>  <button type='submit' className='btn btn-light-outline text-white w-100   mt-3 fs-4 p-1 fw-semibold' style={{ fontFamily: "serif" }}>Login</button>
                            </Link>
                        </div>
                        <div className="col-md-2 " style={{ height: "400px", backgroundColor: "lightblue" }}>
                        </div>
                        <div className="col-md-8" style={{ height: "400px", backgroundColor: "lightblue" }}>
                            <h1 className=" mt-5 ms-5 fw-bold mb-4" style={{ fontFamily: "serif" }}>Create Account</h1>
                            {/* step3 : handling when submit */}
                            <form className='w-75 ms-5' onSubmit={SignupForm.handleSubmit}>
                                {/* step2 : main form handling */}
                                <div className="form-group">

                                    <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.name && SignupForm.errors.name}</span>
                                    <input type="text" className="form-control text-white bg-transparent mb-3 input-login"
                                        placeholder="username" id="name"
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.name} />
                                </div>
                                <div className="form-group">

                                    <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.email && SignupForm.errors.email}</span>
                                    <input type="text" className="form-control text-white bg-transparent mb-3 input-login"
                                        id="email" placeholder='email'
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.email} />
                                </div>
                                <div className="form-group">

                                    <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.password && SignupForm.errors.password}</span>
                                    <input type="password" className="form-control text-white bg-transparent mb-3 input-login"
                                        id="password" placeholder='password'
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.password} />
                                </div>
                                <button type='submit' className='btn btn-dark w-100   mt-3 fs-4 p-1 text-white fw-semibold' style={{ fontFamily: "serif" }}>Signup</button>
                            </form>
                        </div>
                    </div>





                </div>
            </div>

        </div>

    )
}

export default Signup