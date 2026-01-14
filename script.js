// --- 數據庫區域 ---

// 1. FCN (不分性別, 單位: 萬元)
const fcnData = {
    term10: [275, 279, 284, 289, 293, 298, 303, 309, 314, 319, 325, 330, 336, 342, 348, 354, 360, 366, 372, 378, 385, 391, 398, 405, 412, 419, 425, 432, 438, 445, 451, 457, 463, 469, 475, 481, 486, 492, 497, 502, 507, 511, 515, 518, 521, 522, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531],
    term20: [150, 152, 155, 157, 160, 163, 166, 169, 171, 174, 178, 181, 184, 187, 190, 194, 197, 201, 205, 208, 212, 216, 220, 224, 229, 233, 237, 241, 245, 249, 254, 258, 262, 266, 270, 275, 279, 283, 287, 291, 294, 298, 301, 304, 306, 308, 308, 309, 310, 310, 312, 313, 314, 315, 316, 317]
};

// 2. TCN (分男女, 單位: 萬元)
const tcnData = {
    term10_male: [226, 230, 233, 237, 241, 245, 249, 253, 258, 262, 267, 271, 276, 280, 285, 290, 295, 300, 305, 310, 316, 321, 326, 332, 338, 343, 349, 355, 361, 367, 373, 379, 386, 392, 398, 405, 411, 417, 423, 430, 436, 442, 448, 454, 460, 465, 471, 476, 480, 485, 489, 494, 498, 501, 505, 508],
    term10_female: [248, 252, 256, 260, 264, 269, 273, 278, 283, 288, 292, 297, 302, 308, 313, 318, 324, 329, 335, 340, 346, 352, 358, 364, 370, 376, 382, 388, 394, 400, 405, 411, 417, 422, 427, 432, 438, 443, 447, 452, 457, 461, 465, 468, 471, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483],
    term20_male: [123, 125, 127, 129, 132, 134, 136, 138, 141, 143, 146, 148, 151, 153, 156, 159, 162, 165, 167, 170, 173, 176, 180, 183, 186, 189, 193, 197, 200, 204, 208, 212, 216, 220, 224, 228, 232, 237, 241, 245, 250, 254, 259, 263, 267, 272, 276, 281, 285, 289, 293, 298, 302, 306, 311, 315],
    term20_female: [135, 137, 140, 142, 144, 147, 149, 152, 154, 157, 160, 163, 165, 168, 171, 174, 178, 181, 184, 187, 191, 194, 198, 202, 205, 209, 213, 216, 220, 224, 228, 232, 235, 239, 243, 247, 251, 254, 258, 261, 265, 268, 271, 274, 276, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288]
};

// 3. CR2C (分男女, 1年期, 單位: 10萬元)
const cr2cData = {
    male: [46.2, 40.4, 35.4, 31.1, 27.1, 23.8, 29.8, 25.9, 26.7, 27.3, 28.0, 28.8, 29.8, 31.9, 34.0, 36.8, 39.5, 42.4, 45.3, 48.4, 52.1, 55.7, 60.2, 65.2, 71.2, 77.6, 84.8, 92.7, 107.7, 125.3, 146.0, 170.0, 197.7, 227.2, 260.7, 299.4, 344.0, 395.0, 440.7, 491.6, 548.6, 612.1, 683.0, 745.8, 814.2, 888.8, 970.5, 1060.0, 1154.9, 1258.2, 1371.1, 1494.1, 1628.6, 1753.3, 1887.8, 2032.3, 2188.4, 2356.6, 2528.0, 2712.5, 2910.1, 3122.0, 3349.6, 3579.6, 3825.6, 4088.5, 4369.2, 4669.5, 4928.8, 5202.6, 5491.6, 5796.7, 6118.5, 6356.6, 6603.6, 6860.3, 7546.3, 8301.0, 9131.1, 10044.2, 11048.6, 12153.5, 13368.8, 14705.7, 16176.3, 17793.9],
    female: [46.5, 40.0, 34.6, 29.7, 25.6, 21.8, 23.2, 23.2, 24.5, 25.9, 27.4, 29.2, 31.0, 32.8, 34.8, 36.7, 39.1, 41.6, 46.8, 52.6, 59.7, 67.2, 76.1, 88.0, 101.7, 117.9, 137.2, 160.1, 183.0, 209.7, 240.0, 275.2, 315.8, 355.4, 400.2, 450.5, 507.7, 572.1, 639.0, 713.8, 797.7, 891.7, 983.0, 1059.1, 1125.9, 1197.2, 1273.2, 1354.2, 1432.2, 1495.5, 1582.0, 1651.8, 1724.6, 1805.1, 1889.3, 1977.5, 2097.5, 2195.2, 2287.1, 2382.6, 2449.6, 2552.0, 2658.7, 2853.9, 3023.6, 3160.3, 3302.9, 3451.9, 3594.8, 3743.4, 3898.1, 4059.4, 4227.1, 4366.2, 4509.6, 4657.8, 5123.6, 5636.0, 6199.5, 6819.5, 7501.5, 8251.6, 9076.8, 9984.4, 10982.9, 12081.2]
};

