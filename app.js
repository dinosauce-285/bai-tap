async function showPic() {
 const apiLink = await fetch('https://dog.ceo/api/breeds/image/random')
 let picLink =  await apiLink.json() ;

 let container = document.getElementById('container')

container.innerHTML = `<img src="${picLink.message}" alt="">`
}
showPic()

