let numOfItems = 10
let grid_content = document.getElementById('grid_content')
for (let i = 0; i < numOfItems; i++) {
    grid_content.innerHTML += `
    <div class="content_div">
        <div class="image_div">
            <img  class="preview_img" src="5964_136a1d177a-dedicated_300620-1898-ded-large.jpg" alt="">
        </div>
        <div class="price_div">
            <p class="name_p">
                T-shirt Stockholm Dedicated Logo Grey Melange
            </p>
            <p class="price_p">
                Giá: 1000$
            </p>
        </div>
    </div>
    `
}

// slide page
let num_page = 2
let page_landing = 0
let slide_page_div = document.getElementById("orange_blue")
for (let i = 0; i < num_page; i++) {
    let slide_icon = document.createElement('div')
    let minus_pos = -(num_page - 1) * 1 + i * 2
    let color_slide = `background-color: white`
    if (i == page_landing) {
        color_slide = `background-color: black`
    }
    slide_icon.innerHTML = `<div class="slide-icon" style="left:`+(50+minus_pos)+`%;`+color_slide+`"></div>`.trim()
    slide_page_div.innerHTML += slide_icon.innerHTML
}
//click previous or next
let slide_img = document.getElementById('slide-img-id')
let previous_slide_btn = document.getElementById("back-orange-blue-btn-id")
let next_slide_btn = document.getElementById("next-orange-blue-btn-id")
function changeSlideIconBackGround() {
    let slide_icons = document.getElementsByClassName(`slide-icon`)
    Array.prototype.forEach.call(slide_icons, function(icon) {
        icon.style.backgroundColor = "white"
    })
    slide_icons[page_landing].style.backgroundColor = "black"
}
function chooseImg(pagelanding) {
    slide_img.style.opacity = 0
    if (pagelanding == 1) {
        setTimeout(function() {
            slide_img.src = "degrey-orange.webp"
            slide_img.style.opacity = 1
        }, 200)
    }
    else {
        setTimeout(function() {
            slide_img.src =  "degrey-blue.webp"
            slide_img.style.opacity = 1
        }, 200)
    }
    changeSlideIconBackGround()
}
function decreasePageLanding() {
    page_landing == 0 ? page_landing = num_page - 1 : page_landing -= 1
    return page_landing
}
function increasePageLanding() {
    page_landing == num_page - 1 ? page_landing = 0 : page_landing += 1
    return page_landing
}
previous_slide_btn.onclick = function() {
    chooseImg(decreasePageLanding())
}
next_slide_btn.onclick = function() {
    chooseImg(increasePageLanding())
}
//auto changeImage 
function autoChangeImage() {
    setTimeout(() => {
        chooseImg(increasePageLanding())
        autoChangeImage
    }, 10000);
}
autoChangeImage()

//promote div
//sample
/*
<li class="promote">
<p class="promote-name">Degrey giao hoả tốc</p>
<p class="promote-descript">
    Degrey dành tặng Hà Nội mã freeship 0đ (số lượng có hạn)
</p>
<button class="promote-copy-btn">
    Sao chép mã
</button>
</li>
*/

class promote {
    name;
    descript;
    code;
    constructor(name, descript, code) {
        this.name = name
        this.descript = descript
        this.code = code
    }
}
function getPromote() {
    let promote1 = new promote('Degrey giao hoả tốc', 'Giờ đây bạn có thể nhận hàng nhanh trong ngày mà không cần chờ đợi tại Sài Gòn', '')
    let promote2 = new promote('Hà Nội Freeship', 'Degrey dành tặng Hà Nội mã freeship 0đ (số lượng có hạn)', 'srsefdsfesdf')
    let promote3 = new promote('Tặng 125.000đ', 'Áp dụng đặc biệt cho đơn hàng từ 2,5 triệu đồng.', 'fgfgfhfg')
    let promote4 = new promote('Khuyến mãi đến 10%', 'Mã giảm 10% cho hoá đơn mua hàng trên 5 triệu đồng', 'erthfghfgh')
    let promotes = new Array();
    promotes.push(promote1)
    promotes.push(promote2)
    promotes.push(promote3)
    promotes.push(promote4)
    return promotes
}

let promotes = getPromote() 
let promotes_ul = document.getElementById("promotes")
Array.prototype.forEach.call(promotes, function(prom) {
    let promote_button_htmlString = prom.code == '' ? prom.code : `<button value="`+prom.code+`" class="promote-copy-btn">
    Sao chép mã
</button>`
    let promote_item_htmlString = `
    <li class="promote">
        <p class="promote-name">` +
            prom.name +
        `
        </p>
        <p class="promote-descript">` + 
            prom.descript+
        `</p>
        ` +  promote_button_htmlString +
    `<li>
    `
    let promote_item_li = document.createElement("li")
    promote_item_li.innerHTML = promote_item_htmlString.trim()
    promotes_ul.innerHTML += promote_item_li.innerHTML
})
//copy code
let default_string = "Sao chép mã"
let copy_string = "Đã sao chép"
let promote_btns = document.getElementsByClassName("promote-copy-btn")



Array.prototype.forEach.call(promote_btns, function(btn) {
    btn.onclick = function() {
        Array.prototype.forEach.call(promote_btns, function(button) {
            button.textContent = default_string
        })
        btn.textContent = copy_string
        navigator.clipboard.writeText(btn.value);
    }
})