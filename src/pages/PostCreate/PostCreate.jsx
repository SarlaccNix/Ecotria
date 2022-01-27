import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../actions";
import Nav from "../../components/Navbar/Nav";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PostCreate = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    titlePost: "",
    suscriberID: "",
    catergory: "",
    price: "",
    descriptionPost: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("ObjectData"));
    setValues({
      ...values,
      email: storedUser.email,
      suscriberID: storedUser.suscriberID,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const {
      titlePost,
      catergory,
      price,
      descriptionPost,
      address,
      email,
      phoneNumber,
    } = values;
    if (
      titlePost &&
      catergory &&
      price &&
      descriptionPost &&
      address &&
      email &&
      phoneNumber
    ) {
      dispatch(userActions.createpost(values));
    } else {
      console.log("Not working");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ [name]: value });
    console.log("Name, Value:", name, value);
    console.log("New Values:", values);
  };

  return (
    <>
      <Nav />

      {/* <div className="create-post-page">
      <div className="form-group-input">
        <h1>Crear Anuncio</h1>

        <form >
          <div className="create-post-page">
            <div className="form-group-input">
              <input
                type="text"
                name="titlePost"
                id="titlePost"
                placeholder="Título"
                value={values.titlePost}
                onChange={()=>handleChange}
              />
            </div>

            <div className="form-group-input">
              <select
                name="catergory"
                id="catergory"
                placeholder="Categoría"
                value={values.catergory}
                onChange={()=>handleChange}
              >
                <option value="Productor">Productor</option>
                <option value="Transporte">Transporte</option>
                <option value="Industria">Industria</option>
                <option value="Servicios">Servicios</option>
                <option value="Comprador">Comprador</option>
                <option value="Distribuidor">Distribuidor</option>
              </select>
            </div>

            <div className="form-group-input">
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Precio"
                value={values.price}
                onChange={()=>handleChange}
              />
            </div>

            <div className="form-group-input">
              <input
                type="text"
                name="descriptionPost"
                id="descriptionPost"
                placeholder="Ingrese una descripción de su oferta de negocio"
                value={values.descriptionPost}
                onChange={()=>handleChange}
              />
            </div>

            <div className="form-group-input">
              <input
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={()=>handleChange}
                placeholder="Dirección"
              />
            </div>

            <div className="form-group-input">
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={()=>handleChange}
                placeholder="Teléfono"
              />
            </div>
          </div>

          <div className="form-group-button">
            <div className="form-group">
              <button
                onClick={() => console.log("CLICK!")}
                className="btn-submit"
              >
                Crear Anuncio
              </button>
              {submitted && (
                <img
                  alt="loading"
                  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                />
              )}
              <Link to="/">Regresar al Mercado</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
     */}

      {/*AQUI EMPIEZA FORMIK*/}
      <div>
        <h1>Crear Anuncio</h1>
        <Formik
          initialValues={{
            titlePost: "",
            suscriberID: "",
            catergory: "",
            price: "",
            descriptionPost: "",
            address: "",
            email: "",
            phoneNumber: "",
          }}
        //   validate={(values) => {
        //     const errors = {};
        //     if (!values.email) {
        //       errors.email = "Required";
        //     } else if (
        //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //     ) {
        //       errors.email = "Invalid email address";
        //     }
        //     return errors;
        //   }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
                <div className="form-group-input">
            <label htmlFor="titlePost">Titulo</label>
              <Field type="text" name="titlePost" />
              <ErrorMessage name="titlePost" component="div" />
              </div>
              <div className="form-group-input">
              <label htmlFor="catergory">Categoría</label>
              <Field type="text" name="catergory" />
              <ErrorMessage name="catergory" component="div" />
              </div>
              <div className="form-group-input">
              <label htmlFor="price">Precio</label>
              <Field type="text" name="price" />
              <ErrorMessage name="price" component="div" />
              </div>
              <div className="form-group-input">
              <label htmlFor="titlePost">Descripción</label>
              <Field type="text" name="descriptionPost" />
              <ErrorMessage name="descriptionPost" component="div" />
              </div>
              <div className="form-group-input">
              <label htmlFor="titlePost">Dirección</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Crear
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

const connectedPostCreatePage = withRouter(PostCreate);
export { connectedPostCreatePage as PostCreate };
