(function () {
  function Trails() {
    var Trails = {};

    var cerroSanLuisTrail = {
      trailName: 'Cerro San Luis (Madonna)',
      length: 4,
      elevation: '1,100 ft',
      pro: 'This is a very popular trail and one of my favorites when I want to get a good workout but need to keep it to a reasonable time frame. It is a nice wide trail so if your hiking with someone be it your friend or trusty dog you can walk side by side most of the time. If you are on your own and looking to set a record time it leaves plenty of room to pass. The views are great from all points in the trail since as you wind up you are basically getting a 365 degree view of SLO. On a clear day you can see the ocean in the north and south.',
      con: 'As I mentioned, it is popular so depending on when you go can be crowded and you will not exactly felt like you are getting away from the world. It can also be difficult to find parking and you can end up having to park towards downtown which is metered.',
      timeToHike: 75,
      difficulty: 'moderate',
      loop: 'Yes',
      crowd: 'It can be quite crowded between about 10 and 3 but earlier and later it quiets down a bit. ',
      parking: 'There is free parking at the trailhead off Marsh. However, between 10 and about 3 on a decent day it is usually pretty packed and may not have any available. If that happens you can also park in one of the streets as you head downtown and walk to the trailhead from there but it is metered so bring change.',
      bathrooms: 'No',
      trailPhoto: '/assets/images/trail_pics/cerro_san_luis.jpg',
      trailMapUrl: '',
      fees: 'None',
      dogs: 'Yes',
      id: 0,
      location: {
        lat: 35.2748481,
        lng: -120.6767364
      },
      keyName: 'cerroSanLuis'
    };

    var irishHillsMariposaKingTrail = {
      trailName: 'Irish Hills - Mariposa to King',
      length: 1.8,
      elevation: '460 ft',
      pro: 'It is short but offers a good climb and some nice scenery. It is perfect when you need to get out in nature (just avert your eyes from Costco on your way down) but don’t have a lot of time (maybe because you need to go to Costco). ',
      con: 'It can be hard to pass on the trail and blazing hot up top in the summer where there is a fire road. You do get some shade on the way up though.',
      timeToHike: 35,
      difficulty: 'easy-moderate',
      loop: 'Yes',
      crowd: 'It varies but is generally moderate. You won’t often have it to yourself but also won’t be seeing people the whole time.',
      parking: 'Free street parking in the area around the trailhead.',
      bathrooms: 'No',
      trailPhoto: '/assets/images/trail_pics/irish_mariposa_king.jpg',
      trailMapUrl: 'http://gis.slocity.org/Documents/TrailMaps/irishhillsweb.pdf',
      fees: 'None',
      dogs: 'Yes',
      id: 1,
      location: {
        lat: 35.254311,
        lng: -120.69525
      },
      keyName: 'mariposaKing'
    };

    var irishHillsFroomCreekTrail = {
      trailName: 'Irish Hills - Froom Creek',
      length: 4.3,
      elevation: '960 ft',
      pro: 'It feels like a world away once you get back into the canyon. The moderate climb is pretty easy and level so you can look around without falling on your face. You will often get to experience what feels like isolation, complete with the cry of hawks and wind moving through the trees.',
      con: 'It is really hot in summer seeming to radiate off the rocks. Also, if you are looking for vistas this isn’t the trail for you.',
      timeToHike: 60,
      difficulty: 'easy-moderate',
      loop: 'Yes',
      crowd: 'Usually minimal and if you do encounter people you can easily pass on the wider trail it offers.',
      parking: 'Free street parking in the area around the trailhead.',
      bathrooms: 'No',
      trailPhoto: '/assets/images/trail_pics/irish_froom_creek.jpg',
      trailMapUrl: 'http://gis.slocity.org/Documents/TrailMaps/irishhillsweb.pdf',
      fees: 'None',
      dogs: 'Yes',
      id: 2,
      location: {
        lat: 35.254311,
        lng: -120.69525
      },
      keyName: 'froomCreek'
    };

    var islayHillTrail = {
      trailName: 'Islay Hill',
      length: 1.8,
      elevation: '550 ft',
      pro: 'The effort vs reward ratio skews far into the reward category. It has a great 360 view of San Luis Obispo and Edna Valley. On clear days you can see the ocean too. It offers a good, all be it short workout and you can take a picture with an adventurous cow when you are done. Yes, I said cow. Check out the pic. PS I am seriously impressed with whoever got that up there.',
      con: 'It can be crowded and is narrow, making it hard to pass. The hill is fully exposed and brushy so not picturesque itself and hot in summer.',
      timeToHike: 40,
      difficulty: 'moderate',
      loop: 'No',
      crowd: 'You will definitely be sharing the trail and at times with a lot of people.',
      parking: 'Free street parking in the area around the trailhead. Watch out for runaway cars not put in park. I came back to find a car sideways into mine from a local driveway one day. But probably not a real threat most times.',
      bathrooms: 'No',
      trailPhoto: '/assets/images/trail_pics/islay_hill.jpg',
      trailMapUrl: 'http://gis.slocity.org/Documents/TrailMaps/islayhill.pdf',
      fees: 'None',
      dogs: 'yes',
      id: 3,
      location: {
        lat: 35.243296,
        lng: -120.62713
      },
      keyName: 'islayHill'
    };

    var polyCanyonTrail = {
      trailName: 'Poly Canyon',
      length: 4.78,
      elevation: '738 ft',
      pro: 'This is a great trail that winds back into the canyon behind Cal Poly (duh). It is not hard other than a climb towards the end but it is fairly long and has a nice view of the canyon and ocean on a clear day. This is a good trail if I want a decent calorie burn but am not up for really pushing.',
      con: "One drawback is the cows and the resulting hopscotch through the cow patties you get to do sometimes. Can't complain too much though since I have had the Cal Poly beef and it is excellent. Sorry vegetarian readers. Also, due to parking issues this is really only accessible on the weekends without some major effort.",
      timeToHike: 105,
      difficulty: 'moderate',
      loop: 'No',
      crowd: 'Usually pretty quiet, especially once you get passed the Architecture graveyard. Don’t worry it is just the buildings not some poor overworked architecture students. You will see more cows than hikers usually on this trail.',
      parking: 'It is by permit only most times during the weekdays. You can by a permit but it gets complicated and parking is tough so I don’t recommend it. Weekends are free but restrictions still apply so check the <a href="https://afd.calpoly.edu/parking/parkingoncampus/enforcementhours)">Cal Poly Enforcement</a> page for more information',
      bathrooms: 'No',
      trailPhoto: '/assets/images/trail_pics/poly_canyon.jpg',
      trailMapUrl: '',
      fees: 'None',
      dogs: 'Yes',
      id: 4,
      location: {
        lat: 35.30445,
        lng: -120.65845
      },
      keyName: 'polyCanyon'
    };

    var felsmanLoopTrail = {
      trailName: 'Felsman Loop',
      length: 3.5,
      elevation: '580 ft',
      pro: 'It has a lot of variety both with the scenery and the workout you’ll get. You get the heart pumping out the gate up the hill (gasping is a possibility) then it is like light interval training the rest of the way. You go from oak covered hills, to brush, to wide open vistas that overlook San Luis Obispo and off towards Morro Bay. ',
      con: 'It is a little short if you are looking for a calorie burn and the trails are narrow making it hard to pass anyone you catch up to.',
      timeToHike: 60,
      difficulty: 'easy-moderate',
      loop: 'Yes',
      crowd: 'It is usually minimal and you can practically have it to yourself once you get back further along the trail.',
      parking: 'It is free street parking. I have never had an issue.',
      bathrooms: 'No',
      trailPhoto: '/assets/images/trail_pics/felsman_loop.jpg',
      trailMapUrl: 'http://gis.slocity.org/Documents/TrailMaps/bishoppeakweb.pdf',
      fees: 'None',
      dogs: 'Yes',
      id: 5,
      location: {
        lat: 35.30433,
        lng: -120.685438
      },
      keyName: 'felsman'
    };

    var bishopPeakTrail = {
      trailName: 'Bishop Peak',
      length: 3.4,
      elevation: '950 ft',
      pro: 'It offers a great view at the end and you get the bonus of seeing some rock climbers along the way if you are interested. It is also a great leg workout since most of the trail is like a stairstepper on uneven rocks',
      con: "It is narrow and crowded so there is a lot of starting and stopping. Also, if you have knees that protest with a lot of stairs you aren't going to feel so good by the end.",
      timeToHike: 80,
      difficulty: 'moderate-strenuous',
      loop: 'No',
      crowd: 'It is generally crowded and you since the trail is narrow you often need to wait or be waited on to pass.',
      parking: 'At the Highland entrance it is free street parking but limited and you often have to park a long way down the hill.',
      bathrooms: 'No',
      trailPhoto: '/assets/images/trail_pics/bishop_peak.jpg',
      trailMapUrl: 'http://gis.slocity.org/Documents/TrailMaps/bishoppeakweb.pdf',
      fees: 'None',
      dogs: 'Yes',
      id: 6,
      location: {
        lat: 35.30115,
        lng: -120.68916
      },
      keyName: 'bishopPeak'
    };

//Used to match url passed parameters in the .gettrail method
    var allTrails = {
      cerroSanLuis: cerroSanLuisTrail,
      mariposaKing: irishHillsMariposaKingTrail,
      froomCreek: irishHillsFroomCreekTrail,
      islayHill: islayHillTrail,
      polyCanyon: polyCanyonTrail,
      felsman: felsmanLoopTrail,
      bishopPeak: bishopPeakTrail,
    };

//Used to create array of trails to be used with angularGM module
   var mapArray = function(){
     var theArray = [];
     for(var key in allTrails){
       theArray.push(allTrails[key]);
     }
     return theArray;
   }();

   Trails.trailArray = function(){
        return mapArray
    }

//Retrieves individual trail to display based on url passed parameter
    Trails.getTrail = function(trailId) {
      return allTrails[trailId]
    }

//Retrieves all trails
    Trails.getAllTrails = function() {
      return allTrails
    }
    return Trails;
  }

  angular
    .module('sloHiker')
    .factory('Trails', Trails);
})();
