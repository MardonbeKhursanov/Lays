let cursor = document.getElementById('cursor')


window.addEventListener('mousemove', function(e){
    Y = `${e.clientY - 15}px`
    X = `${e.clientX - 10}px`
    cursor.style.transform = `translate(${X}, ${Y})`
})