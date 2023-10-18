import * as impData from './data.js';

const tabInfoBtn = document.querySelector('.tab-info-btn');

const arrTabButtons = document.querySelectorAll('.tab-btn');
const headerTitle = document.querySelector('.header-right-title');
const infoLeftList = document.querySelector('.info-left-list');
const infoRightList = document.querySelector('.info-right-list');

arrTabButtons[0].addEventListener('click', () => {
    clearTab();
    arrTabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });
    arrTabButtons[0].classList.add('active');
    showMainTab();
});

arrTabButtons[1].addEventListener('click', () => {
    clearTab();
    arrTabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });
    arrTabButtons[1].classList.add('active');
    showObjectsTab();
});

arrTabButtons[2].addEventListener('click', () => {
    clearTab();
    arrTabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });
    arrTabButtons[2].classList.add('active');
    showMaterialsTab();
});

const clearTab = () => {
    infoLeftList.innerHTML = infoRightList.innerHTML = '';
};

const showMainTab = () => {
    let keyItem, value;

    headerTitle.innerHTML = 'Основное';
    tabInfoBtn.textContent = 'Открыть ...';

    for (let key in impData.keysMainInfo) {
        keyItem = document.createElement('li');
        keyItem.innerHTML = impData.keysMainInfo[key];
        infoLeftList.append(keyItem);
    }
    for (let key in impData.mainInfo) {
        value = document.createElement('li');
        value.innerHTML = impData.mainInfo[key];
        infoRightList.append(value);
    }
};

const showObjectsTab = () => {
    let keyItem, value;

    headerTitle.innerHTML = 'Описание объекта';
    tabInfoBtn.textContent = 'Открыть выписку объекта';

    for (let key in impData.keysObject) {
        keyItem = document.createElement('li');
        keyItem.innerHTML = impData.keysObject[key];
        infoLeftList.append(keyItem);
    }
    for (let key in impData.dataObject) {
        value = document.createElement('li');
        value.innerHTML = impData.dataObject[key];
        infoRightList.append(value);
    }
};

const showMaterialsTab = () => {
    let keyItem, value;

    headerTitle.innerHTML = 'Материалы';
    tabInfoBtn.textContent = 'Открыть выписку материала';

    for (let key in impData.keysMaterial) {
        keyItem = document.createElement('li');
        keyItem.innerHTML = impData.keysMaterial[key];
        infoLeftList.append(keyItem);
    }
    for (let key in impData.dataMaterial) {
        value = document.createElement('li');
        value.innerHTML = impData.dataMaterial[key];
        infoRightList.append(value);
    }
};
