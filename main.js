function updateClock() {
    let now = new Date()
    let dname = now.getDay()
    mon = now.getMonth()
    dnum = now.getDate()
    year = now.getFullYear()
    hou = now.getHours()
    min = now.getMinutes()
    sec = now.getSeconds()

    dnum = (dnum < 10) ? '0' + dnum : dnum
    hou = (hou < 10) ? '0' + hou : hou
    min = (min < 10) ? '0' + min : min
    sec = (sec < 10) ? '0' + sec : sec

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let week = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let ids = ['dayname', 'month', 'daynum', 'year', 'hour', 'minutes', 'second']
    let value = [week[dname], months[mon], dnum, year, hou, min, sec]
    for (let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = value[i]



}


function initClock() {
    updateClock()
    window.setInterval("updateClock()", 1)
}





// let img = document.getElementById('img')
// const imgArray = ['/assets/bg-01.jpeg', '/assets/bg-02.jpeg', '/assets/bg-03.jpeg', '/assets/bg-04.jpeg', '/assets/bg-05.jpeg']
// let index = 0
// const changeImage = () => {
//     img.setAttribute("src", imgArray[index]);
//     index++;
    
//     if (index >= imgArray.length) {
//         index = 0;
//     }
// }

// setInterval("changeImage()", 4000);