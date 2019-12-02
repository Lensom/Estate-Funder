// Google Map
function initMap() {
    let options = {
        zoom: 4,
        center: {lat: 50.424944850187026, lng: 10.752940693750004},
        styles: [
            {
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4279ff"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "landscape",
              "stylers": [
                {
                  "color": "#6caaff"
                }
              ]
            },
            {
              "featureType": "water",
              "stylers": [
                {
                  "color": "#4279ff"
                }
              ]
            }
          ]
    }

    let map = new 
    google.maps.Map(document.getElementById('map'), options)

    var markers = [
        {
          coords:{lat:50.4668,lng:-70.9495},
          content:'<h1>Lynn 1</h1>'
        },
        {
          coords:{lat:52.8584,lng:-22.9300},
          content:'<h1>Lynn 2</h1>'
        },
        {
          coords:{lat:42.7762,lng:-41.0773},
          content:'<h1>Lynn 3</h1>'
        },
        {
          coords:{lat:82.7762,lng:-41.0773},
          content:'<h1>Lynn 4</h1>'
        },
        {
          coords:{lat:62.7762,lng:-41.0773},
          content:'<h1>Lynn 5</h1>'
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

    function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          icon:'./img/google.png'
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }

}
