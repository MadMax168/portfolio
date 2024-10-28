const xleft = document.getElementById("xleft");
const mepage = document.getElementById("mepage");
const edupage = document.getElementById("edupage");
const pri = document.getElementById("pri");
const sec = document.getElementById("sec");
const uni = document.getElementById("uni");

document.getElementById("btn-me").addEventListener("click", function() {
    if (mepage.classList.contains("hidden")) {
        // ถ้า mepage ซ่อนอยู่ ให้แสดง mepage และซ่อน edupage
        xleft.classList.add("fade-left");
        mepage.classList.remove("hidden");
        edupage.classList.add("hidden");
    } else {
        // ถ้า mepage ไม่ซ่อน แสดงว่าเป็นการกดซ้ำ ให้ลบ fade-left และ hidden
        xleft.classList.remove("fade-left");
        mepage.classList.add("hidden");
    }
});

document.getElementById("btn-edu").addEventListener("click", function() {
    if (edupage.classList.contains("hidden")) {
        // ถ้า edupage ซ่อนอยู่ ให้แสดง edupage และซ่อน mepage
        xleft.classList.add("fade-left");
        edupage.classList.remove("hidden");
        mepage.classList.add("hidden");
    } else {
        // ถ้า edupage ไม่ซ่อน แสดงว่าเป็นการกดซ้ำ ให้ลบ fade-left และ hidden
        xleft.classList.remove("fade-left");
        edupage.classList.add("hidden");
    }
});

document.getElementById("pri-btn").addEventListener("click", function() {
    pri.classList.remove("hidden");
    sec.classList.add("hidden");
    uni.classList.add("hidden");
});

document.getElementById("sec-btn").addEventListener("click", function() {
    sec.classList.remove("hidden");
    pri.classList.add("hidden");
    uni.classList.add("hidden");
});

document.getElementById("uni-btn").addEventListener("click", function() {
    uni.classList.remove("hidden");
    sec.classList.add("hidden");
    pri.classList.add("hidden");
});