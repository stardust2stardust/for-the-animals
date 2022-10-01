const SignUpForm = () => {
  return (
    <div className="signup-container">
      <h4>Join our mailing list</h4>
      <form
        onSubmit=""
        className="signup-form"
      >
        <input
          type="text"
          placeholder="enter your email"
        ></input>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
