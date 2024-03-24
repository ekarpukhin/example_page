var map = L.map('map').setView([55.751578, 37.619228], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([55.761436, 37.631936]).addTo(map)
var marker2 = L.marker([55.753164, 37.648106]).addTo(map)
var marker3 = L.marker([55.802993, 37.409457]).addTo(map)


