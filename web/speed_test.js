/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Luke Mahe (v2 author: Xiaoxi Wu)
 */

var speedTest = {};
/**
var initLat='';
var initLng='';
var geocoder = new google.maps.Geocoder();
var address = mapAddress;

geocoder.geocode( { 'address': address}, function(results, status) { 
if (status == google.maps.GeocoderStatus.OK) {
    var initLat = results[0].geometry.location.lat();
    var initLng = results[0].geometry.location.lng();
    console.log(initLat+' # '+initLng);
    } 
}); 
**/

var myCenter = new google.maps.LatLng(dfltLat,dfltLng); //(26.5628537,-81.9495331) //(26.1503648,-81.7946717) //(dfltLat,dfltLng)
bounds = new google.maps.LatLngBounds();
bounds.extend(myCenter);
  
speedTest.ppties = [];
speedTest.map = null;
speedTest.markerClusterer = null;
speedTest.markers = [];
speedTest.infoWindow = null; 
zoomLevel = parseInt(zoomLevel);

speedTest.init = function() {
  var latlng = myCenter;
  var options = {
    'zoom': zoomLevel,
    'center': latlng,
    'clickableIcons': false,
    'mapTypeId': google.maps.MapTypeId.ROADMAP
  };
  var map_canvas = document.getElementById('map');
  speedTest.map = new google.maps.Map(map_canvas, options);
  //speedTest.ppties = map_data.properties; 

  speedTest.infoWindow = new google.maps.InfoWindow();
  speedTest.showMarkers(); 
      
  $("#drawpoly").click(function(e){
  e.preventDefault(); 
  disable();

  google.maps.event.addDomListenerOnce(speedTest.map,'mousedown',function(e){
    drawFreeHand();
  });
  });
};

function drawFreeHand(){
    
    aNord   =   speedTest.map.getBounds().getNorthEast().lat();  
    aEst    =   speedTest.map.getBounds().getNorthEast().lng();
    aSud    =   speedTest.map.getBounds().getSouthWest().lat();  
    aOvest  =   speedTest.map.getBounds().getSouthWest().lng(); 
    
    //the polygon
    poly=new google.maps.Polyline({map:speedTest.map,clickable:false});
    
    //move-listener
    var move=google.maps.event.addListener(speedTest.map,'mousemove',function(e){
        poly.getPath().push(e.latLng);
    });
    
    //mouseup-listener
    google.maps.event.addListenerOnce(speedTest.map,'mouseup',function(e){
        google.maps.event.removeListener(move);
        var path=poly.getPath();
        poly.setMap(null);
        poly=new google.maps.Polygon({map:speedTest.map,path:path});
        
        var len = path.getLength(); 
        var polyList='';
        for (var i = 0; i < len; i++){
        polyList+=''+path.getAt(i).toUrlValue(5)+'#';
        //Use this one instead if you want to get rid of the wrap > new google.maps.LatLng(),
        //htmlStr += "" + path.getAt(i).toUrlValue(5);
        }  
        
        enable();
        loadPptyInThisPoly(aNord,aEst,aSud,aOvest,speedTest.map,polyList)
        poly.setMap(null);
    });
}

