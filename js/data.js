export const keysObject = [
    'Кадастровый номер',
    'Вид объекта',
    'Вид права',
    '№ регистрации права',
    'ФИО правообладателя',
    'Название правообладателя'
];
export const dataObject = {
    numObj: '77:03:0001001:2879',
    viewObj: 'Помещение',
    typeLaw: 'Собственность',
    numLaw: '77-01/04-1023/2004-741',
    fullNameOwner: '-',
    appellationOwner: 'Общество с ограниченной ответственность “МАДЕЛОН”'
};

export const keysMaterial = ['Номер материала', 'Материал', 'Тип материала', 'Название правообладателя'];
export const dataMaterial = {
    numMaterial: '888:19:9003101:2879',
    viewMaterial: 'Lorem',
    typeMaterial: 'Lorem',
    appellationOwner: 'ООО “Люблино девелопмент”'
};

export const keysMainInfo = [
    'Кадастровый номер',
    'Вид объекта',
    'Вид права',
    '№ регистрации права',
    'ФИО правообладателя',
    'Название правообладателя',
    'Номер материала',
    'Материал',
    'Тип материала'
];
export const mainInfo = { ...dataObject, ...dataMaterial };
