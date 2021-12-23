import { FormInputContainer, FormInputLabelContainer, GroupContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabelContainer shrink={otherProps.value.length > 0}>
          {label}
        </FormInputLabelContainer>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
