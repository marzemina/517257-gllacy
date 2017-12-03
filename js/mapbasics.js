var myMap;
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.93930, 30.3294], 
        zoom: 16
    }),
	 myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
            hintContent: 'Мороженное "Глейси" находится здесь',
            balloonContent: 'Заходите в гости'
        }, {

            iconLayout: 'default#image',

            iconImageHref: 'img/pin.png',

            iconImageSize: [218, 142],
        
            iconImageOffset: [-41, -142]
        });
myMap.geoObjects.add(myPlacemark);
	
}