export const validateAddressInput = (input: any): boolean => {
    return typeof input === 'string' && input.trim() !== '';
};
