import {Formik,Form,Field,ErrorMessage} from "formik";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/Registration.css"
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import React,{useEffect} from "react";





function Registration() {
    const navigate=useNavigate();



    const defaultvalue={
        name:"",
        subject:"",
        subject7:"",
        group:"",
        checkbox:false,
        date:""
    }

    const Register=yup.object().shape({
        name:yup.string().required("please enter ur name"),
        // subject7:yup.string().required("please enter ur name"),
        subject:yup.string().required("enter subject"),
        group:yup.string().required("plz select"),
        checkbox:yup.boolean().oneOf([true],"please check this box"),
        date:yup.string().required("select date")
    });
     
    const send=(values)=>{
        console.log(values);
        localStorage.setItem("user",values.name);
        localStorage.setItem("subject",values.subject);
        localStorage.setItem("date",values.date);
        localStorage.setItem("group",values.group);
        navigate("/home");
        alert("data is store");
    };

    useEffect(()=>{
        const user=localStorage.getItem("user");
        if(user){
            navigate("/home")
        }
    })


    return (
        
        <Formik initialValues={defaultvalue} validationSchema={Register} onSubmit={send}>
        <div class="center bg-color">
            <h1 class="text-center">REGISTER</h1>
            <Form>
                <div class="form-group text-field">
                    <Field class="form-control" type="text" name="name"  placeholder="Name"/>
                    <p className="text-danger"><ErrorMessage name="name" /></p>
                </div>
                <div class="form-group text-field">
                    <Field class="form-control" type="text" name="subject"  placeholder="Subject" />
                    <p className="text-danger"><ErrorMessage name="subject" /></p>
                </div>
                <div className="row justify-content-around">
                <div className="form-group col-md-5">
                    {/* <label>Group</label> */}
                    <Field component="select" name="group" className="form-control">
                        <option value="" disabled>select group</option>
                        <option value="iteg">iteg</option>
                        <option value="Meg">Meg</option>
                    </Field>
                    <p className="text-danger"><ErrorMessage name="group" /></p>
                </div>
                <div className="form-group col-md-5 mt-3 mt-md-0">
                        <Field type="date" className="form-control" name="date" />
                        <p className="text-danger"><ErrorMessage name="date" /></p>
                </div>
                <div className="form-group mt-3">
                <div className="form-check">
                    <lable for="check" className="form-check-lable pl-3">all info. is right</lable>
                        <Field type="checkbox" className="form-check-input" name="checkbox" id="check"/>
                        <p className="text-danger"><ErrorMessage name="checkbox" /></p>
                </div>
                </div>
                </div>
                <button class="btn btn-primary w-100" type="submit">Register</button>
                </Form>
                </div>
                </Formik>
            
                    );
}

export default Registration;