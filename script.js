// --- 數據庫區域 ---

// 1. FCN 數據 (不分性別, 單位: 元/每萬元)
const fcnData = {
    term10: [
        275, 279, 284, 289, 293, 298, 303, 309, 314, 319, 325, 330, 336, 342, 348, 354, 360, 366, 372, 378,
        385, 391, 398, 405, 412, 419, 425, 432, 438, 445, 451, 457, 463, 469, 475, 481, 486, 492, 497, 502,
        507, 511, 515, 518, 521, 522, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531
    ],
    term20: [
        150, 152, 155, 157, 160, 163, 166, 169, 171, 174, 178, 181, 184, 187, 190, 194, 197, 201, 205, 208,
        212, 216, 220, 224, 229, 233, 237, 241, 245, 249, 254, 258, 262, 266, 270, 275, 279, 283, 287, 291,
        294, 298, 301, 304, 306, 308, 308, 309, 310, 310, 312, 313, 314, 315, 316, 317
    ]
};

// 2. TCN 數據 (分男女, 單位: 元/每萬元)
const tcnData = {
    term10_male: [
        226, 230, 233, 237, 241, 245, 249, 253, 258, 262, 267, 271, 276, 280, 285, 290, 295, 300, 305, 310,
        316, 321, 326, 332, 338, 343, 349, 355, 361, 367, 373, 379, 386, 392, 398, 405, 411, 417, 423, 430,
        436, 442, 448, 454, 460, 465, 471, 476, 480, 485, 489, 494, 498, 501, 505, 508
    ],
    term10_female: [
        248, 252, 256, 260, 264, 269, 273, 278, 283, 288, 292, 297, 302, 308, 313, 318, 324, 329, 335, 340,
        346, 352, 358, 364, 370, 376, 382, 388, 394, 400, 405, 411, 417, 422, 427, 432, 438, 443, 447, 452,
        457, 461, 465, 468, 471, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483
    ],
    term20_male: [
        123, 125, 127, 129, 132, 134, 136, 138, 141, 143, 146, 148, 151, 153, 156, 159, 162, 165, 167, 170,
        173, 176, 180, 183, 186, 189, 193, 197, 200, 204, 208, 212, 216, 220, 224, 228, 232, 237, 241, 245,
        250, 254, 259, 263, 267, 272, 276, 281, 285, 289, 293, 298, 302, 306, 311, 315
    ],
    term20_female: [
        135, 137, 140, 142, 144, 147, 149, 152, 154, 157, 160, 163, 165, 168, 171, 174, 178, 181, 184, 187,
        191, 194, 198, 202, 205, 209, 213, 216, 220, 224, 228, 232, 235, 239, 243, 247, 251, 254, 258, 261,
        265, 268, 271, 274, 276, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288
    ]
};

// 3. CR2C 數據 (分男女, 一年期, 單位: 元/每10萬元, 0-85歲)
// 數據來源: CR2C - 工作表1.pdf
const cr2cData = {
    male: [
        46.2, 40.4, 35.4, 31.1, 27.1, 23.8, 29.8, 25.9, 26.7, 27.3, // 0-9
        28.0, 28.8, 29.8, 31.9, 34.0, 36.8, 39.5, 42.4, 45.3, 48.4, // 10-19
        52.1, 55.7, 60.2, 65.2, 71.2, 77.6, 84.8, 92.7, 107.7, 125.3, // 20-29
        146.0, 170.0, 197.7, 227.2, 260.7, 299.4, 344.0, 395.0, 440.7, 491.6, // 30-39
        548.6, 612.1, 683.0, 745.8, 814.2, 888.8, 970.5, 1060.0, 1154.9, 1258.2, // 40-49
        1371.1, 1494.1, 1628.6, 1753.3, 1887.8, 2032.3, 2188.4, 2356.6, 2528.0, 2712.5, // 50-59
        2910.1, 3122.0, 3349.6, 3579.6, 3825.6, 4088.5, 4369.2, 4669.5, 4928.8, 5202.6, // 60-69
        5491.6, 5796.7, 6118.5, 6356.6, 6603.6, 6860.3, 7546.3, 8301.0, 9131.1, 10044.2, // 70-79
        11048.6, 12153.5, 13368.8, 14705.7, 16176.3, 17793.9 // 80-85
    ],
    female: [
        46.5, 40.0, 34.6, 29.7, 25.6, 21.8, 23.2, 23.2, 24.5, 25.9, // 0-9
        27.4, 29.2, 31.0, 32.8, 34.8, 36.7, 39.1, 41.6, 46.8, 52.6, // 10-19
        59.7, 67.2, 76.1, 88.0, 101.7, 117.9, 137.2, 160.1, 183.0, 209.7, // 20-29
        240.0, 275.2, 315.8, 355.4, 400.2, 450.5, 507.7, 572.1, 639.0, 713.8, // 30-39
        797.7, 891.7, 983.0, 1059.1, 1125.9, 1197.2, 1273.2, 1354.2, 1432.2, 1495.5, // 40-49
        1582.0, 1651.8, 1724.6, 1805.1, 1889.3, 1977.5, 2097.5, 2195.2, 2287.1, 2382.6, // 50-59
        2449.6, 2552.0, 2658.7, 2853.9, 3023.6, 3160.3, 3302.9, 3451.9, 3594.8, 3743.4, // 60-69
        3898.1, 4059.4, 4227.1, 4366.2, 4509.6, 4657.8, 5123.6, 5636.0, 6199.5, 6819.5, // 70-79
        7501.5, 8251.6, 9076.8, 9984.4, 10982.9, 12081.2 // 80-85
    ]
};