speedTest.showMarkers = function() {
  speedTest.markers = [];
  if(speedTest.markerClusterer) {
    speedTest.markerClusterer.clearMarkers();
  } 
  
  var numMarkers = speedTest.ppties.length;
  var lastMarker = parseInt(numMarkers-1);
  
  for (var i = 0; i < numMarkers; i++) { 
 
    var title = document.createElement('A');
    title.href = '#'; 
    
    var latLng = new google.maps.LatLng(speedTest.ppties[i].Latitude,speedTest.ppties[i].Longitude);
    //setBounds(speedTest.ppties[i].Latitude, speedTest.ppties[i].Longitude); 

    var imageUrl = 'https://chart.apis.google.com/chart?cht=mm&chs=24x32&chco=FFFFFF,008CFF,000000&ext=.png';
    var markerImage = new google.maps.MarkerImage(imageUrl,new google.maps.Size(1, 1));

    //var marker = new google.maps.Marker({
      //'position': latLng,
      //'icon': markerImage
    //});
    
    var marker = new MarkerWithLabel({
       position: latLng,
       labelContent: "$"+speedTest.ppties[i].ListPrice,
       icon: markerImage,
       labelAnchor: new google.maps.Point(22, 0),
       labelClass: "map-marker", // the CSS class for the label
       labelStyle: {opacity: 1}
     });

    var fn = speedTest.markerClickFunction(speedTest.ppties[i], latLng);
    google.maps.event.addListener(marker, 'click', fn);
    google.maps.event.addDomListener(title, 'click', fn);
    speedTest.markers.push(marker);
    
    if(i==lastMarker){
       speedTest.map.setCenter(latLng);
    }
    
  }
  
    //speedTest.map.setCenter(bounds.getCenter());
    //speedTest.map.fitBounds(bounds);
    speedTest.markerClusterer = new MarkerClusterer(speedTest.map, speedTest.markers, {imagePath: '../assets/img/m'});
    speedTest.map.setZoom(zoomLevel); 
  
    google.maps.event.addListener(speedTest.map, 'dragend', getCoordinates);
    
    google.maps.event.addListener(speedTest.map, 'zoom_changed', getCoordinates); 
    
    setTimeout(function(){
        
        if(!aNord || !aEst || !aSud || !aOvest){
        getCoordinates();
        }else{
        loadPptyInThisArea(aNord,aEst,aSud,aOvest,speedTest.map);
        }
        //26.2112420 @ -81.7666610 @ 26.0785720 @ -81.8224189
        //26.350502009866226 @ -81.520152096875 @ 25.93319665486718 @ -82.069468503125
    }, 1000);  
};


speedTest.updateMarkers = function() {
    speedTest.markers = [];
    if(speedTest.markerClusterer){
    speedTest.markerClusterer.clearMarkers();
    }
    
    var marLen = speedTest.ppties.length;
     
    var numMarkers = speedTest.ppties.length;
    var lastMarker = parseInt(numMarkers-1);
    $("#no_listing_fnd").html(numMarkers);
  
    for (var i = 0; i < numMarkers; i++) { 
    
    var title = document.createElement('A');
    title.href = '#'; 
    
    var latLng = new google.maps.LatLng(speedTest.ppties[i].Latitude,speedTest.ppties[i].Longitude);
    //setBounds(speedTest.ppties[i].Latitude, speedTest.ppties[i].Longitude); 
    
    var imageUrl = 'https://chart.apis.google.com/chart?cht=mm&chs=24x32&chco=FFFFFF,008CFF,000000&ext=.png';
    var markerImage = new google.maps.MarkerImage(imageUrl,new google.maps.Size(1, 1)); 
    
    var marker = new MarkerWithLabel({
       position: latLng,
       labelContent: "$"+speedTest.ppties[i].CurrentPrice,
       icon: markerImage,
       labelAnchor: new google.maps.Point(22, 0),
       labelClass: "map-marker", // the CSS class for the label
       labelStyle: {opacity: 1}
     });
    
    var fn = speedTest.markerClickFunction(speedTest.ppties[i], latLng);
    google.maps.event.addListener(marker, 'click', fn);
    google.maps.event.addDomListener(title, 'click', fn);
    speedTest.markers.push(marker);
    
    }
    
    
    //speedTest.map.setCenter(bounds.getCenter());
    //speedTest.map.fitBounds(bounds);
    speedTest.markerClusterer = new MarkerClusterer(speedTest.map, speedTest.markers, {imagePath: '../assets/img/m'}); 
    /**
    google.maps.event.addListener(speedTest.map, 'dragend', getCoordinates);
    
    google.maps.event.addListener(speedTest.map, 'zoom_changed', getCoordinates); 
    **/
};

function getCoordinates(){
    if(speedTest.markerClusterer) {
        speedTest.markerClusterer.clearMarkers();
    }
    //var cordinates = speedTest.map.getBounds();
    //console.log('Cordinates: '+cordinates);
    aNord   =   speedTest.map.getBounds().getNorthEast().lat();  
    aEst    =   speedTest.map.getBounds().getNorthEast().lng();
    aSud    =   speedTest.map.getBounds().getSouthWest().lat();  
    aOvest  =   speedTest.map.getBounds().getSouthWest().lng();  
    
    //alert(aNord+' @ '+aEst+' @ '+aSud+' @ '+aOvest)
    //alert(NELat+' @ '+NELng+' @ '+SWLat+' @ '+SWLng)
    loadPptyInThisArea(aNord,aEst,aSud,aOvest,speedTest.map);
}

