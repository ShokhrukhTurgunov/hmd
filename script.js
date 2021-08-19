// let tabPositive = document.getElementById('tab-positive');
// tabPositive.addEventListener('click', () => {
//     tabChange("Positive", tabPositive, 1);
// });
// let tabNegative = document.getElementById('tab-negative');
// tabNegative.addEventListener('click', () => {
//     tabChange("Negative", tabNegative, 2);
// });
// let tabNeutral = document.getElementById('tab-neutral');
// tabNeutral.addEventListener('click', () => {
//     tabChange("Neutral", tabNeutral, 3);
// });

// const pContent = document.getElementById('p-content');

// function tabChange (content, theTab, number) {
//     if (number === 1) {
//         tabPositive.checked = true;
//         pContent.textContent = content + ' content';
//     }
//     if (number === 2) {
//         tabNegative.checked = true;
//         pContent.textContent = content + ' content';
//     }
//     if (number === 3) {
//         tabNeutral.checked = true;
//         pContent.textContent = content + ' content';
//     }
// }

// const btnTab = document.querySelector('#btnTab');

// btnTab.addEventListener('click', indexChange);

// function indexChange () {
//     let inputValue = document.getElementById('index-field').value;

//     if (inputValue === '1') {
//         tabChange("Positive", tabPositive, 1);
//     }else if (inputValue === '2') {
//         tabChange("Negative", tabNegative, 2);
//     }else if (inputValue === '3') {
//         tabChange("Neutral", tabNeutral, 3);
//     }else if(inputValue !== ''){
//         alert('Invalid number')
//     }
// }

const positiveTab = document.getElementById('tab-positive');
positiveTab.addEventListener('click', () => {
    changeTab('Positive', positiveTab, 1);
});
const negativeTab = document.getElementById('tab-negative');
negativeTab.addEventListener('click', () => {
    changeTab('Negative', negativeTab, 2);
});
const neutralTab = document.getElementById('tab-neutral');
neutralTab.addEventListener('click', () => {
    changeTab('Neutral', neutralTab, 3);
});

contentP = document.getElementById('p-content');

function changeTab (content, theTab, num) {
    if (num === 1) {
        positiveTab.checked = true;
        contentP.textContent = content + ' choice'
    }
    if (num === 2) {
        negativeTab.checked = true;
        contentP.textContent = content + ' choice'
    }
    if (num === 3) {
        neutralTab.checked = true;
        contentP.textContent = content + ' choice'
    }
}

const tabChange = document.getElementById('btnTab');

tabChange.addEventListener('click', indexChangeFunc);

function indexChangeFunc () {
    let inputValue = document.getElementById('index-field').value;

    if (inputValue === '1') {
        changeTab('Positive', positiveTab, 1);
    }
     else if (inputValue === '2') {
        changeTab('Negative', negativeTab, 2);
    }
    else if (inputValue === '3') {
        changeTab('Neutral', neutralTab, 3);
    }
    else if(inputValue !== '') {
        alert('Invalid')
    }
}