[cite_start]// 4. NTC (分男女, 10/15/20年期, 55歲起, 單位: 10萬元) [cite: 18, 19, 20]
// 數據陣列從 55 歲開始 (index 0 = 55歲)
const ntcData = {
    // 55-80歲
    term10_male: [2010, 2130, 2270, 2410, 2560, 2710, 2870, 3040, 3220, 3400, 3580, 3760, 3950, 4130, 4310, 4480, 4630, 4770, 4890, 5000, 5090, 5160, 5190, 5220, 5230, 5240],
    term10_female: [1700, 1770, 1850, 1920, 2010, 2090, 2180, 2280, 2380, 2480, 2590, 2690, 2810, 2920, 3030, 3130, 3230, 3330, 3420, 3510, 3590, 3660, 3730, 3780, 3830, 3870],
    // 55-75歲
    term15_male: [2400, 2550, 2700, 2860, 3020, 3190, 3360, 3530, 3710, 3880, 4060, 4230, 4390, 4550, 4700, 4840, 4960, 5060, 5160, 5230, 5300],
    term15_female: [1950, 2030, 2120, 2210, 2310, 2400, 2500, 2600, 2710, 2810, 2920, 3020, 3130, 3240, 3340, 3440, 3520, 3610, 3690, 3760, 3820],
    // 55-70歲
    term20_male: [2710, 2860, 3010, 3160, 3320, 3470, 3630, 3780, 3930, 4080, 4220, 4370, 4500, 4630, 4750, 4860],
    term20_female: [2130, 2220, 2310, 2400, 2500, 2590, 2690, 2780, 2880, 2970, 3070, 3160, 3250, 3340, 3430, 3510]
};

// --- 邏輯區域 ---

const productEl = document.getElementById('product');
const genderGroup = document.getElementById('gender-group');
const termGroup = document.getElementById('term-group');
const termSelect = document.getElementById('term');
const unitDisplay = document.getElementById('unit-display');
const opt15 = document.getElementById('opt-15');

// 初始化
updateFormState();

// 監聽商品選擇變更
productEl.addEventListener('change', updateFormState);

function updateFormState() {
    const product = productEl.value;
    
    // 1. 性別與年期欄位顯示邏輯
    if (product === 'FCN') {
        genderGroup.style.display = 'none';
        termGroup.style.display = 'block';
        opt15.style.display = 'none'; // 隱藏 15年
        if (termSelect.value === '15') termSelect.value = '10'; // 若剛好選在15，跳回10
        unitDisplay.textContent = '單位：元/每萬元保險金額';
        setMaxAge(55, 0); // 0-55

    } else if (product === 'TCN') {
        genderGroup.style.display = 'block';
        termGroup.style.display = 'block';
        opt15.style.display = 'none'; // 隱藏 15年
        if (termSelect.value === '15') termSelect.value = '10';
        unitDisplay.textContent = '單位：元/每萬元保險金額';
        setMaxAge(55, 0); // 0-55

    } else if (product === 'CR2C') {
        genderGroup.style.display = 'block';
        termGroup.style.display = 'none';
        unitDisplay.textContent = '單位：元/每10萬元保險金額';
        setMaxAge(85, 0); // 0-85

    } else if (product === 'NTC') {
        genderGroup.style.display = 'block';
        termGroup.style.display = 'block';
        opt15.style.display = 'block'; // 顯示 15年
        unitDisplay.textContent = '單位：元/每10萬元保險金額';
        setMaxAge(80, 55); // 55-80
    }
}

function setMaxAge(max, min) {
    const sAge = document.getElementById('single-age');
    const stAge = document.getElementById('start-age');
    const edAge = document.getElementById('end-age');
    
    sAge.max = max; sAge.min = min;
    sAge.placeholder = `${min}-${max}`;
    
    stAge.max = max; stAge.min = min;
    stAge.placeholder = min;
    
    edAge.max = max; edAge.min = min;
    edAge.placeholder = max;
}

