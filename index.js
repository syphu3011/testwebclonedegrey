

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
        autoChangeImage()
    }, 10000);
}
autoChangeImage()

//promote div
//sample
/*
<li class="promote">
<p class="promote-name">Degrey giao ho??? t???c</p>
<p class="promote-descript">
    Degrey d??nh t???ng H?? N???i m?? freeship 0?? (s??? l?????ng c?? h???n)
</p>
<button class="promote-copy-btn">
    Sao ch??p m??
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
    let promote1 = new promote('Degrey giao ho??? t???c', 'Gi??? ????y b???n c?? th??? nh???n h??ng nhanh trong ng??y m?? kh??ng c???n ch??? ?????i t???i S??i G??n', '')
    let promote2 = new promote('H?? N???i Freeship', 'Degrey d??nh t???ng H?? N???i m?? freeship 0?? (s??? l?????ng c?? h???n)', 'srsefdsfesdf')
    let promote3 = new promote('T???ng 125.000??', '??p d???ng ?????c bi???t cho ????n h??ng t??? 2,5 tri???u ?????ng.', 'fgfgfhfg')
    let promote4 = new promote('Khuy???n m??i ?????n 10%', 'M?? gi???m 10% cho ho?? ????n mua h??ng tr??n 5 tri???u ?????ng', 'erthfghfgh')
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
    Sao ch??p m??
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
let default_string = "Sao ch??p m??"
let copy_string = "???? sao ch??p"
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


//all grid
let numOfItems = 10
let grid_content = document.getElementById('grid_content')
for (let i = 0; i < numOfItems; i++) {
    grid_content.innerHTML += `
    <li class="content_div">
            <div class="discount">
                -35%
            </div>
            <div class="image_div">
                <img  class="preview_img" src="5964_136a1d177a-dedicated_300620-1898-ded-large.jpg" alt="">
            </div>
            <div class="price_div">
                <p class="name_p">
                    T-shirt Stockholm Dedicated Logo Grey Melange
                </p>
                <div class="price_cur_div">
                    <p class="price_p">
                        220,000???
                    </p>
                    <p class="old_price">
                        340,000???
                    </p>
                </div>
            </div>
        </li>
    `
}

//process left bar

//var choose item
let choose = 0
//var check close open
let open = false
//leftbar 0
let left_bar_item_0_0 =  {
    name: 'Ba l?? | Backpacks',
    image: 'left0_0.jpeg',
    link: ''
}
let left_bar_item_0_1 =  {
    name: 'T??i | Bag',
    image: 'left0_1.jpeg',
    link: ''
}
let left_bar_item_0_2 =  {
    name: 'V?? | Wallet',
    image: 'left0_2.jpeg',
    link: ''
}
let left_bar_item_0_3 =  {
    name: 'Xo??i b??ng',
    image: 'left0_3.jpeg',
    link: ''
}
let left_top_bar_0 = {
    title: 'PH??? KI???N',
    left_bar_items: new Array(left_bar_item_0_0, left_bar_item_0_1, left_bar_item_0_2, left_bar_item_0_3)
}
//left bar 1
let left_bar_item_1_0 =  {
    name: '??o kho??c | Jacket',
    image: 'left1_0.jpeg',
    link: ''
}
let left_bar_item_1_1 =  {
    name: '??o thun | Tshirt',
    image: 'left1_1.jpeg',
    link: ''
}
let left_bar_item_1_2 =  {
    name: 'S?? mi | Shirt',
    image: 'left1_2.jpeg',
    link: ''
}
let left_bar_item_1_3 =  {
    name: '??o tay d??i | Sweater',
    image: 'left1_3.jpeg',
    link: ''
}
let left_bar_item_1_4 =  {
    name: '??o tr??m ?????u | Hoodie',
    image: 'left1_4.jpeg',
    link: ''
}
let left_top_bar_1 = {
    title: '??O',
    left_bar_items: new Array(left_bar_item_1_0, left_bar_item_1_1, left_bar_item_1_2, left_bar_item_1_3, left_bar_item_1_4)
}

//left bar 2
let left_bar_item_2_0 =  {
    name: 'Qu???n  d??i | Pants',
    image: 'left2_0.jpeg',
    link: ''
}
let left_bar_item_2_1 =  {
    name: 'Qu???n ng???n | Short',
    image: 'left2_1.jpeg',
    link: ''
}
let left_top_bar_2 = {
    title: 'QU???N',
    left_bar_items: new Array(left_bar_item_2_0, left_bar_item_2_1)
}

//all data left bar
let left_bar = new Array(left_top_bar_0, left_top_bar_1, left_top_bar_2)
//fill left top bar
/*<button class="top-left-bar-btn">
    <p class="top-left-bar-btn-p">
        Ph??? ki???n
    </p>
</button>
*/
const before_topleft_script_HTML = `
<button class="top-left-bar-btn">
    <p class="top-left-bar-btn-p">
`
const after_topleft_script_HTML = `
    </p>
</button>
`
function init_top_left_bar_script() {
    let scripts = '';
    left_bar.forEach((top_item) => {
        scripts += before_topleft_script_HTML + top_item.title + after_topleft_script_HTML
    })
    return `<div class="top-left-bar">` + scripts +`</div>`
}