// --- 邏輯區域 ---

const productEl = document.getElementById('product');
const genderGroup = document.getElementById('gender-group');
const termGroup = document.getElementById('term-group');
const unitDisplay = document.getElementById('unit-display');

// 初始化
updateFormState();

// 監聽商品選擇變更
productEl.addEventListener('change', updateFormState);

function updateFormState() {
    const product = productEl.value;
    
    // 1. 控制欄位顯示
    if (product === 'FCN') {
        genderGroup.style.display = 'none';
        termGroup.style.display = 'block';
        unitDisplay.textContent = '單位：元/每萬元保險金額';
        setMaxAge(55);
    } else if (product === 'TCN') {
        genderGroup.style.display = 'block';
        termGroup.style.display = 'block';
        unitDisplay.textContent = '單位：元/每萬元保險金額';
        setMaxAge(55);
    } else if (product === 'CR2C') {
        genderGroup.style.display = 'block';
        termGroup.style.display = 'none'; // CR2C 為一年期，隱藏年期選擇
        unitDisplay.textContent = '單位：元/每10萬元保險金額';
        setMaxAge(85); // CR2C 可到 85 歲
    }
}

function setMaxAge(max) {
    document.getElementById('single-age').max = max;
    document.getElementById('single-age').placeholder = `0-${max}`;
    document.getElementById('start-age').max = max;
    document.getElementById('end-age').max = max;
}

function getRate(age) {
    const product = productEl.value;
    const gender = document.getElementById('gender').value;
    const term = document.getElementById('term').value;
    
    // 年齡邊界檢查
    if (age < 0) return null;
    
    let rate = null;

    if (product === 'FCN') {
        if (age > 55) return null;
        rate = (term === '10') ? fcnData.term10[age] : fcnData.term20[age];
    
    } else if (product === 'TCN') {
        if (age > 55) return null;
        if (term === '10') {
            rate = (gender === 'male') ? tcnData.term10_male[age] : tcnData.term10_female[age];
        } else {
            rate = (gender === 'male') ? tcnData.term20_male[age] : tcnData.term20_female[age];
        }
    
    } else if (product === 'CR2C') {
        if (age > 85) return null;
        rate = (gender === 'male') ? cr2cData.male[age] : cr2cData.female[age];
    }

    return rate;
}

// 取得當前單位文字
function getUnitText() {
    return (productEl.value === 'CR2C') ? '元/每10萬元' : '元/每萬元';
}

function calculateSingle() {
    const ageInput = document.getElementById('single-age').value;
    const resultDiv = document.getElementById('single-result');
    const maxAge = (productEl.value === 'CR2C') ? 85 : 55;

    if (ageInput === '' || ageInput < 0 || ageInput > maxAge) {
        resultDiv.textContent = `請輸入有效的年齡 (0-${maxAge})`;
        resultDiv.style.color = 'red';
        return;
    }

    const age = parseInt(ageInput);
    const rate = getRate(age);

    if (rate === undefined || rate === null) {
        resultDiv.textContent = "查無此年齡費率";
        return;
    }

    resultDiv.innerHTML = `第 ${age} 歲費率： <span style="font-size:1.4em">${rate}</span> ${getUnitText()}`;
    resultDiv.style.color = '#006192';
}

function calculateRange() {
    const startInput = document.getElementById('start-age').value;
    const endInput = document.getElementById('end-age').value;
    const resultDiv = document.getElementById('range-result');
    const maxAge = (productEl.value === 'CR2C') ? 85 : 55;

    if (startInput === '' || endInput === '' || 
        startInput < 0 || startInput > maxAge || 
        endInput < 0 || endInput > maxAge) {
        resultDiv.textContent = `請輸入有效的起始與結束年齡 (0-${maxAge})`;
        resultDiv.style.color = 'red';
        return;
    }

    let start = parseInt(startInput);
    let end = parseInt(endInput);

    if (start > end) {
        [start, end] = [end, start];
    }

    // CR2C 特別檢查：如果使用浮點數計算總和，建議處理小數點精度
    let total = 0;
    for (let i = start; i <= end; i++) {
        const r = getRate(i);
        if (r !== null && r !== undefined) {
            total += r;
        }
    }
    
    // 解決浮點數相加可能出現的 .0000001 問題
    total = Math.round(total * 100) / 100;

    resultDiv.innerHTML = `${start} 歲至 ${end} 歲累計總費率： <br><span style="font-size:1.5em">${total}</span> ${getUnitText()}`;
    resultDiv.style.color = '#d32f2f';
}