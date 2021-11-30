import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CustomPasswordConfirm(password: string, confirmPasswrod: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const result = (password == confirmPasswrod);

    return result ? { Password: { value: control.value } } : null;
  };
}
