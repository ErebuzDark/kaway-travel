import FormModal from "./modal/FormModal";
import { Formik } from "formik";

const ForgotPassword = ({ isFormModalOpen, handleCloseModal }) => {
  return (
    <FormModal isOpen={isFormModalOpen}>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 800);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <h1 className="form-header">Forgot Password</h1>
            <div>
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <input
                className={`input ${
                  errors.email && touched.email && errors.email
                    ? "outline-red-700 border-red-500 border-2"
                    : ""
                }`}
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="label-error">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <button
              className={`btn-send w-full mt-3 flex items-center justify-center gap-1 ${
                isSubmitting && "bg-slate-400"
              } `}
              type="submit"
            >
              Send OTP
            </button>
            <button
              onClick={handleCloseModal}
              className={`btn-primary w-full mt-3 flex items-center justify-center gap-1 ${
                isSubmitting && "bg-slate-400"
              } `}
              type="submit"
            >
              Cancel
            </button>
          </form>
        )}
      </Formik>
    </FormModal>
  );
};

export default ForgotPassword;
