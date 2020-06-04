const image1 = new Image()
image1.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim1.png"
image1.height = "200rem"

const image2 = new Image()
image2.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim2.png"
image2.height = "200rem"

const image3 = new Image()
image3.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim3.png"
image3.height = "200rem"

const image4 = new Image()
image4.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim4.png"
image4.height = "200rem"

const image5 = new Image()
image5.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim5.png"
image5.height = "200rem"

const image6 = new Image()
image6.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim6.png"
image6.height = "200rem"

const image7 = new Image()
image7.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim7.png"
image7.height = "200rem"

const image8 = new Image()
image8.src = "/WSOA3028A_1825142/Victims/VictimsPics/Victim8.png"
image8.height = "200rem"

let step = 1
function slideshow() {
    document.images.slide.src = eval("image" + step + ".src")
    if (step < 8)
        step++
    else
        step = 1
    setTimeout("slideshow()", 4000)
}

slideshow()
