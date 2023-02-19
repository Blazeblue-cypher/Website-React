export const validateUserLoginForm = (values) => {
    const errors = {};
  
    if(!values.username){
      errors.username = 'Required';
    }else if(values.username.length < 6){
      errors.username = 'Username must be longer than 6.';
    }else if(values.username.length > 15){
      errors.username = 'Username length must be shorter than 16.';
    }
  
    if(!values.password){
      errors.password = 'Required';
    }else if(values.password.length < 8){
      errors.password = 'Passwor must be longer than 8.';
    }
  
    return errors;
};