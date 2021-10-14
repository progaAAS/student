export const requiredName = value => value && /^[а-яёА-ЯЁ\s]*$/i.test(value) ? undefined : "Введите ФИО";
export const requiredFive = value => value && /^[0-9]*$/i.test(value) ? undefined : "Введите кол-во пятерок";
export const requiredFour = value => value && /^[0-9]+$/i.test(value) ? undefined : "Введите кол-во четверок";
export const requiredTree = value => value && /^[0-9]+$/i.test(value) ? undefined : "Введите кол-во троек";
export const requiredTwo = value => value && /^[0-9]+$/i.test(value) ? undefined : "Введите кол-во двоек";
export const required = value => value && /^[0-9]*$/i.test(value) ? undefined : "Введите кол-во пропусков";
export const requiredLesson = value => value && /^[а-яёА-ЯЁ\s]*$/i.test(value) ? undefined : "Введите предмет";
export const requiredCountlesson = value => value && /^[0-9]*$/i.test(value) ? undefined : "Введите кол-во занятий";