speedTest.markerClickFunction = function(pic, latlng){
  
  return function(e){
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation){
      e.stopPropagation();
      e.preventDefault();
    }
    //console.log(pic);
    var MLSNumber = pic.MLSNumber;
    var matrix_unique_id = pic.matrix_unique_id;
    var Current_Price = pic.Current_Price;
    var CurrentPrice =  pic.CurrentPrice;
    var DefaultPic = pic.DefaultPic;
    var Badge = pic.Badge;
    var PropertyAddress=pic.PropertyAddress;
    var BathsTotal=pic.BathsTotal;
    var BedroomsTotal=pic.BedroomsTotal;
    var GarageSpaces=pic.GarageSpaces;
    var TotalArea=pic.TotalArea; 
    var fav_display=pic.fav_display;
    var unfav_display=pic.unfav_display;
    var pager=pic.pager;
    var City=pic.City;
    var SubCondoName=pic.SubCondoName;
    var Status=pic.Status;
    var ListOfficeName=pic.ListOfficeName;   
    var address = PropertyAddress.replace(/-/g, ' ');
    var ppty_address = encodeURIComponent(PropertyAddress);
    var link = PropertyAddress.replace(/[^a-zA-Z0-9-_]/g, "-");
     
    if(Status == 'Active'){
        var badge = '';
    }else if(Status == 'Sold'){
        var badge = '<div class="_exlio_125" style="background-color: #EA7500; color: white;">Sold</div>';
    }else if(Status == 'Pending'){
        var badge = '<div class="_exlio_125">Pending</div>';
    }else if(Status == 'Application In Progress'){
        var badge = '<div class="_exlio_125">Application In Progress</div>';
    }else if(Status == 'Pending With Contingencies'){
        var badge = '<div class="_exlio_125">Pending With Contingencies</div>';
    }

    scrollToList(MLSNumber,pager);
    
    var infoHtml = '<div class="w-100">\
    				<div class="property-listing property-2">\
    					\
    					<div class="listing-img-wrapper h-100">\
    						'+Badge+'\
    						<div class="list-img-slide">\
        						<div class="click">\
                                    \
        							<div>\
                                    <a target="_blank" href="homes-for-sale/'+MLSNumber+'/'+link+'">\
                                    <img src="'+DefaultPic+'" id="'+MLSNumber+'" onerror="$(this).attr(\'src\',\'https://via.placeholder.com/450x250.png?text=No+image+added+from+MLS\')" class="img-fluid mx-auto" alt="" />\
                                    </a>\
                                    </div>\
        						</div>\
        					</div>\
    					</div>\
    					\
    					<div class="listing-detail-wrapper mt-1">\
    						<div class="listing-short-detail-wrap">\
    							<div class="_card_list_flex">\
    								<div class="_card_flex_01">\
    									<h4 class="listing-name verified">\
                                        <a target="_blank" href="homes-for-sale/'+MLSNumber+'/'+link+'" class="w-100 prt-link-detail">\
                                        <div class="w-100">'+SubCondoName+'</div>\
                                        <div class="w-100 fs-14 medium" style="color: #535353;"><i class="ti-location-pin"></i> '+PropertyAddress+'</div>\
                                        </a>\
                                        </h4>\
    								</div>\
    							</div>\
    							<div class="_card_list_flex  mb-1">\
    								<div class="_card_flex_01">\
    									<h6 class="listing-card-info-price mb-0 p-0" style="color: #0076AE;">$'+Current_Price+'</h6>\
                                        <div class="w-100 fs-13 medium" style="color: #E67300;">\
                                        '+BedroomsTotal+' Beds - '+BathsTotal+' Baths - '+GarageSpaces+' Garage - '+TotalArea+' SqFt\
                                        </div>\
                                        <div class="w-100 fs-11 mt-5">\
                                        '+ListOfficeName+'\
                                        </div>\
    								</div>\
    							</div>\
    						</div>\
    					</div>\
                        \
    				</div>\
    			</div>';

    speedTest.infoWindow.setContent(infoHtml);
    speedTest.infoWindow.setPosition(latlng);
    speedTest.infoWindow.open(speedTest.map);
  };
};