//fill item
/*<li class="flex-left-bar-content-item" style="background-image: url(left0_0.jpeg);">
    <div class="left-bar-item-title" >
        <a href="" class="left-bar-a">
            Balo | Backpacks
        </a>
    </div>
</li>
*/
function init_left_bar_item_script(left_top_bar_item_arg) {
    let scripts = '';
    left_top_bar_item_arg.forEach((item) => {
        scripts += `
        <li class="flex-left-bar-content-item" style="background-image: url(` + item.image + `);">
            <div class="left-bar-item-title" >
                <a href="` + item.link + `" class="left-bar-a">`
                    +item.name+`
                </a>
            </div>
        </li>`
    })
    return `<div class="left-bar-content">
                <div class="flex-left-bar-content">` 
                    + scripts +
                `</div>
            </div>`
}
function init_left_bar_items_script() {
    let scripts = '';
    let top_item = left_bar[choose]
    scripts += init_left_bar_item_script(top_item.left_bar_items)
    return `<div class="left-bar-content">
                <div class="flex-left-bar-content">` 
                    + scripts +
                `</div>
            </div>`
}
function init_left_bar_script() {
    return ` <div class="left-bar">`
                + init_top_left_bar_script() + init_left_bar_items_script() +`
            </div>`
}
function change_Left_Bar_Item() {
    let flex_left_bar_content = document.getElementsByClassName("flex-left-bar-content")
    let top_left_bar_button = document.getElementsByClassName("top-left-bar-btn")
    let content_change = init_left_bar_items_script().trim()
    flex_left_bar_content[0].innerHTML = content_change
}
function init_left_bar() {
    let left_bar = document.getElementsByClassName("left-bar-container")
    let div_left_bar = document.createElement("div")
    let left_bar_scripts  = init_left_bar_script().trim()
    div_left_bar.innerHTML = left_bar_scripts
    left_bar[0].innerHTML += div_left_bar.innerHTML
    let top_left_bar_button = document.getElementsByClassName("top-left-bar-btn")
    Array.prototype.forEach.call(top_left_bar_button, function(bttn) {
        bttn.style.borderBottom = "1px solid rgb(200,200,200)"
    })
    //click top left button
    for (let index = 0; index < top_left_bar_button.length; index++) {
        const btn = top_left_bar_button[index];
        btn.onclick = function() {
            Array.prototype.forEach.call(top_left_bar_button, function(bttn) {
                bttn.style.borderBottom = "1px solid rgb(200,200,200)"
            })
            btn.style.borderBottom = "2px solid black "
            btn.style.transition = "all 0.2s"
            choose = index
            change_Left_Bar_Item()
        }
    }
    //add border first button
    top_left_bar_button[0].style.borderBottom = "2px solid black "
    top_left_bar_button[0].style.transition = "all 0.2s"
    left_bar[0].style.display = "none"
}
init_left_bar()

// click outside
window.addEventListener('click', function(e){   
    if (!document.getElementsByClassName('top-left-bar')[0].contains(e.target) && !document.getElementsByClassName('left-bar-content')[0].contains(e.target) && open){
        close_Left_Bar()
    } 
});
//click more
let close_left_bar = document.getElementById("close_btn")
function close_Left_Bar() {
    let left_bar = document.getElementsByClassName("left-bar-container")
    left_bar[0].style.backgroundColor = "rgba(0,0,0,0)"
    let percentLeft = parseInt(left_bar[0].style.left.replace('%','').replace('px',''))
    close_left_bar.style.display =  "none"
    let timerId = null
    timerId = setInterval(() => {
        percentLeft -= 3
        left_bar[0].style.left = "" + percentLeft + "%"
        if (percentLeft <= -100) {
            clearInterval(timerId)
            left_bar[0].style.display = "none"
            open = false
        }
    }, 5);
}

close_left_bar.onclick = function() {close_Left_Bar()}
//hide close btn
close_left_bar.style.display =  "none"
let more_homepage_btn = document.getElementById("more_home_page")
function open_Left_Bar () {
    let left_bar = document.getElementsByClassName("left-bar-container")
    left_bar[0].style.display = "unset"
    left_bar[0].style.left = "-100%"
    left_bar[0].style.backgroundColor = "rgba(0,0,0,0)"
    let percentLeft = 100
    let timerId = null;
    timerId = setInterval(() => {
        percentLeft -= 3
        left_bar[0].style.left = "-" + percentLeft + "%"
        if (percentLeft <= 0) {
            clearInterval(timerId)
            left_bar[0].style.backgroundColor = "rgba(0,0,0,0.5)"
            close_left_bar.style.display = "inherit"
            open = true
        }
    }, 5);
}
more_homepage_btn.onclick = function () {
    open_Left_Bar()
}

