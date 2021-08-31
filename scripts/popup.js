
// Цикл попапа
let popups = document.querySelectorAll('.popup')
for(let i=0; i< popups.length; i++) {
        var e = document.getElementById("popupNumber");
        e.id = "popupNumber"+i;
        document.getElementById(e.id).className += " popup"+i;
    }


let popup = document.querySelector('.popup0')
let button = document.querySelector('.slider-1-detail')
let body = document.querySelectorAll('.popup-body')


    
// Цикл подробнее
let details = document.querySelectorAll('.popupDetail')  
for(var i=0; i< details.length; i++) {
    var f = document.getElementById('detailNumber')
    f.id = "detailNumber"+i
    document.getElementById(f.id).className += " detail"+i
}

// Цикл закрытия
let closes = document.querySelectorAll('.closePopup')
for(var i=0; i< closes.length; i++) {
    var g = document.getElementById('closeNumber');
    g.id = "closeNumber"+i;
    document.getElementById(g.id).className += " closePopup"+i;
 }

//  Ховер открытия на крестик
    document.querySelectorAll('.closePopup').forEach(function(closePopup) {
        closePopup.onmouseover = function() {
            document.querySelectorAll(".popup-body__close-wrapper .span-1, .popup-body__close-wrapper .span-2").forEach(function(popupBody__closeWrapper) {
                popupBody__closeWrapper.classList.add('hover');

            })
        }
    })

// Ховер закрытия на крестик
    document.querySelectorAll('.closePopup').forEach(function(closePopup) {
        closePopup.onmouseout = function() {
            document.querySelectorAll(".popup-body__close-wrapper .span-1, .popup-body__close-wrapper .span-2").forEach(function(popupBody__closeWrapper) {
                popupBody__closeWrapper.classList.remove('hover');
            })
        }
    })
        
    
// Прописи

// Открытие

    document.getElementById("detailNumber0").onclick = function() {
        document.querySelector('.popup0').classList.add('open')
    }

    document.getElementById("detailNumber1").onclick = function() {
        document.querySelector('.popup1').classList.add('open')
    }
    
    document.getElementById("detailNumber2").onclick = function() {
        document.querySelector('.popup2').classList.add('open')
    }

    document.getElementById("detailNumber3").onclick = function() {
        document.querySelector('.popup3').classList.add('open')
    }

    document.getElementById("detailNumber4").onclick = function() {
        document.querySelector('.popup4').classList.add('open')
    }

    document.getElementById("detailNumber5").onclick = function() {
        document.querySelector('.popup5').classList.add('open')
    }

    document.getElementById("detailNumber6").onclick = function() {
        document.querySelector('.popup6').classList.add('open')
    }

    document.getElementById("detailNumber7").onclick = function() {
        document.querySelector('.popup7').classList.add('open')
    }

    document.getElementById("detailNumber8").onclick = function() {
        document.querySelector('.popup8').classList.add('open')
    }

// Закрытие

    $(document).mousedown(function (e){ // событие клика по веб-документу
    var div = $(body); // тут указываем класс элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        document.querySelector('.popup0').classList.remove('open'); // скрываем его
    }
    });

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup1').classList.remove('open'); // скрываем его
    }
    });

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup2').classList.remove('open'); // скрываем его
    }
    });
    

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup3').classList.remove('open'); // скрываем его
    }
    });

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup4').classList.remove('open'); // скрываем его
    }
    });

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup5').classList.remove('open'); // скрываем его
    }
    });

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup6').classList.remove('open'); // скрываем его
    }
    });


    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup7').classList.remove('open'); // скрываем его
    }
    });

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $(body); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.popup8').classList.remove('open'); // скрываем его
    }
    });
    
    
// Закрыетие на крестик

    document.getElementById('closeNumber0').onclick = function() {
        document.querySelector('.popup0').classList.remove('open')
    }
    
    document.getElementById('closeNumber1').onclick = function() {
        document.querySelector('.popup1').classList.remove('open')
    }

    document.getElementById('closeNumber2').onclick = function() {
        document.querySelector('.popup2').classList.remove('open')
    }

    document.getElementById('closeNumber3').onclick = function() {
        document.querySelector('.popup3').classList.remove('open')
    }

    document.getElementById('closeNumber4').onclick = function() {
        document.querySelector('.popup4').classList.remove('open')
    }

    document.getElementById('closeNumber5').onclick = function() {
        document.querySelector('.popup5').classList.remove('open')
    }

    document.getElementById('closeNumber6').onclick = function() {
        document.querySelector('.popup6').classList.remove('open')
    }

    document.getElementById('closeNumber7').onclick = function() {
        document.querySelector('.popup7').classList.remove('open')
    }

    document.getElementById('closeNumber8').onclick = function() {
        document.querySelector('.popup8').classList.remove('open')
    }

    


// Мамины сокровища

let richesPopup = document.querySelectorAll('.riches-popup')
for(let i=0; i< richesPopup.length; i++) {
        var h = document.getElementById("richesPopupNumber");
        h.id = "richesPopupNumber"+i;
        document.getElementById(h.id).className += " riches-popup"+i;
    }

let richesDetail = document.querySelectorAll('.richesDetail')
for(let i=0; i< richesDetail.length; i++) {
        var j = document.getElementById("richesDetailNumber");
        j.id = "richesDetailNumber"+i;
        document.getElementById(j.id).className += " richesDetail"+i;
    }

// Открытие
    
    document.getElementById("richesDetailNumber0").onclick = function() {
        document.querySelector('.riches-popup0').classList.add('open')
    }

    document.getElementById("richesDetailNumber1").onclick = function() {
        document.querySelector('.riches-popup0').classList.add('open')
    }

    document.getElementById("richesDetailNumber2").onclick = function() {
        document.querySelector('.riches-popup0').classList.add('open')
    }

// Закрытие

// Закрытие на крестик

    document.getElementById('closeNumber9').onclick = function() {
        document.querySelector('.riches-popup0').classList.remove('open')
    }

// Закрытие в свободном месте

    $(document).mousedown(function (e){ // событие клика по веб-документу
        var div = $('.riches-popup-body'); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            document.querySelector('.riches-popup0').classList.remove('open'); // скрываем его
    }
    });

    