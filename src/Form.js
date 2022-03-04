import React from "react";
import ReactFormValidation from "react-form-input-validation";
import "./Form.css";




class ValidationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        employee_id: "",
        employee_name: "",
        email_address: "",
        designation: "",
        booking_date: "",
        halls: "",
        timing: "",
        
        
        extras: []
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      employee_id: "required|employee_id",
      employee_name: "required|employee_name",
      email_address: "required|email",
      designation: "required|designation",
      booking_date: "required|date",
      halls: "required",
      timing: "required",
      
      
      extras: "required|array"
    });

    this.form.onformsubmit = (fields) => {
      console.log(fields);
    }

    ReactFormValidation.registerAsync('username_available', function(username, attribute, req, passes) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, 'Username has already been taken.'); // if username is not available
        else
          passes();
      }, 1000);
    });
    /* let messages = ReactFormValidation.getMessages('en');
    messages.required = 'Whoops, :attribute field is required.';
    ReactFormValidation.setMessages('en', messages);
    ReactFormValidation.useLang('en') */
  }

  render() {
    return (
        <div className="body">
        <div  style={{maxWidth: "600px", margin: "0 auto"}}>
              <form
            className="myForm"
            noValidate
            autoComplete="off"
            onSubmit={this.form.handleSubmit}
          >
            <p>
              <label>
                ICTAK ID
                <input
                  type="text"
                  name="employee_id"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.employee_id}
                  // To override the attribute name
                  data-attribute-name="Employee ID"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.employee_id
                  ? this.state.errors.employee_id
                  : ""}
              </label>
            </p>
            <p>
              <label>
                Full Name
                <input
                  type="text"
                  name="employee_name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.employee_id}
                  // To override the attribute name
                  data-attribute-name="Employee Name"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.employee_name
                  ? this.state.errors.employee_name
                  : ""}
              </label>
            </p>
            

            <p>
              <label>
                Designation
                <input
                  type="text"
                  name="epmpl_dsg"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.epmpl_dsg}
                  data-attribute-name="Designation"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.epmpl_dsg
                  ? this.state.errors.epmpl_dsg
                  : ""}
              </label>
            </p>

            <p>
              <label>
                Email/Username
                <input
                  type="email"
                  name="email_address"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email_address}
                />
              </label>
              <label className="error">
                {this.state.errors.email_address
                  ? this.state.errors.email_address
                  : ""}
              </label>
            </p>

            


            <fieldset>
              <legend>Halls
              </legend>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="halls"
                    onChange={this.form.handleChangeEvent}
                    value="auditorium"
                  />{" "}
                  Auditorium{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="halls"
                    onChange={this.form.handleChangeEvent}
                    value=""
                  />{" "}
                  Conference hall{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="halls"
                    onChange={this.form.handleChangeEvent}
                    value=""
                  />{" "}
                  Banquet hall{" "}
                </label>
              </p>
              
              <label className="error">
                {this.state.errors.halls
                  ? this.state.errors.halls
                  : ""}
              </label>
            </fieldset>

            

            <p>
              <label>
                 Booking date
                <input
                  type="date"
                  name="booking_date"
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                  value={this.state.fields.booking_date}
                />
              </label>
              <label className="error">
                {this.state.errors.booking_date
                  ? this.state.errors.booking_date
                  : ""}
              </label>
            </p>

            <p>
              <label>
                Timing
                <select
                type="text"
                  id="timing"
                  name="timing"
                  value={this.state.fields.pickup_place}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                >
                  <option value="">Select One</option>
                  <option value="office">A.M</option>
                  <option value="town_hall">P.M</option>
                  
                </select>
              </label>
              <label className="error">
                {this.state.errors.timing
                  ? this.state.errors.timing
                  : ""}
              </label>
            </p>

            

           
            <p>
              <button type="submit">Confirm Booking</button>
            </p>
          </form>
        </div>
        </div>
    );
  }
}

export default ValidationForm;