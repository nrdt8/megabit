import "./CallbackInput.css";

const CallbackInput = ({ label, className, value, setValue, type, id }) => {
  return (
    <div className={`${className} form_group`}>
      <label className="font_15" htmlFor="INLINE_PHONE">
        <span>
          {label}
          <span className="required-star">*</span>
        </span>
      </label>
      <div className="input">
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={id}
          className="form-control phone"
          required
          name="form_text_40"
          aria-required="true"
          aria-invalid="false"
        />
      </div>
    </div>
  );
};

export default CallbackInput;
