
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        console.log("getValidatorErrorMessage initialize");
        let config = {
            'required': 'This field is required',
            'invalidEmailAddress': 'Invalid email address',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }

    static emailValidator(control): any {
      console.log("emailValidator initialize");
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }


}
