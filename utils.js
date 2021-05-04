export function countAsAYes(input) {
    if (input === '') {
        return false;
    }
    const inputValue = input[0].toLowerCase();
    if (inputValue === 'y') {
        return true;
    }
    return false;
}
export function countAsANo(input) {
    if (input === '') {
        return false;
    }
    const inputValue = input[0].toLowerCase();
    if (inputValue === 'n') {
        return true;
    }
    return false;
}
export function countSpacewalk(input) {
    if (input === '') {
        return false;
    }
    const inputValue = input.toLowerCase();
    if (inputValue === 'susan helms') {
        return true;
    }
    return false;
}