function disable(){
  speedTest.map.setOptions({
    draggable: false, 
    zoomControl: false, 
    scrollwheel: false, 
    disableDoubleClickZoom: false
  });
  google.maps.event.clearListeners(speedTest.map, 'dragend');
  $.notify({ icon: 'fa fa-info-circle', message: "<b>Drawing Mode:</b> use your mouse/hand to draw on map" },{ type: 'danger', timer: 500 });
}

function enable(){
  speedTest.map.setOptions({
    draggable: true, 
    zoomControl: true, 
    scrollwheel: true, 
    disableDoubleClickZoom: true
  }); 
  setTimeout(function(){ google.maps.event.addListener(speedTest.map, 'dragend', getCoordinates); }, 3000);
  $.notify({ icon: 'fa fa-info-circle', message: "<b>Drawing Mode Ended:</b>" },{ type: 'info', timer: 500 });
}

function setBounds(Lat, Lng){
    var newLatLng = new google.maps.LatLng(Lat, Lng);
    bounds.extend(newLatLng);
}  
 
function loadPptyInThisArea(aNord,aEst,aSud,aOvest,mapObj){
    var minLat=aSud;
    var maxLat=aNord;
    var minLng=aOvest;
    var maxLng=aEst;
    bedz=encodeURIComponent(bedrooms);
    bathz=encodeURIComponent(bathrooms);
    garagez=encodeURIComponent(garage);
    var newLng = mapObj.getCenter().lng();
    var newLat = mapObj.getCenter().lat();
    var newZoom = mapObj.getZoom();
                  
    pushUrl(newLat, newLng, aNord, aEst, aSud, aOvest, newZoom); 
        
    //"select lat, lng from your_table where lat = $minLat AND  lat <= $maxLat AND lng   <= $maxLng AND   lng >= $minLng";
    $('#map_loader').show();
    $(".nothing-found").hide();
    var ScrollTop = localStorage.getItem('ScrollTop');
    if(ScrollTop == 'Yes'){
    $("html, body").animate({scrollTop: 0}, 1000);
    }
    
    var dataString ='minLat='+minLat+'&maxLat='+maxLat+'&minLng='+minLng+'&maxLng='+maxLng+'&listSize='+listSize+'&email='+logged_email+'&location='+Location+'&property_type='+property_type+'&city='+city+'&zipcode='+zipcode+'&beds='+bedz+'&baths='+bathz+'&min_price='+min_price+'&max_price='+max_price+'&min_sq_ft='+min_sq_ft+'&max_sq_ft='+max_sq_ft+'&min_year='+min_year+'&garage='+garagez+'&just_listed='+just_listed+'&include_pending='+include_pending+'&include_sold='+include_sold+'&foreclosure='+foreclosure+'&short_sale='+short_sale+'&pool='+pool+'&spa='+spa+'&guest_house='+guest_house+'&waterfront='+water_front+'&gated='+gated+'&communities='+communities+'&gulf_access='+gulf_access+'&ref='+ref+'&sort='+sort+'&load_status='+load_status; 
    //console.log(dataString);
    $.ajaxSetup({cache: false}); // assures the cache is empty 
    $.ajax({
    url: "load_coordinates.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $('#map_loader').hide();
    //loadPptyInThisArea(aNord,aEst,aSud,aOvest,mapObj);
    console.log('Error: '+error+' - '+xhr.responseText);  
    //$.notify({ icon: 'fa fa-warning', message: error },{ type: 'danger', timer: 4000 });
    },
    success: function(data){
    $('#map_loader').hide(); 
    //console.log(data);  
    var dataData=data.data;      
    if(dataData=='Done'){  
    var ppty_data=data.ppty_data;     
    ppty_data=JSON.parse(ppty_data);
    
    var screen = $(window).width();
    if(screen>992){
    $("#fs-inner-container").show();
    var listData = ppty_data.properties.slice(0,360);
    var listDataLen = listData.length;
    var allListingLen = ppty_data.properties.length;
    $(".totalFound").html('Showing '+listDataLen+' Out of '+allListingLen+' Listings Found');
    renderSideList(listData);  
    }else{
    $("#fs-inner-container").hide();
    }  
    
    speedTest.ppties = ppty_data.properties;
    speedTest.updateMarkers();
    //speedTest.showMarkers(); 
    }else{    
    //loadPptyInThisArea(aNord,aEst,aSud,aOvest,mapObj);
    $(".paginationjs").hide();
    $(".property_row").remove();
    $(".nothing-found").show();
    console.log('Error: '+dataData);   
    } 
    
    } 
    }); 
    
}


