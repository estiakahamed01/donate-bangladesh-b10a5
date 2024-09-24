document.getElementById('donation-button').addEventListener('click',function(){
    document.getElementById('donation-button').classList.add('bg-[#B4F461]')
    document.getElementById('donation-button').classList.remove('text-gray-500','border-2', 'border-solid');
    document.getElementById('history-button').classList.remove('bg-[#B4F461]')
    showSectionById('donation-section')
    
})


document.getElementById('history-button').addEventListener('click',function(){
    document.getElementById('history-button').classList.add('bg-[#B4F461]')
    document.getElementById('history-button').classList.remove('text-gray-500','border-2', 'border-solid','hidden');
    document.getElementById('donation-button').classList.remove('bg-[#B4F461]')
    showSectionById('history-section')
})

document.getElementById('blog-button').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = '/blog.html'
})