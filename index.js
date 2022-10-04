

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const tabs = $$('.tab-item')
const panes = $$('.tab-pane')



const tabActive =  $('.tab-item.active')
const line = $('.line')


// sau khi lấy dược line ra thì set cho nó 1 left và width mới và cho nó = left và width của element có class active
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'





// lặp qua mảng vì nó trả về 1 mảng
tabs.forEach((tabs, index) => {

    // lọc qua panes đã khai báo ở trên
    const pane = panes[index]

    tabs.onclick = function () {

        //  khi click vào item mới thì xóa class 'active' ở item cũ
        $('.tab-item.active').classList.remove('active')
        // click vào item nào thì thêm class 'active' chỗ đó
        this.classList.add('active')


        // khi click vào pane mới thì xóa claas 'active' ở pane cũ
        $('.tab-pane.active').classList.remove('active')
        // khi click vào item nào thì sẽ hiện pane đó và thêm class'active' ở item đó
        pane.classList.add('active')


        // khi click vào nó lấy vị trí left và width của items click  rồi thêm vào 
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

    }
})

