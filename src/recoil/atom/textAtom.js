import { atom, selector } from "recoil";

export const textInput = atom({
    key: 'textInputValue',
    default: '',
});

export const countCharText = selector({
    key: 'countCharText',
    get: ({get}) => {
        const text = get(textInput);

        return text.length;
    }
})