function loadPptyInThisPoly(aNord,aEst,aSud,aOvest,mapObj,polyList){
    var minLat=aSud;
    var maxLat=aNord;
    var minLng=aOvest;
    var maxLng=aEst; 
    bedz=encodeURIComponent(bedrooms);
    bathz=encodeURIComponent(bathrooms);
    garagez=encodeURIComponent(garage);
    
    //"select lat, lng from your_table where lat = $minLat AND  lat <= $maxLat AND lng   <= $maxLng AND   lng >= $minLng";
    $('#map_loader').show();
    $(".nothing-found").hide();
    var ScrollTop = localStorage.getItem('ScrollTop');
    if(ScrollTop == 'Yes'){
    $("html, body").animate({scrollTop: 0}, 1000);
    }
    
    var dataString ='minLat='+minLat+'&maxLat='+maxLat+'&minLng='+minLng+'&maxLng='+maxLng+'&polyList='+polyList+'&listSize='+listSize+'&email='+logged_email+'&location='+Location+'&property_type='+property_type+'&beds='+bedz+'&baths='+bathz+'&min_sq_ft='+min_sq_ft+'&max_sq_ft='+max_sq_ft+'&min_price='+min_price+'&max_price='+max_price+'&min_year='+min_year+'&max_year='+max_year+'&stories='+stories+'&garage='+garagez+'&pool='+pool+'&waterfront='+waterfront; 
    
    $.ajaxSetup({cache: false}); // assures the cache is empty 
    $.ajax({
    url: "load_poly_coordinates.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){ 
    $('#map_loader').hide();
    //loadPptyInThisPoly(aNord,aEst,aSud,aOvest,mapObj,polyList);
    console.log('Error: '+error);  
    //$.notify({ icon: 'fa fa-warning', message: error },{ type: 'danger', timer: 4000 });
    },
    success: function(data){
    $('#map_loader').hide();  
    var dataData=data.data;      
    if(dataData=='Done'){  
    var ppty_data=data.ppty_data;     
    ppty_data=JSON.parse(ppty_data);
    var listData = ppty_data.properties.slice(0,3);
    renderSideList(listData);    
    
    speedTest.ppties = ppty_data.properties;
    speedTest.updateMarkers();
    //speedTest.showMarkers(); 
    }else{    
    //loadPptyInThisArea(aNord,aEst,aSud,aOvest,mapObj);
    $(".paginationjs").hide();
    $(".property_row").remove();
    $(".nothing-found").show();
    console.log('Error: '+dataData);   
    } 
    
    } 
    }); 
    
}


