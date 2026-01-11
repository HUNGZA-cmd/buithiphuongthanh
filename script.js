const thuviendongvat = [
    {
        ten: "cánh cụt",
        hinhanh: "./THUVIEN/CANHCUT/CANHCUT1.jpg",
        imgCount: 8,
        folder: "./THUVIEN/CANHCUT",
        prefix: "CANHCUT",
        id: "CANHCUT"
    },
    {
        ten: "chó",
        hinhanh: "./thuvien/cho/cho1.jpg",
        imgCount: 8,
        folder: "./thuvien/cho",
        prefix: "cho",
        id: "cho"
    },
    {
        ten: "mèo",
        hinhanh: "./thuvien/meo/meo1.jpg",
        imgCount: 8,
        folder: "./thuvien/meo",
        prefix: "meo",
        id: "meo"
    },
    {
        ten: "gấu trúc",
        hinhanh: "./thuvien/GAUTRUC/GAU1.jpg",
        imgCount: 8,
        folder: "./thuvien/GAUTRUC",
        prefix: "GAU",
        id: "GAU"
    },
    {
        ten: "hamster",
        hinhanh: "./THUVIEN/HAMSTER/HAM1.jpg",
        imgCount: 8,
        folder: "./THUVIEN/HAMSTER",
        prefix: "HAM",
        id: "HAM"
    },
];


const hienthidongvat = document.getElementById("danhsach");
const thuvienanh = document.getElementById("thuvienanh");

thuviendongvat.forEach(dongvat => {
    const thedongvat = document.createElement("div");
    thedongvat.classList.add("danhsach-card");
    thedongvat.innerHTML = `
        <img src="${dongvat.hinhanh}" alt="${dongvat.ten}">
        <div class="danhsach-name">${dongvat.ten}</div>
    `;
    thedongvat.addEventListener("click", () => {
        loadgallery(dongvat);
    });


function loadgallery(dongvat) {
    thuvienanh.innerHTML = ""; 

    for (let i = 1; i <= dongvat.imgCount; i++) {
        const img = document.createElement("img");
        img.src = `${dongvat.folder}/${dongvat.prefix}${i}.jpg`;
        img.alt = `${dongvat.ten} ${i}`;
        thuvienanh.appendChild(img);
    }
}


    hienthidongvat.appendChild(thedongvat);
});