var signUp = document.querySelector('.sign-up-main')
var signUpTable = document.querySelector('.sign-up')

var addNews = document.querySelector('.add-news-main')
var addNewsTable = document.querySelector('.post-news')

var overLayout = document.querySelector('.over-layout')

var signIn = document.querySelector('.sign-in-main')
var signInTable = document.querySelector('.sign-in')

var transferSignUp = document.querySelector('.transfer-to-sign-in')
var transferSigniIn = document.querySelector('.transfer-to-sign-up')


signUp.onclick = function(e) {
    signUpTable.setAttribute('style', 'display: flex')
    overLayout.setAttribute('style', 'display: block')
}

signIn.onclick = function(e) {
    signInTable.setAttribute('style', 'display: flex')
    overLayout.setAttribute('style', 'display: block')
}

addNews.onclick = function(e) {
    addNewsTable.setAttribute('style', 'display: flex')
    overLayout.setAttribute('style', 'display: block')
}

overLayout.onclick = function(e) {
    signUpTable.setAttribute('style', 'display: none')
    signInTable.setAttribute('style', 'display: none')
    addNewsTable.setAttribute('style', 'display: none')
    overLayout.setAttribute('style', 'display: none')
}

transferSignUp.onclick = function(e) {
    signInTable.setAttribute('style', 'display: none')
    setTimeout(function() {
        signUpTable.setAttribute('style', 'display: flex')
    }, 100)
}

transferSigniIn.onclick = function(e) {
    signUpTable.setAttribute('style', 'display: none')
    setTimeout(function() {
        signInTable.setAttribute('style', 'display: flex')
    }, 100)
}