function getRate(age) {
    const product = productEl.value;
    const gender = document.getElementById('gender').value;
    const term = document.getElementById('term').value;
    
    let rate = null;

    if (product === 'FCN') {
        if (age < 0 || age > 55) return null;
        rate = (term === '10') ? fcnData.term10[age] : fcnData.term20[age];
    
    } else if (product === 'TCN') {
        if (age < 0 || age > 55) return null;
        if (term === '10') {
            rate = (gender === 'male') ? tcnData.term10_male[age] : tcnData.term10_female[age];
        } else {
            rate = (gender === 'male') ? tcnData.term20_male[age] : tcnData.term20_female[age];
        }
    
    } else if (product === 'CR2C') {
        if (age < 0 || age > 85) return null;
        rate = (gender === 'male') ? cr2cData.male[age] : cr2cData.female[age];

    } else if (product === 'NTC') {
        if (age < 55) return null; // NTC 最小 55歲
        const idx = age - 55; // NTC 陣列從 55 歲開始
        
        if (term === '10') {
            if (age > 80) return null;
            rate = (gender === 'male') ? ntcData.term10_male[idx] : ntcData.term10_female[idx];
        } else if (term === '15') {
            if (age > 75) return null;
            rate = (gender === 'male') ? ntcData.term15_male[idx] : ntcData.term15_female[idx];
        } else if (term === '20') {
            if (age > 70) return null;
            rate = (gender === 'male') ? ntcData.term20_male[idx] : ntcData.term20_female[idx];
        }
    }

    return rate;
}

// 取得當前單位文字
function getUnitText() {
    return (productEl.value === 'CR2C' || productEl.value === 'NTC') ? '元/每10萬元' : '元/每萬元';
}

function calculateSingle() {
    const ageInput = document.getElementById('single-age').value;
    const resultDiv = document.getElementById('single-result');
    const product = productEl.value;
    
    // 設定最大最小年齡邏輯
    let minAge = 0; let maxAge = 55;
    if (product === 'CR2C') maxAge = 85;
    if (product === 'NTC') { minAge = 55; maxAge = 80; }

    if (ageInput === '' || ageInput < minAge || ageInput > maxAge) {
        resultDiv.textContent = `請輸入有效的年齡 (${minAge}-${maxAge})`;
        resultDiv.style.color = 'red';
        return;
    }

    const age = parseInt(ageInput);
    const rate = getRate(age);

    if (rate === undefined || rate === null) {
        resultDiv.textContent = "查無此條件之費率 (可能超過該年期投保年齡上限)";
        resultDiv.style.color = 'red';
        return;
    }

    resultDiv.innerHTML = `第 ${age} 歲費率： <span style="font-size:1.4em">${rate}</span> ${getUnitText()}`;
    resultDiv.style.color = '#006192';
}

function calculateRange() {
    const startInput = document.getElementById('start-age').value;
    const endInput = document.getElementById('end-age').value;
    const resultDiv = document.getElementById('range-result');
    const product = productEl.value;

    let minAge = 0; let maxAge = 55;
    if (product === 'CR2C') maxAge = 85;
    if (product === 'NTC') { minAge = 55; maxAge = 80; }

    if (startInput === '' || endInput === '' || 
        startInput < minAge || startInput > maxAge || 
        endInput < minAge || endInput > maxAge) {
        resultDiv.textContent = `請輸入有效的起始與結束年齡 (${minAge}-${maxAge})`;
        resultDiv.style.color = 'red';
        return;
    }

    let start = parseInt(startInput);
    let end = parseInt(endInput);

    if (start > end) {
        [start, end] = [end, start];
    }

    let total = 0;
    let hasError = false;

    for (let i = start; i <= end; i++) {
        const r = getRate(i);
        if (r !== null && r !== undefined) {
            total += r;
        } else {
            hasError = true; // 區間內有查不到的費率
        }
    }
    
    total = Math.round(total * 100) / 100;

    let warning = hasError ? "<br><span style='font-size:0.8em; color:orange'>(部分年齡無法投保或無費率，已忽略計算)</span>" : "";
    
    resultDiv.innerHTML = `${start} 歲至 ${end} 歲累計總費率： <br><span style="font-size:1.5em">${total}</span> ${getUnitText()} ${warning}`;
    resultDiv.style.color = '#d32f2f';
}
