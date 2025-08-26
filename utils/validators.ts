export function faToEn(string: string) {
    const newNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // 1. Persian HTML decimal
    const persianDecimal = ['&#1776;', '&#1777;', '&#1778;', '&#1779;', '&#1780;', '&#1781;', '&#1782;', '&#1783;', '&#1784;', '&#1785;'];

    // 2. Arabic HTML decimal
    const arabicDecimal = ['&#1632;', '&#1633;', '&#1634;', '&#1635;', '&#1636;', '&#1637;', '&#1638;', '&#1639;', '&#1640;', '&#1641;'];

    // 3. Arabic Numeric
    const arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    // 4. Persian Numeric
    const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    // 5. Superscript Numeric
    const superscript = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

    // Replace all occurrences of the Persian/Arabic numerals with English numerals
    string = string?.replace(/&#177[6-9];|&#178[0-5];/g, (match) => newNumbers[persianDecimal.indexOf(match)]);
    string = string?.replace(/&#163[2-9];|&#164[0-1];/g, (match) => newNumbers[arabicDecimal.indexOf(match)]);
    string = string?.replace(/[٠-٩]/g, (match) => newNumbers[arabic.indexOf(match)]);
    string = string?.replace(/[۰-۹]/g, (match) => newNumbers[persian.indexOf(match)]);
    string = string?.replace(/[⁰-⁹]/g, (match) => newNumbers[superscript.indexOf(match)]);

    return string;
}




// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'اطلاعات مورد نظر ضروری می باشد'
  return !!String(value).trim().length || 'اطلاعات مورد نظر ضروری می باشد'
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value: string, target: string) =>

  value === target || 'عدم تطابق با کلمه عبور وارد شده'

// 👉 Password Validator
export const passwordValidator = (password: string) => {
  // const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}$/
  /// Strong password regext
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  /// Weak regext
  const passwordRegex = /^.{6,}$/
  const validPassword = passwordRegex.test(password)

  return (

    validPassword || 'کلمه عبور بایستی حداقل از 6 کاراکتر تشکیل شده باشد'
  )

  // return regExp.test(password) || 'PasswordIsRequired'
}

// Phone validator

export const phoneValidatorRequired = (value: unknown) => {
  if (!value)
    return 'شماره تلفن الزامی است'
  const re1 = /^(\+98|0)?9\d{9}$/
  return re1.test(String(value)) || 'شماره تلفن صحیح نمی باشد'
}

export const phoneValidator = (value: unknown) => {
  if (isEmpty(value))
    return true
  if (! /^(\+98|0)?9\d{9}$/.test(String(value)))
    return 'شماره تلفن صحیح نمی باشد'
  else {
    return true
  }
}


// IranianNationalCode
export const isValidIranianNationalCode = (value: any) => {
  if (isEmpty(value))
    return true

  if (!/^\d{10}$/.test(value)) return 'کد ملی صحیح نمی باشد';
  const check = +value[9];
  const sum = value.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
  return sum < 2 ? check === sum : check + sum === 11;

}

// iranPostalCode
export const iranPostalCodeRegex = (value: any) => {
  if (isEmpty(value))
    return true
  if (!/^(?:\d{5}-?\d{5})$/.test(value)) return 'کد پستی صحیح نمی باشد'
  return true
};

export const isValidIranianShabaNumber = (shabaNumber: string) => {
  if (isEmpty(shabaNumber))
    return true
  if (typeof shabaNumber !== 'string' || shabaNumber.length !== 24) {
    return 'شماره شبا باید 24 رقم باشد';
  }
  if (!shabaNumber.startsWith('IR')) {
    return true;
  }

  if (!/^[A-Z]{2}[0-9]{24}$/.test(shabaNumber)) {
    return false;
  }
  const rearrangedshabaNumber = shabaNumber.slice(4) + shabaNumber.slice(0, 4);
  const numericshabaNumber = rearrangedshabaNumber.split('').map(char => {
    if (char >= 'A' && char <= 'Z') {
      return char.charCodeAt(0) - 55; // 'A' is 65 in ASCII, so 'A' - 55 = 10
    } else {
      return char;
    }
  }).join('');

  const shabaNumberBigInt = BigInt(numericshabaNumber);
  return shabaNumberBigInt % 97n === 1n;
}


// 👉 Email Validator
export const emailValidator = (email: string) => {
  if (isEmpty(email)) return true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) return 'ایمیل وارد شده معتبر نمی باشد'
  return emailPattern.test(email);
};

export const onlyLatin = (v: any) => {
  return /^[a-zA-Z0-9]*$/.test(v) || 'فقط حروف لاتین مجاز است'
}



export const linkValidation = (value: string) => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return true;
  } else {
    return "پیوند باید با ://http یا ://https شروع شود";
  }
}


export const englishNumberValidator = (value: any) => {
  if (persianTools.isPersian(value)) {
    return "ورود کاراکترهای فارسی مجاز نیست";
  }
  return true;
}

export const englishLettersOnly = (value: string) => {
  return /^[A-Za-z_\s]*$/.test(value) || "فقط حروف انگلیسی مجاز است";
};


export const validateIP = (ip: string) => {
  if (!ip) {
    return true;
  }
  const regex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;
  return regex.test(ip) || "آی پی وارد شده صحیح نمی باشد";
}
