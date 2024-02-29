const numOfUnreadMsg = document.getElementById('numMsg');
const markAsRead = document.querySelector('.markRead');
const notificationMsg = document.querySelectorAll('.card');
const cardComponent = document.querySelector('.card');
const redIcon = document.querySelectorAll('.icon');
const iconEl = document.querySelector('.icon');
const numMsg = document.getElementById('numMsg')

markAsRead.addEventListener('click', function () {
    notificationMsg.forEach(function (notification, index) {
        notification.classList.remove('unread');
        iconEl.classList.toggle('null');
        redIcon[index].remove();
        unreadCount();
    })

});


notificationMsg.forEach(function (msg, index) {
    msg.addEventListener('click', function () {
        msg.classList.toggle('unread');
        redIcon[index].remove();
        unreadCount();
    })
})
function unreadCount() {
    const unread = document.querySelectorAll('.card.unread').length;
    numOfUnreadMsg.textContent = unread;
    console.log(unread);
}