export const validateInput = (input: string) => {
    const postalCodeRegex = /^\d{5}(-\d{4})?$/;
    return postalCodeRegex.test(input) || input.trim().length > 3;
};