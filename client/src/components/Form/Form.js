import React from "react";
import Button from "../Button/Button";

function Form(props) {
    return(
<div>
<div className="form">
<div className="form-group">
  <input type="text" value={props.name} onChange={props.handleChange} name="name" placeholder="Character Name" />
  <input type="text" value={props.email} onChange={props.handleChange} name="email" placeholder="Email" />
</div>
<div className="form-group">
  <input type="password" value={props.password} onChange={props.handleChange} name="password" placeholder="Password" />
  <input type="password" value={props.password2} onChange={props.handleChange} name="password2" placeholder="Re-enter password" />
</div>
</div>
<button type="submit" className="btn btn-warning" onClick={props.handleSubmit}>Sign Up</button>
<Button callback={props.handleSubmit} name="Signup" />

</div>

    )
}

export default Form;