function renderSideList(listData){
    var currLoc = window.location.href;
    var currPage = currLoc.split('#page-')[1];
    if(!currPage){
    currPage = 1;
    }
    
    $('#ppty_lists').pagination({
        dataSource: listData,
        pageSize: listSize,
        pageNumber: currPage,
        showGoInput: true,
        showGoButton: true,
        callback: function(data, pagination) {
            // template method of yourself 
            $('.property_row').remove();                  
            $.each(data, function (i, ppty){
            
            var MLSNumber = ppty.MLSNumber;
            var matrix_unique_id = ppty.matrix_unique_id;
            var Current_Price = ppty.Current_Price;
            var CurrentPrice =  ppty.CurrentPrice;
            var DefaultPic = ppty.DefaultPic;
            var Badge = ppty.Badge;
            var PropertyAddress=ppty.PropertyAddress;
            var BathsTotal=ppty.BathsTotal;
            var BedroomsTotal=ppty.BedroomsTotal;
            var GarageSpaces=ppty.GarageSpaces;
            var TotalArea=ppty.TotalArea; 
            var fav_display=ppty.fav_display;
            var unfav_display=ppty.unfav_display;
            var AllPixList=ppty.AllPixList;
            var ListOfficeName=ppty.ListOfficeName;
            var pager=ppty.pager;
            var City=ppty.City;
            var SubCondoName=ppty.SubCondoName;
            var Status=ppty.Status;
            var address = PropertyAddress.replace(/-/g, ' ');
            var ppty_address = encodeURIComponent(PropertyAddress);
            var link = PropertyAddress.replace(/[^a-zA-Z0-9-_]/g, "-");
             
            if(Status == 'Active'){
                var badge = '';
            }else if(Status == 'Sold'){
                var badge = '<div class="_exlio_125" style="background-color: #EA7500; color: white;">Sold</div>';
            }else if(Status == 'Pending'){
                var badge = '<div class="_exlio_125">Pending</div>';
            }else if(Status == 'Application In Progress'){
                var badge = '<div class="_exlio_125">Application In Progress</div>';
            }else if(Status == 'Pending With Contingencies'){
                var badge = '<div class="_exlio_125">Pending With Contingencies</div>';
            }
            
            if(AllPixList !=''){
            var ecPix = AllPixList.split(',');
            var pixCounter = 0;    
            var counPix = ecPix.length;
            if(counPix>2){
                var sgt = 0;
            }else{
                var sgt = -1;
            }
                                        
            var pixOut = '';                                
            for(var i=0; i<counPix; i++){
                var pix = ecPix[i];
                if(pix!='' && i>sgt){
				pixOut += '<div>\
                <a href="homes-for-sale/'+MLSNumber+'/'+link+'" target="_blank">\
                <img data-lazy="../../'+pix+'" id="'+MLSNumber+'" onerror="$(this).attr(\'src\',\'https://via.placeholder.com/450x250.png?text=No+image+added+from+MLS\')" class="img-fluid mx-auto" alt="'+PropertyAddress+'" />\
                </a>\
                </div>';
                }
            }
            }else{
                pixOut = '<div>\
                <a href="homes-for-sale/'+MLSNumber+'/'+link+'" target="_blank">\
                <img data-lazy="../../'+DefaultPic+'" id="'+MLSNumber+'" onerror="$(this).attr(\'src\',\'https://via.placeholder.com/450x250.png?text=No+image+added+from+MLS\')" class="img-fluid mx-auto" alt="'+PropertyAddress+'" />\
                </a>\
                </div>';
            }
                                        
            var div = '<div class="property_row col-xl-6 col-lg-12 col-md-12 col-sm-12 dsply_inline_blck" id="listing_'+MLSNumber+'">\
                        <div class="match-height property-listing property-2">\
                        \
                        <div class="listing-img-wrapper h-100">\
                        	'+Badge+'\
                        	<div class="list-img-slide">\
                        		<div class="click">'+pixOut+'</div>\
                        	</div>\
                        </div>\
                        \
                        <div class="listing-detail-wrapper mt-1">\
                        	<div class="listing-short-detail-wrap">\
                        		<div class="_card_list_flex">\
                        			<div class="_card_flex_01">\
                        				<h4 class="listing-name verified">\
                                        <a target="_blank" href="homes-for-sale/'+MLSNumber+'/'+link+'" class="w-100 prt-link-detail">\
                                        <div class="w-100">'+SubCondoName+'</div>\
                                        <div class="w-100 fs-14 medium" style="color: #535353;"><i class="ti-location-pin"></i> '+PropertyAddress+'</div>\
                                        </a>\
                                        </h4>\
                        			</div>\
                        		</div>\
                        		<div class="_card_list_flex mb-0">\
                        			<div class="_card_flex_01">\
                        				<h6 class="listing-card-info-price mb-0 p-0" style="color: #0076AE;">$'+Current_Price+'</h6>\
                        			</div>\
                        		</div>\
                        	</div>\
                        </div>\
                        \
                        <div class="price-features-wrapper">\
    						<div class="list-fx-features">\
    							<div class="listing-card-info-icon">\
    								<div class="inc-fleat-icon"><img src="assets/img/bed.svg" width="13" alt="" /></div>'+BedroomsTotal+' Beds\
    							</div>\
    							<div class="listing-card-info-icon">\
    								<div class="inc-fleat-icon"><img src="assets/img/bathtub.svg" width="13" alt="" /></div><'+BathsTotal+' Baths\
    							</div>\
    							<div class="listing-card-info-icon">\
    								<div class="inc-fleat-icon"><img src="assets/img/car.svg" width="13" alt="" /></div>'+GarageSpaces+' Car Garage\
    							</div>\
    							<div class="listing-card-info-icon">\
    								<div class="inc-fleat-icon"><img src="assets/img/move.svg" width="13" alt="" /></div>'+TotalArea+' sqft\
    							</div>\
    						</div>\
                            <div class=" w-100 fs-11 text-left">\
  								'+ListOfficeName+'\
   							</div>\
    					</div>\
                        \
                        \
                        <div class="listing-detail-footer">\
    						<div class="w-100" id="listing_footer" style="left: 5px;">\
        						<div class="col-12 p-0 mt-5 mb-5 fleft dsply_inline_blck">\
                                \
                                <div class="col-3 fleft p-10 dsply_inline_blck" onclick="addToFav(\''+MLSNumber+'\')" id="add-to-fav-'+MLSNumber+'" style="'+fav_display+'">\
                                <div class="btn fleft w-100" data-toggle="tooltip" title="Add To Saved Properties">\
                                <i class="far fa-heart"></i>\
                                </div>\
                                </div>\
                                \
                                <div class="col-3 fleft p-10 dsply_inline_blck" onclick="remFrmFav(\''+MLSNumber+'\')" id="rem-frm-fav-'+MLSNumber+'" style="'+unfav_display+'">\
                                <div class="btn fleft w-100" style="background-color: #FF8484!important; color: white!important;" data-toggle="tooltip" title="Remove From Saved Properties">\
                                <i class="fas fa-heart"></i>\
                                </div>\
                                </div>\
                                \
                                <div class="add_rem_loader_'+MLSNumber+' col-3 centered-text fleft p-10" style="display: none;">\
                                <div class="btn fleft w-100"><img src="assets/img/loader.gif" class="float_none" style="width: 15px; height: 15px; cursor: pointer;" /></div>\
                                </div>\
                                \
                                <span class="col-3 fleft p-10 dsply_inline_blck" onclick="openGetInfo(\''+MLSNumber+'\')">\
                                <div class="btn fleft w-100" data-toggle="tooltip" title="Get More Information">\
                                <i class="ti-email"></i>\
                                </div>\
                                </span>\
                                \
                                <span class="col-3 fleft p-10 dsply_inline_blck" onclick="openTourModal(\''+MLSNumber+'\')">\
                                <div class="btn fleft w-100" data-toggle="tooltip" title="Schedule a Showing">\
                                <i class="ti-alarm-clock"></i>\
                                </div>\
                                </span>\
                                <span class="col-3 fleft p-10 dsply_inline_blck">\
                                <a target="_blank" href="homes-for-sale/'+MLSNumber+'/'+link+'" class="btn fleft w-100" data-toggle="tooltip" title="View Details">\
                                <i class="ti-eye"></i>\
                                </a>\
                                </span>\
                                </div>\
        					</div>\
    					</div>\
                        \
                        \
                        </div>\
                       </div>';
                    
                $('#ppty_lists #streamed_ppty').append(div);
            });
            
            
            $('.property_row .click').slick({
                lazyLoad: 'ondemand',
                infinite: true,
                slidesToShow:1,
                slidesToScroll: 1,
                arrows: true,
                //autoplay:true,
                fade: true,
                dots:true,
                //autoplaySpeed:4000,
        	});
            $(".match-height").matchHeight();
            $('[data-toggle="tooltip"]').tooltip()
        }
    });
}


function scrollToList(MLSNumber,page){
    localStorage.setItem('ScrollTop', 'No');
    $(".J-paginationjs-go-pagenumber").val(page);
    $(".J-paginationjs-go-button").click();
    $(".property_row").removeClass('active_listing');
    
    $("#listing_"+MLSNumber).addClass('active_listing');
    scrollToDiv("listing_"+MLSNumber, 90);
    localStorage.setItem('ScrollTop', 'Yes');
}



