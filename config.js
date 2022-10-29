
var config = {
    style: 'mapbox://styles/dmf233/cl9tjcqwf000016tg0cuxgtpd',
    accessToken: 'pk.eyJ1IjoiZG1mMjMzIiwiYSI6ImNsOTJ6NjhncDFvdXM0MW1ma2hpYW0zbTUifQ.oMxK01NXekozo-1bQcmDIQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The Effect of Flooding on Public Housing',
    subtitle: 'Analysis of flood damage on public housing, specifically noting Red Hook, Brooklyn, New York.',
    byline: 'By Deanna Fraser',
    footer: ' <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Public and Affordable Housing Flood Risk',
            image: '',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this.',
            location: {
                center: [-73.99149, 40.70741],
                zoom: 11.50,
                pitch: 45.00,
                bearing: 30.11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Housing',
            image: 'https://insideclimatenews.org/wp-content/uploads/2017/10/red-hook-flooding_alan-chin-via-bridge.jpg',
            description: 'The Red Hook Houses are two connected public housing complexes located in Red Hook, Brooklyn, New York City. They comprise the largest housing development in Brooklyn.The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. During Hurricane Sandy in 2012, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides. The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that affected many residents health.',
            location: {
                center: [-74.00889, 40.67633],
                zoom: 13.22,
                pitch: 45.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
