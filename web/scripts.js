
$(window).on('shown.bs.modal', function() { 
    $('html').css('overflow-y','hidden');
});

$(window).on('hidden.bs.modal', function(e){
    $('html').css('overflow-y','auto');
});

$(document).ready(function(){

$("#scroll-top, .top-scroll").click(function () { 
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(".tabs").click(function(){

$(".tabs").removeClass("active");
$(".tabs h6").removeClass("font-weight-bold");
$(".tabs h6").addClass("text-muted");
$(this).children("h6").removeClass("text-muted");
$(this).children("h6").addClass("font-weight-bold");
$(this).addClass("active");

current_fs = $(".active");

next_fs = $(this).attr('id');
next_fs = "#" + next_fs + "1";

$("fieldset").removeClass("show");
$(next_fs).addClass("show");

});


$('.more_menu, .close_side_menu, .mmenu-trigger').on('click', function(e) {
    $('#sidebar_menu_list').toggleClass('visible');
    $('body').toggleClass('body-no-scroll');
    return false;
});  

var thisScreen = $(window).width();
if(thisScreen>767){
    $('[data-href]').each(function(){
        var thisHref = $(this).attr("data-href");
        $(this).attr("href",thisHref);
    });
}
});

function scrollToDiv(divId, offset){
    if($("#"+divId).length>0){    
    var Thisoffset = parseFloat($("#"+divId).offset().top - offset);
    $("html, body").animate({scrollTop: Thisoffset}, 1000);
    }    
}

function scrollToModalDiv(divId, offset){
    var Thisoffset = parseFloat($("#"+divId).offset().top - offset);
    $(".modal-open .modal").animate({scrollTop: Thisoffset}, 1000);
}


$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }
});

$(function(){
$('[data-toggle="popover"]').popover({
  trigger: 'focus'
});
})

function slideSubMenu(id){
    $("#"+id).find(".submenu-indicator").click();
}


function setPagination(){
    
var curr=curr_page;
var total_records=$('#total_records').val();
var limit=lm;
var version=new Date().getTime();

var screen = $(window).width();
if(screen > 0 && screen < 460){
    var displayed_pages = 4;
}else if(screen > 460 && screen <= 600){
    var displayed_pages = 5;
}else if(screen > 600 && screen <= 700){
    var displayed_pages = 6;
}else if(screen > 700 && screen <= 800){
    var displayed_pages = 7;
}else if(screen > 800 && screen <= 900){
    var displayed_pages = 7;
}else if(screen > 992){
    var displayed_pages = 8;
}

$('.pagination').paginationGet({
    items: total_records,
    itemsOnPage: limit,
    displayedPages: displayed_pages, /** depends on screen width **/
    //cssStyle: 'light-theme',
    currentPage : curr
});
}

function gotoPage(){
 var page_no=$("#goto_page_num").val().trim(); 
 page_no=parseInt(page_no);
 if(!page_no){
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide the page number you want to go.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    return false;
 }   
 
 var loc=window.location.href;
 var splitted=loc.split('page='); 
 var pureLoc=splitted[0];  
 var newPageLink=pureLoc.substring(0, pureLoc.lastIndexOf("/") + 1);
 var jumpTo=newPageLink+page_no;
 
 window.location.href=jumpTo;
}

function validateEmail(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
} 



function login(redirect){
   var email=$("#login_email").val();
   var password=encodeURIComponent($("#login_password").val()); 
   //if($("input:checkbox[name=remeber_me]:checked").length>0){ var remeber_me='Yes'; }else { var remeber_me='No'; }
    
   var dataString ='email='+email+'&password='+password; //+'&remeber_me='+remeber_me;
   if((email!='') && (password!='')){
    //alert(dataString)
    $('#LoginButton').attr('disabled',true);  
    $('#LoginButton').html('Please wait...').addClass('disabled'); 
    $.ajax({
    url: "verify_login.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $('#LoginButton').attr('disabled',false); 
    $('#LoginButton').html('<i class="fas fa-sign-in-alt mr-2 fs-17"></i> Login').removeClass('disabled'); 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    },
    success: function(data){  
    var dataData=data.data;
       
    if(dataData=='Done'){
    if(redirect!='No Redirect' && redirect!='undefined'){
    window.location.href=redirect;    
    }else{
    window.location.href='index.php';   
    }
    }else if(dataData=='Pending Verification'){
    var user_email=data.user_email;
    
    $('#LoginButton').attr('disabled',false);
    $('#LoginButton').html('<i class="fas fa-sign-in-alt mr-2 fs-17"></i> Login').removeClass('disabled');
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'You need to verify your email address to continue. Click the link below to receive verification link.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    
    $("#resendTokenCont").show();
    $("#resendTokenBtn").attr("onclick","resendToken('"+user_email+"')");
    }else{
    
    $('#LoginButton').attr('disabled',false);
    $('#LoginButton').html('Login').removeClass('disabled');
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
       
    }

    }
    });
     
   }else{ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Email and password can\'t be empty' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
   }
}

function register(redirect){    
 
    var su_fullname=encodeURIComponent($("#su_fullname").val().trim());  
    var email=$("#su_email").val().trim();
    var password=$("#su_password").val(); 
    var cfrm_password= $("#cfrm_password").val();
    var phone=$("#su_phone").val();
    
    if(validateEmail(email)){ 
    
    if((su_fullname!='') && (email!='') && (password!='') && (phone!='')){ 
    if(password.length>5){
        
    if(!password){ $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid password.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); return false; }    
    if(password!=cfrm_password){ $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Password must match.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); return false; }
        
    email=encodeURIComponent(email);
    password=encodeURIComponent(password);
    
    $('#RegisterButton').attr('disabled',true);
    $('#RegisterButton').html('Please wait...').addClass('disabled');      
    var dataString ='fullname='+su_fullname+'&email='+email+'&password='+password+'&phone='+phone;
    //alert(dataString);
    //return false;
    $.ajax({
    url: "register.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    $('#RegisterButton').attr('disabled',false);
    $('#RegisterButton').html('<i class="fas fa-user-plus mr-2 fs-17"></i> Register').removeClass('disabled');   
    },
    success: function(data){
    $('#RegisterButton').attr('disabled',false); 
    $('#RegisterButton').html('<i class="fas fa-user-plus mr-2 fs-17"></i> Register').removeClass('disabled');      
    var dataData=data.data;
    if(dataData=='Done'){
    $(".mod-close").click();
    $.notify({ icon: 'fas fa-check', message: 'Registration completed! Check your inbox for verification email.' },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" } });
    }else{  
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    } 
    } 
    });   
      
    }else{  
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Password can\'t be less than 6 characters'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    }
            
    }else{  
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'All field are required.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    } 
    }else{
     $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid email.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    }  
}

function showLogin(){
    $("#tab01").addClass('active');
    $("#tab011").addClass('show');
    $("#tab02").removeClass("active");
    $("#tab021").removeClass('show');
    $("#tab03").removeClass("active");
    $("#tab031").removeClass('show');
    $('#sidebar_menu_list').removeClass('visible');
}

function showSignup(){
    $("#tab01").removeClass("active");
    $("#tab011").removeClass('show');
    $("#tab02").addClass('active');
    $("#tab021").addClass('show');
    $("#tab03").removeClass("active");
    $("#tab031").removeClass('show');
    $('#sidebar_menu_list').removeClass('visible');
    
}


function requestForPassword(redirect){
    var account_email=$("#fp_email").val();
 
    if(validateEmail(account_email)){
    if(account_email!=''){ 
    $('#forgotPwrdButton').attr('disabled',true);
    $('#forgotPwrdButton').html('Please wait...').addClass('disabled'); 
    account_email=encodeURIComponent(account_email);    
    var dataString ='account_email='+account_email;
    //alert(dataString)
    $.ajax({
    url: "sendpassword.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $('#forgotPwrdButton').attr('disabled',false);
    $('#forgotPwrdButton').html('<i class="fas fa-sign-in-alt mr-2 fs-17"></i> Send Reset Link').removeClass('disabled');   
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    },
    success: function(data){
    $('#forgotPwrdButton').attr('disabled',false);
    $('#forgotPwrdButton').html('<i class="fas fa-sign-in-alt mr-2 fs-17"></i> Send Reset Link').removeClass('disabled');    
    var dataData=data.data;
    if(dataData=='Password reset link sent to your email.'){ 
    $("#fp_email").val('');
    $(".mod-close").click();    
    $.notify({ icon: 'fas fa-check-circle', message: dataData},{ type: 'success', timer: 4000, placement: { from: "top", align: "center" } });  
    }else{ 
     $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    }
    
    }
    
    }); 
    }
    
    }else{
      $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid email.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    } 
}


function resetPassword(){
   var account_email=$("#account_email").val();
   var token=$("#token").val();
   var password=$("#rp_password").val();
   var confm_password=$("#cfrm_rp_password").val();
   
   if(password.length<6){
    $.notify({ icon: 'fas fa-exclamation-triangle', message: "Password can't be less than 6 characters." },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    return false;
   } 
   
   if(password!=confm_password){ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: "New password must match!" },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    return false;
   } 
   
    $('#ResetButton').attr('disabled',true);
    $('#ResetButton').html('Please wait...').addClass('disabled'); 
    
    if((account_email!='') && (token!='')){ 
    password=encodeURIComponent(password);    
    var dataString ='account_email='+account_email+'&token='+token+'&password='+password;
    //alert(dataString)
    $.ajax({
    url: "update_password.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){ 
    $('#ResetButton').attr('disabled',false);
    $('#ResetButton').html('Reset Password').removeClass('disabled'); 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }}); 
    },
    success: function(data){
    var dataData=data.data;
    $('#ResetButton').attr('disabled',false);
    $('#ResetButton').html('Reset Password').removeClass('disabled');
    
    if(dataData=="Password updated succesfully."){
    $("#rp_password").val('');
    $("#cfrm_rp_password").val('');
    window.location.href='index.php';
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" } });   
    }else{
     $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });    
    }
      
    }
    
    }); 
    }
}

function resendToken(email){ 
    if(validateEmail(email)){
    $('#ResendButton, #resendTokenBtn').attr('disabled',true);
    $('#ResendButton, #resendTokenBtn').html('Please wait...').addClass('disabled'); 
    
    var dataString ='email='+email;
    //alert(dataString)
    $.ajax({
    url: "REST/resend_token.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){ 
    $('#ResendButton').attr('disabled',false);
    $('#ResendButton').html('Click To Resend Email').removeClass('disabled'); 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }}); 
    },
    success: function(data){
    var dataData=data.data;
    $('#ResendButton, #resendTokenBtn').attr('disabled',false);
    $('#ResendButton').html('Click To Resend Email').removeClass('disabled'); 
    $('#resendTokenBtn').html('<a href="javascript:;" style="text-decoration: none;">Click here to resend verification email</a>').removeClass('disabled');  
    $("#resendTokenCont").hide();
    
    if(dataData=="Done"){
    $.notify({ icon: 'fas fa-exclamation-triangle', message: "New verification link has been sent to your email address." },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" } });
    }else{
     $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });    
    }
      
    }
    
    });
    
    }else{
      $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid email.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    }
}


function compareMinOption(maxValue,selector){
    if(maxValue!='Any'){    
    $('#'+selector+' option').filter(function(){ 
     return parseInt($(this).val(),10) >= parseInt(maxValue,10);
    }).prop('disabled', true);
    
    $('#'+selector+' option').filter(function(){ 
     return parseInt($(this).val(),10) < parseInt(maxValue,10);
    }).prop('disabled', false);    
    
    }else{
    $('#'+selector+' option').filter(function(){ 
     return $(this).val()!='';
    }).prop('disabled', false);    
    } 
}

function compareMaxOption(minValue,selector){  
    if(minValue!='Any'){    
    $('#'+selector+' option').filter(function(){ 
     return parseInt($(this).val(),10) <= parseInt(minValue,10);
    }).prop('disabled', true);
    
    $('#'+selector+' option').filter(function(){ 
     return parseInt($(this).val(),10) > parseInt(minValue,10);
    }).prop('disabled', false);
    
    }else{
    $('#'+selector+' option').filter(function(){ 
     return $(this).val()!='';
    }).prop('disabled', false);    
    } 
}


function basicSearch(){ 
    var location=encodeURIComponent($("#state_or_city").val().trim());
    var property_type=$("#property_type").val().trim();
    var Min_price=encodeURIComponent($("#min_price").val().trim());
    var Max_price=encodeURIComponent($("#max_price").val().trim());
    
    if(location=='' || location=='All'){ location='Any'; } 
    //window.location.href='browse-listings.php?location='+location+'&mls_number=&min_price=&max_price='+Max_price+'&property_type='+property_type+'&beds='+beds+'&baths=&min_lot=&max_lot=&min_year=&max_year=&stories=&garage=&pool=&waterfront=&sort=price-desc&pagination=get&page=1';
    window.location.href='browse-listings.php?location='+location+'&mls_number=&min_price='+Min_price+'&max_price='+Max_price+'&property_type='+property_type+'&beds=&baths=&min_sq_ft=&max_sq_ft=&min_year=&max_year=&stories=&garage=&pool=&water_front=&sort=price-desc&pagination=get&page=1';
}


function AdvanceSearch(where,caller){
    var advnc_mls_number=encodeURIComponent($("#advnc_mls_number").val().trim());
    var location=encodeURIComponent($("#advnc_state_or_city").val().trim());
    var property_type=$("#advnc_property_type").val().trim();
    var city = $("#advnc_city").val().trim();
    var beds=encodeURIComponent($("#advnc_beds").val().trim());
    var baths=encodeURIComponent($("#advnc_baths").val().trim()); 
    var min_price=encodeURIComponent($("#advnc_min_price").val().trim());
    var max_price=encodeURIComponent($("#advnc_max_price").val().trim());
    var min_sq_ft=encodeURIComponent($("#advnc_min_sq_ft").val().trim());
    var max_sq_ft=encodeURIComponent($("#advnc_max_sq_ft").val().trim()); 
    var min_year=encodeURIComponent($("#advnc_min_year").val().trim());
    var no_garage=encodeURIComponent($("#advnc_no_garage").val().trim());
    var sort_by=encodeURIComponent($("#advnc_sort_by").val().trim());
    
    if(where == 'Side'){
        var zipcode = '';
    }else{ 
        var zipcode = $("#advnc_zipcode").val().trim();
    }
    
    if(document.getElementById('just_listed').checked){
        var just_listed='Yes';
    }else{
        var just_listed='';
    }
    
    if(document.getElementById('include_pending').checked){
        var include_pending='Yes';
    }else{
        var include_pending='';
    }
    
    if(document.getElementById('include_sold').checked){
        var include_sold='Yes';
    }else{
        var include_sold='';
    }
    
    if(document.getElementById('foreclosure').checked){
        var foreclosure='Yes';
    }else{
        var foreclosure='';
    }
    
    if(document.getElementById('short_sale').checked){
        var short_sale='Yes';
    }else{
        var short_sale='';
    }
    
    if(document.getElementById('pool').checked){
        var pool='Yes';
    }else{
        var pool='';
    }
    
    if(document.getElementById('spa').checked){
        var spa='Yes';
    }else{
        var spa='';
    }
    
    if(document.getElementById('guest_house').checked){
        var guest_house='Yes';
    }else{
        var guest_house='';
    } 
    
    if(document.getElementById('gated').checked){
        var gated='Yes';
    }else{
        var gated='';
    } 
    
    if(document.getElementById('waterfront').checked){
        var waterfront='Yes';
    }else{
        var waterfront='';
    }
    
    if(document.getElementById('gulf_access').checked){
        var gulf_access='Yes';
    }else{
        var gulf_access='';
    }
    
    var communities = [];
    if(where == 'Side'){
        
    $(".modal_comm_list input:checkbox:checked").each(function(){
        communities.push($(this).val());
    });
    
    }else{
        
    $(".mls_city_cont input:checkbox:checked").each(function(){
        communities.push($(this).val());
    }); 
    
    } 
    
    if(where == 'Side'){
        if(caller && caller !=''){
            var ref = caller;
        }else{
            var ref = 'quick';
        }
        
    }else{ 
        var ref = 'advanced';
    }
         
    if(location=='' || location=='All'){ location='Any'; }
    window.location.href='search.php?location='+location+'&mls_number='+advnc_mls_number+'&min_price='+min_price+'&max_price='+max_price+'&property_type='+property_type+'&city='+city+'&zipcode='+zipcode+'&beds='+beds+'&baths='+baths+'&min_sq_ft='+min_sq_ft+'&max_sq_ft='+max_sq_ft+'&min_year='+min_year+'&garage='+no_garage+'&just_listed='+just_listed+'&include_pending='+include_pending+'&include_sold='+include_sold+'&foreclosure='+foreclosure+'&short_sale='+short_sale+'&pool='+pool+'&spa='+spa+'&guest_house='+guest_house+'&waterfront='+waterfront+'&gated='+gated+'&communities='+communities+'&gulf_access='+gulf_access+'&ref='+ref+'&sort='+sort_by+'&pagination=get&page=1';
}

function setSrchValue(Location,xmls_number,city,zipcode,property_type,min_price,max_price,bedrooms,bathrooms,min_sq_ft,max_sq_ft,min_year,garage,just_listed,include_pending,include_sold,foreclosure,short_sale,pool,spa,guest_house,water_front,gated,communities,gulf_access,ref,sort){
    //Location = zipcode;
   if(Location == 'Any'){ Location = ''; }
   if(city == 'Any'){ city = ''; }
   if(xmls_number == ''){ xmls_number = ''; }
   if(bedrooms == ''){ bedrooms = 'Any'; }
   if(bathrooms == ''){ bathrooms = 'Any'; }
   if(garage == ''){ garage = 'Any'; }
   if(min_price == ''){ min_price = ''; }
   if(max_price == ''){ max_price = ''; }
   if(min_sq_ft == ''){ min_sq_ft = 'Any'; }
   if(max_sq_ft == ''){ max_sq_ft = 'Any'; }
   if(min_year == ''){ min_year = 'Any'; }
   
   $("#advnc_state_or_city").val(decodeURIComponent(Location));
   $("#advnc_property_type").val(property_type);
   $("#advnc_city").val(city);
   $("#advnc_beds").val(bedrooms);
   $("#advnc_baths").val(bathrooms);
   $("#advnc_no_garage").val(garage);
   $("#advnc_min_price").val(min_price);
   $("#advnc_max_price").val(max_price);
   $("#advnc_min_sq_ft").val(min_sq_ft);
   $("#advnc_max_sq_ft").val(max_sq_ft);
   $("#advnc_min_year").val(min_year);
   $("#advnc_mls_number").val(decodeURIComponent(xmls_number));
   $("#advnc_sort_by").val(sort);
   $("#sort_by").val(sort);
   
   if(just_listed!=''){
    document.getElementById('just_listed').checked=true;
   }
   
   if(include_pending!=''){
    document.getElementById('include_pending').checked=true;
   }
   
   if(include_sold!=''){
    document.getElementById('include_sold').checked=true;
   }
   
   if(foreclosure!=''){
    document.getElementById('foreclosure').checked=true;
   }
   
   if(short_sale!=''){
    document.getElementById('short_sale').checked=true;
   }
   
   if(pool!=''){
    document.getElementById('pool').checked=true;
   }
   
   if(spa!=''){
    document.getElementById('spa').checked=true;
   }
   
   if(guest_house!=''){
    document.getElementById('guest_house').checked=true;
   }
   
   if(water_front!=''){
    document.getElementById('waterfront').checked=true;
   }
   
   if(gated!=''){
    document.getElementById('gated').checked=true;
   }
   
   if(gulf_access!=''){
    document.getElementById('gulf_access').checked=true;
   }
   
   $(".dropdown-menu #"+sort).addClass('active');
   $("#selected_sorts").html($(".dropdown-menu #"+sort).html());
   $("#serch_ref").val(ref);
   
   if(communities && communities!=''){
   loadMLSCityCommunities('Modal');
   }
       
}




function setMapSrchValue(Location,xmls_number,city,zipcode,property_type,min_price,max_price,bedrooms,bathrooms,min_sq_ft,max_sq_ft,min_year,garage,just_listed,include_pending,include_sold,foreclosure,short_sale,pool,spa,guest_house,water_front,gated,communities,gulf_access,ref,sort){
    //Location = zipcode;
   if(Location == 'Any'){ Location = ''; }
   if(city == 'Any'){ city = ''; }
   if(xmls_number == ''){ xmls_number = ''; }
   if(bedrooms == ''){ bedrooms = 'Any'; }
   if(bathrooms == ''){ bathrooms = 'Any'; }
   if(garage == ''){ garage = 'Any'; }
   if(min_price == ''){ min_price = ''; }
   if(max_price == ''){ max_price = ''; }
   if(min_sq_ft == ''){ min_sq_ft = 'Any'; }
   if(max_sq_ft == ''){ max_sq_ft = 'Any'; }
   if(min_year == ''){ min_year = 'Any'; }
   
   $("#advnc_property_type").val(property_type);
   $("#advnc_city").val(city);
   $("#advnc_beds").val(bedrooms);
   $("#advnc_baths").val(bathrooms);
   $("#advnc_no_garage").val(garage);
   $("#advnc_min_price").val(min_price);
   $("#advnc_max_price").val(max_price);
   $("#advnc_min_sq_ft").val(min_sq_ft);
   $("#advnc_max_sq_ft").val(max_sq_ft);
   $("#advnc_min_year").val(min_year);
   $("#advnc_mls_number").val(decodeURIComponent(xmls_number));
   $("#advnc_sort_by").val(sort);
   $("#sort_by").val(sort);
   
   if(just_listed!=''){
    document.getElementById('just_listed').checked=true;
   }
   
   if(include_pending!=''){
    document.getElementById('include_pending').checked=true;
   }
   
   if(include_sold!=''){
    document.getElementById('include_sold').checked=true;
   }
   
   if(foreclosure!=''){
    document.getElementById('foreclosure').checked=true;
   }
   
   if(short_sale!=''){
    document.getElementById('short_sale').checked=true;
   }
   
   if(pool!=''){
    document.getElementById('pool').checked=true;
   }
   
   if(spa!=''){
    document.getElementById('spa').checked=true;
   }
   
   if(guest_house!=''){
    document.getElementById('guest_house').checked=true;
   }
   
   if(water_front!=''){
    document.getElementById('waterfront').checked=true;
   }
   
   if(gated!=''){
    document.getElementById('gated').checked=true;
   }
   
   if(gulf_access!=''){
    document.getElementById('gulf_access').checked=true;
   }
   
   $("#serch_ref").val(ref);
}

function filterMapSearch(){ 
    var property_type=$("#advnc_property_type").val().trim();
    var city = $("#advnc_city").val().trim();
    var zipcode = $("#advnc_zipcode").val().trim();
    var beds=encodeURIComponent($("#advnc_beds").val().trim());
    var baths=encodeURIComponent($("#advnc_baths").val().trim()); 
    var min_price=encodeURIComponent($("#advnc_min_price").val().trim());
    var max_price=encodeURIComponent($("#advnc_max_price").val().trim());
    var min_sq_ft=encodeURIComponent($("#advnc_min_sq_ft").val().trim());
    var max_sq_ft=encodeURIComponent($("#advnc_max_sq_ft").val().trim()); 
    var min_year=encodeURIComponent($("#advnc_min_year").val().trim());
    var no_garage=encodeURIComponent($("#advnc_no_garage").val().trim());
    var sort_by=encodeURIComponent($("#advnc_sort_by").val().trim());
    var ref=encodeURIComponent($("#serch_ref").val().trim());
    
    if(document.getElementById('just_listed').checked){
        var just_listed='Yes';
    }else{
        var just_listed='';
    }
    
    if(document.getElementById('include_pending').checked){
        var include_pending='Yes';
    }else{
        var include_pending='';
    }
    
    if(document.getElementById('include_sold').checked){
        var include_sold='Yes';
    }else{
        var include_sold='';
    }
    
    if(document.getElementById('foreclosure').checked){
        var foreclosure='Yes';
    }else{
        var foreclosure='';
    }
    
    if(document.getElementById('short_sale').checked){
        var short_sale='Yes';
    }else{
        var short_sale='';
    }
    
    if(document.getElementById('pool').checked){
        var pool='Yes';
    }else{
        var pool='';
    }
    
    if(document.getElementById('spa').checked){
        var spa='Yes';
    }else{
        var spa='';
    }
    
    if(document.getElementById('guest_house').checked){
        var guest_house='Yes';
    }else{
        var guest_house='';
    } 
    
    if(document.getElementById('gated').checked){
        var gated='Yes';
    }else{
        var gated='';
    } 
    
    if(document.getElementById('waterfront').checked){
        var waterfront='Yes';
    }else{
        var waterfront='';
    } 
    
    if(document.getElementById('gulf_access').checked){
        var gulf_access='Yes';
    }else{
        var gulf_access='';
    }
    
    window.location.href='map-search.php?location=Any&mls_number=&min_price='+min_price+'&max_price='+max_price+'&property_type='+property_type+'&city='+city+'&zipcode='+zipcode+'&beds='+beds+'&baths='+baths+'&min_sq_ft='+min_sq_ft+'&max_sq_ft='+max_sq_ft+'&min_year='+min_year+'&garage='+no_garage+'&just_listed='+just_listed+'&include_pending='+include_pending+'&include_sold='+include_sold+'&foreclosure='+foreclosure+'&short_sale='+short_sale+'&pool='+pool+'&spa='+spa+'&guest_house='+guest_house+'&waterfront='+waterfront+'&gated='+gated+'&gulf_access='+gulf_access+'&ref='+ref+'&sort='+sort_by+'&pagination=get&page=1&dfltLat=&dfltLng=&aNord=&aEst=&aSud=&aOvest=&zoom=11';
}


function openGetInfo(uniq_id){
$("#GetInfo").modal("show");
$("#info_message").val('I would like to get more info on this property with listing ID #'+uniq_id);
$("#info_mls_number").val(uniq_id);
}


function getPropertyInfo(){
    var uniq_id=encodeURIComponent($("#info_mls_number").val().trim()); 
    var name = encodeURIComponent($("#info_name").val().trim());
    var email=$("#info_email").val().trim();
    var info_phone=encodeURIComponent($("#info_phone").val().trim());
    var info_message=encodeURIComponent($("#info_message").val().trim());
 
    if(validateEmail(email)){
    var infoEmail=encodeURIComponent(email);
    if((infoEmail!='') && (uniq_id!='') && (info_phone!='') && (info_message!='')){
    var dataString ='logged_email='+logged_email+'&uniq_id='+uniq_id+'&name='+name+'&email='+infoEmail+'&info_phone='+info_phone+'&info_message='+info_message;
    
    $('#InfoButton').attr('disabled',true);  
    $('#InfoButton').html('Please wait...').addClass('disabled'); 
    //alert(dataString);
        
    $.ajax({
    url: "send_property_msg.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $('#InfoButton').attr('disabled',false);  
    $('#InfoButton').html('<i class="fas fa-envelope"></i> &nbsp;Get Info').removeClass('disabled'); 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    },
    success: function(data){  
    var dataData=data.data; 
    $('#InfoButton').attr('disabled',false);  
    $('#InfoButton').html('<i class="fas fa-envelope"></i> &nbsp;Get Info').removeClass('disabled');   
    if(dataData=='Done'){
    $("#info_email").val('');
    $("#info_phone").val('');
    $("#GetInfo").modal("hide");
    $.notify({ icon: 'fas fa-check', message: 'Your request has been sent successfully, one of our top agents will get back to you shortly.' },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" }  }); 
    }else{
    
    $('#page_loader').hide();     
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
      
    } 
    }
    
    });
    }else{ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'All fields are required.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  }); 
    }  
    }else{
     $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid email.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    } 
}


function openTourModal(uniq_id){
    
if(!email){
    $("#login").modal("show");
    showLogin();
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'You need to login to schedule a tour.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    return false;
}

$("#TourModal").modal("show");
$("#tour_mls_number").val(uniq_id);

}

function scheduleATour(){
    
    var uniq_id=encodeURIComponent($("#tour_mls_number").val().trim()); 
    var name = encodeURIComponent($("#tour_name").val().trim());
    var email=$("#tour_email").val().trim();
    var tour_phone=encodeURIComponent($("#tour_phone").val().trim());
    var move_in_date=encodeURIComponent($("#move_in_date").val().trim());
    var tour_date=encodeURIComponent($("#tour_date").val().trim());
    var tour_time=encodeURIComponent($("#tour_time").val().trim());
    
    if(validateEmail(email)){
    var infoEmail=encodeURIComponent(email);
    if((infoEmail!='') && (uniq_id!='') && (tour_phone!='') && (tour_date!='') && (tour_time!='') && (name!='')){
    var dataString ='logged_email='+logged_email+'&uniq_id='+uniq_id+'&name='+name+'&email='+infoEmail+'&tour_phone='+tour_phone+'&move_in_date='+move_in_date+'&tour_date='+tour_date+'&tour_time='+tour_time; 
    //alert(dataString)
    $('#TourButton').attr('disabled',true);  
    $('#TourButton').html('Please wait...').addClass('disabled'); 
   
    $.ajax({
    url: "schedule_a_tour.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $('#TourButton').attr('disabled',false);  
    $('#TourButton').html('<i class="fas fa-clock"></i> &nbsp;Schedule Tour').removeClass('disabled'); 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    },
    success: function(data){  
    var dataData=data.data; 
    $('#TourButton').attr('disabled',false);  
    $('#TourButton').html('<i class="fas fa-clock"></i> &nbsp;Schedule Tour').removeClass('disabled');   
    if(dataData=='Done'){
    $("#tour_date").val('');
    $("#tour_email").val('');
    $("#TourModal").modal("hide");
    var no_tour=data.no_tour;
    $("span[id^='tours_counts']").html(no_tour);
    
    $.notify({ icon: 'fas fa-check', message: 'Tour successfully scheduled, one of our top agents will get back to you soon.' },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" }  }); 
    }else{
    
    $('#page_loader').hide();     
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
      
    } 
    }
    
    });
    }else{ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'All fields are required.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  }); 
    }  
    }else{
     $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid email.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    } 
    
}

 function addToFav(unique_id){ 
   //alert(unique_id); 
   if(!email){
        $("#login").modal("show");
        showLogin();
        $.notify({ icon: 'fas fa-exclamation-triangle', message: 'You need to sign up to save this property.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
        return false;
   }
    
   if(email){
    $("[id^='add-to-fav-"+unique_id+"']").addClass("animated zoomOut");
    $("[class^='add_rem_loader_"+unique_id+"']").show(); $("[id^='add-to-fav-"+unique_id+"']").hide();
    var dataString ='email='+email+'&unique_id='+unique_id+'&type=add';
    //$('#page_loader').show(); 
    //alert(dataString) 
    $.ajax({
    url: "save_property.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){ 
    $("[class^='add_rem_loader_"+unique_id+"']").hide();
    $("[id^='add-to-fav-"+unique_id+"']").removeClass("animated zoomOut").addClass("animated zoomIn").show();
    $.notify({ icon: 'fas fa-exclamation-triangle', message: error },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    },
    success: function(data){    
    var dataData=data.data; 
    $("[class^='add_rem_loader_"+unique_id+"']").hide();
         
    if(dataData=='Done'){
    var no_saved=data.no_saved;
    $("[id^='rem-frm-fav-"+unique_id+"']").removeClass("animated zoomOut").addClass("animated zoomIn").show(); 
    $("span[id^='favorites_counts']").html(no_saved);
    }else{  
    $("[id^='add-to-fav-"+unique_id+"']").removeClass("animated zoomOut").addClass("animated zoomIn").show();
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });    
    } 
    } 
    });
     
   }else{ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'You need to login to save property.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    $("#login").modal("show");
    showLogin();
   }
}

function remFrmFav(unique_id){  
   if(email!=''){
    swal({
        title: "Are you sure you want to remove this property from your favorite listings?",
        icon: "warning",
        showCancelButton: true,
        closeOnClickOutside: false,
        buttons: {
            cancel: {
                text: "No!",
                value: null,
                visible: true,
                className: "btn-primary",
                closeModal: true,
            },
            confirm: {
                text: "Yes, remove it",
                value: true,
                visible: true,
                className: "btn-danger",
                closeModal: true
            }
        }
    }).then(isConfirm => {
        if (isConfirm) {
            $("[id^='rem-frm-fav-"+unique_id+"']").addClass("animated zoomOut");
            $("[class^='add_rem_loader_"+unique_id+"']").show(); $("[id^='rem-frm-fav-"+unique_id+"']").hide();
            var dataString ='email='+email+'&unique_id='+unique_id+'&type=delete';
           
            //alert(dataString) 
            $.ajax({
            url: "save_property.php",
            type: "POST",
            dataType: "json",
            data: dataString,
            timeout: 120000,
            error: function(xhr, status, error){ 
            $("[class^='add_rem_loader_"+unique_id+"']").hide();
            $("[id^='rem-frm-fav-"+unique_id+"']").removeClass("animated zoomOut").addClass("animated zoomIn").show(); 
            $.notify({ icon: 'fas fa-exclamation-triangle', message: error },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
            },
            success: function(data){   
            var dataData=data.data;      
            if(dataData=='Done'){
            var no_saved=data.no_saved; 
            $("[class^='add_rem_loader_"+unique_id+"']").hide();
            
            $("[id^='add-to-fav-"+unique_id+"']").removeClass("animated zoomOut").addClass("animated zoomIn").show();    
            $("span[id^='favorites_counts']").html(no_saved);
            swal("Removed", "Property successfully removed from your favorite listings.", "success");
            }else{    
            $("[id^='rem-frm-fav-"+unique_id+"']").removeClass("animated zoomOut").addClass("animated zoomIn").show();
            $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });    
            } 
            } 
            });
        } //else {
            //swal("Cancelled", "", "error");
        //}
    });
       
   }else{ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'You need to login to remove property.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    $("#login").modal("show");
    showLogin();
   }
}


function saveSearch(){
   if(!email){
        $("#login").modal("show");
        showLogin();
        $.notify({ icon: 'fas fa-exclamation-triangle', message: 'You need to sign up to save search and receive updates.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
        return false;
   }
    
   if(email){
    $("[id^='saveSearch']").attr("disabled",true);
    var search_link = encodeURIComponent(window.location.href);
    
    var dataString ='email='+email+'&location='+Location+'&min_price='+min_price+'&max_price='+max_price+'&property_type='+property_type+'&city='+city+'&zipcode='+zipcode+'&beds='+encodeURIComponent(bedrooms)+'&baths='+encodeURIComponent(bathrooms)+'&min_sq_ft='+min_sq_ft+'&max_sq_ft='+max_sq_ft+'&min_year='+min_year+'&garage='+encodeURIComponent(garage)+'&pool='+pool+'&spa='+spa+'&guest_house='+guest_house+'&waterfront='+water_front+'&gated='+gated+'&gulf_access='+gulf_access+'&communities='+communities+'&search_link='+search_link+'&type=add';
    //$('#page_loader').show(); 
    //alert(dataString) 
    $.ajax({
    url: "save_user_search.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $("[id^='saveSearch']").attr("disabled",false);
    $.notify({ icon: 'fas fa-exclamation-triangle', message: error },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    },
    success: function(data){    
    var dataData=data.data; 
    $("[id^='saveSearch']").attr("disabled",false);
         
    if(dataData=='Done'){
    var no_search=data.no_search;
    $("span[id^='saved_srch_counts']").html(no_search);
    $.notify({ icon: 'fas fa-check', message: 'Search successfully saved. If you don\'t receive our daily email directly in your inbox, please check your \'promotion\' tab or \'spam\' folder and move it into your inbox.' },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" } });
    }else{ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });    
    } 
    } 
    });
     
   }else{ 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'You need to login to save property.' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    $("#login").modal("show");
    showLogin();
   }
}

function cancelTour(unique_id){  

swal({
    title: "Are you sure you want to cancel this tour?",
    icon: "warning",
    showCancelButton: true,
    closeOnClickOutside: false,
    buttons: {
        cancel: {
            text: "No!",
            value: null,
            visible: true,
            className: "btn-primary",
            closeModal: true,
        },
        confirm: {
            text: "Yes, continue",
            value: true,
            visible: true,
            className: "btn-danger",
            closeModal: true
        }
    }
}).then(isConfirm => {
    if (isConfirm) {
        var dataString ='email='+email+'&unique_id='+unique_id+'&type=delete';
        $('#CancelTour_'+unique_id).attr('disabled',true);  
        $('#CancelTour_'+unique_id).html('Removing...').addClass('disabled'); 
        //alert(dataString) 
        $.ajax({
        url: "cancel_tour.php",
        type: "POST",
        dataType: "json",
        data: dataString,
        timeout: 120000,
        error: function(xhr, status, error){
        $('#CancelTour_'+unique_id).attr('disabled',false);  
        $('#CancelTour_'+unique_id).html('<i class="fas fa-trash fs-12"></i> Cancel Tour').removeClass('disabled'); 
        $.notify({ icon: 'fas fa-exclamation-triangle', message: error },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
        },
        success: function(data){   
        var dataData=data.data;   
        
        $('#CancelTour_'+unique_id).attr('disabled',false);  
        $('#CancelTour_'+unique_id).html('<i class="fas fa-trash fs-12"></i> Cancel Tour').removeClass('disabled'); 
           
        if(dataData=='Done'){
        var no_tour=data.no_tour; 
        $("div[id^='tour_row_"+unique_id+"']").slideUp('400');
        swal("Removed", "Tour successfully cancelled.", "success");
        $("span[id^='tours_counts']").html(no_tour);
        }else{ 
        $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });    
        } 
        } 
        });
    } //else {
        //swal("Cancelled", "", "error");
    //}
});
}

function shareOnFacebook(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&quote=Check out this home I found on MVP Realty. Address: ' +encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL),'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes'); 
    return false;
}

function shareOnTwitter(){
    window.open('https://twitter.com/intent/tweet?text=Check out this home I found on MVP Realty. Address: '+encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL),'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes');
    return false;
}
 
function copyToClipboard(element){
  var $temp = $("<input>");
  $("#hidden_link").append($temp);
  $temp.val($(element).text().trim()).select();
  document.execCommand("copy");
  $temp.remove();
  $.notify({ icon: 'fas fa-check-circle', message: 'Copied!' },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" } });
}

function sendMeHomes(){
    
    var emailSub=$("#subscribe_email").val().trim(); 
    var listing_class = encodeURIComponent($("#subscribe_listing_class").val());
    
    if(validateEmail(emailSub)){
    var subscribe_email=encodeURIComponent(emailSub);
    var dataString ='email='+subscribe_email+'&listing_class='+listing_class; 
    //alert(dataString)
    $('#SubButton').attr('disabled',true);  
    $('#SubButton').html('Please wait...').addClass('disabled'); 
   
    $.ajax({
    url: "subscribe_to_alerts.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $('#SubButton').attr('disabled',false);  
    $('#SubButton').html('<i class="fas fa-envelope"></i> &nbsp;Subscribe').removeClass('disabled'); 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    },
    success: function(data){  
    var dataData=data.data; 
    $('#SubButton').attr('disabled',false);  
    $('#SubButton').html('<i class="fas fa-envelope"></i> &nbsp;Subscribe').removeClass('disabled');   
    if(dataData=='Done'){
    $.notify({ icon: 'fas fa-check', message: 'You have successfully subscribe to listings related to this property.' },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" }  }); 
    }else{
    
    $('#page_loader').hide();     
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
      
    } 
    }
    
    });
    }else{
     $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid email.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    } 
    
}

function newsSubscription(){
    
    var news_email=$("#news_email").val().trim(); 
     
    if(validateEmail(news_email)){
    var subscribe_email=encodeURIComponent(news_email);
    var dataString ='email='+subscribe_email; 
    //alert(dataString)
    $('#NewsSubButton').attr('disabled',true);  
    $('#NewsSubButton').html('Please wait...').addClass('disabled'); 
   
    $.ajax({
    url: "subscribe_to_news.php",
    type: "POST",
    dataType: "json",
    data: dataString,
    timeout: 120000,
    error: function(xhr, status, error){
    $('#NewsSubButton').attr('disabled',false);  
    $('#NewsSubButton').html('Submit').removeClass('disabled'); 
    $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
    },
    success: function(data){  
    var dataData=data.data; 
    $('#NewsSubButton').attr('disabled',false);  
    $('#NewsSubButton').html('Submit').removeClass('disabled');   
    if(dataData=='Done'){
    $("#news_email").val('');
    $.notify({ icon: 'fas fa-check', message: 'You have successfully subscribe to news letter.' },{ type: 'success', timer: 4000, placement: { from: "top", align: "center" }  }); 
    }else{
    
    $('#page_loader').hide();     
    $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" }  });
      
    } 
    }
    
    });
    }else{
     $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid email.'},{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } }); 
    } 
    
}

function abbrNum(number, decPlaces){
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "K", "M", "B", "T" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}


function searchThisBlog(){
    var keyword = encodeURIComponent($("#search_blog").val().trim());
    if(keyword!=''){
    window.location.href='search.php?keyword='+keyword+'&page=1';
    }else{
    $.notify({ icon: 'fas fa-exclamation-triangle', message: 'Provide a valid search term' },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
    return false;    
    }
}


    
$(document).click(function(){
    $('#streamed_search').hide();
});
    
function quickSearch(keyword,from){
    if(keyword!=""){
        
        $(".quick_srch_img").show();
        $("#streamed_search").show();
        $(".search_row").remove();
        var textboxTop = parseFloat($("#advnc_state_or_city").offset().top + 50);
        var textboxLeft = parseFloat($("#advnc_state_or_city").offset().left - 11);
        $(".fixed_streamed_search#streamed_search").attr("style","top: "+textboxTop+"px!important; left: "+textboxLeft+"px!important;").show();
        
        var dataString ='keyword='+keyword; //+'&remeber_me='+remeber_me;

        $.ajax({
        url: "quick_search.php",
        type: "POST",
        dataType: "json",
        data: dataString,
        timeout: 120000,
        error: function(xhr, status, error){
        $(".quick_srch_img").hide();
        $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
        },
        success: function(data){ 
        
        $(".quick_srch_img").hide();
        $.each(data, function(i){
        var dataData=data[i].data;
        
        if(dataData=='Done'){
            
            var City = data[i].City;
            var Development = data[i].Development;
            var DevelopmentName = data[i].DevelopmentName;
            var table = data[i].table;
            
            /*
            if(table == 'city'){
                var outText = '<b>'+City+'</b>'
                var link = 'search.php?location=&mls_number=&min_price=&max_price=&property_type=&city='+City+'&zipcode=&beds=Any&baths=Any&min_sq_ft=&max_sq_ft=&min_year=Any&garage=Any&just_listed=&include_pending=&include_sold=&foreclosure=&short_sale=&pool=&spa=&guest_house=&waterfront=&gated=&pagination=get&page=1';
            }else 
            */
            if(table == 'community'){
                if(!Development){
                    Development = DevelopmentName;
                }
                
                var outText = '<b style="color: #00283C;">'+Development+' <span style="color: #0072A8;"> | Community in '+City+'</span></b>';
                var link = 'community/'+encodeURIComponent(Development)+'/homes/price-asc/1';
                var valueForInput = Development;
            }else if(table == 'streetname'){
                var outText = '<b style="color: #00283C;">'+DevelopmentName+' <span style="color: #0072A8;"> | Street in '+City+'</span></b>';
                var link = 'search.php?location='+DevelopmentName+'&mls_number=&min_price=&max_price=&property_type=&city=&zipcode=&beds=Any&baths=Any&min_sq_ft=&max_sq_ft=&min_year=Any&garage=Any&just_listed=&include_pending=&include_sold=&foreclosure=&short_sale=&pool=&spa=&guest_house=&waterfront=&gated=&gulf_access=&ref=advanced&pagination=get&page=1';
                var valueForInput = DevelopmentName;
            }else if(table == 'postal_code'){
                var outText = '<b style="color: #00283C;">'+DevelopmentName+' <span style="color: #0072A8;"> | Postal Code in '+City+'</span></b>';
                var link = 'search.php?location='+DevelopmentName+'&mls_number=&min_price=&max_price=&property_type=&city=&zipcode=&beds=Any&baths=Any&min_sq_ft=&max_sq_ft=&min_year=Any&garage=Any&just_listed=&include_pending=&include_sold=&foreclosure=&short_sale=&pool=&spa=&guest_house=&waterfront=&gated=&gulf_access=&ref=advanced&pagination=get&page=1';
                var valueForInput = DevelopmentName;
            }
            
            if(from && from=='lite'){
            var div = '<a href="javascript:;" onclick="setAddressVal(\''+valueForInput+'\',\''+City+'\')" class="search_row w-100 p-12 ml-0 dsply_blck" style="color: #007EBB;">'+outText+'</a>';  
            }else{ 
            var div = '<a href="'+link+'" class="search_row w-100 p-15 ml-0 dsply_blck" style="color: #007EBB;">'+outText+'</a>';
            }
            $("#streamed_search").append(div);
            
        }else{
        $(".quick_srch_img").hide();
        $("#streamed_search").hide();
        $(".search_row").remove();
            
        //$.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
           
        }
    
        });
                    
        }
        
        });
    }else{
        $(".quick_srch_img").hide();
        $("#streamed_search").hide();
        $(".search_row").remove();
    }
}


function setAddressVal(value,City){
    $("#advnc_state_or_city").val(value);
    $("#advnc_city").val(City);
}


    
function loadMLSCityCommunities(where){
    var city = $("#advnc_city").val(); 
    var last_city = $("#last_city").val();
    
    if(last_city == city){
        return false;
    }
    
    if(where == 'MLS'){
        var city_cont = "mls_city_cont";
    }else{
        var city_cont = "modal_comm_list";
        $("#last_city").val(city);
    }
    
    if(city){
        $("."+city_cont+" #city_list").show();
        $("."+city_cont+" #city_error").hide();
         $('.letterCont').hide(); $('.letterCheckBox').remove();
         
        var dataString ='city='+city; //+'&remeber_me='+remeber_me;

        $.ajax({
        url: "cities_lookup.php",
        type: "POST",
        dataType: "json",
        data: dataString,
        timeout: 120000,
        error: function(xhr, status, error){
        $.notify({ icon: 'fas fa-exclamation-triangle', message: xhr.responseText },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
        },
        success: function(data){  
        var dataData=data.data;
        
        if(dataData=='Done'){
            var communities = data.communities;
            var splitd = communities.split(',');
            
            for(i=0; i<splitd.length; i++){
                var comm = splitd[i];
                if(comm!=''){
                    var spltCom = comm.split(':');
                    var commID = spltCom[0];
                    var commName = spltCom[1];
                    
                    appendMLSComm(commID,commName,where);
                }
            }
            
            if(where == 'Modal'){
                checkCommunities();
            }
        }else{
            
        $.notify({ icon: 'fas fa-exclamation-triangle', message: dataData },{ type: 'danger', timer: 4000, placement: { from: "top", align: "center" } });
           
        }
    
        }
        });

    }else{
        $("."+city_cont+" #city_error").html("<div class='w-100 p-50 centered-text'>Please select a city to continue.</div>").show(); 
        $("."+city_cont+" #city_list").hide();
    }
}
    
    

    
function appendMLSComm(commID,commName,where){
    
    if((commName.lastIndexOf('A', 0) === 0) || (commName.lastIndexOf('B', 0) === 0) || (commName.lastIndexOf('C', 0) === 0)){
        $("#abc_cont").show();
        var appendTo = "#streamed_abc";
    }else if((commName.lastIndexOf('D', 0) === 0) || (commName.lastIndexOf('E', 0) === 0) || (commName.lastIndexOf('F', 0) === 0)){
        $("#def_cont").show();
        var appendTo = "#streamed_def";
    }else if((commName.lastIndexOf('G', 0) === 0) || (commName.lastIndexOf('H', 0) === 0) || (commName.lastIndexOf('I', 0) === 0)){
        $("#ghi_cont").show();
        var appendTo = "#streamed_ghi";
    }else if((commName.lastIndexOf('J', 0) === 0) || (commName.lastIndexOf('K', 0) === 0) || (commName.lastIndexOf('L', 0) === 0)){
        $("#jkl_cont").show();
        var appendTo = "#streamed_jkl";
    }else if((commName.lastIndexOf('M', 0) === 0) || (commName.lastIndexOf('N', 0) === 0) || (commName.lastIndexOf('O', 0) === 0)){
        $("#mno_cont").show();
        var appendTo = "#streamed_mno";
    }else if((commName.lastIndexOf('P', 0) === 0) || (commName.lastIndexOf('Q', 0) === 0) || (commName.lastIndexOf('R', 0) === 0)){
        $("#pqr_cont").show();
        var appendTo = "#streamed_pqr";
    }else if((commName.lastIndexOf('S', 0) === 0) || (commName.lastIndexOf('T', 0) === 0) || (commName.lastIndexOf('U', 0) === 0)){
        $("#stu_cont").show();
        var appendTo = "#streamed_stu";
    }else if((commName.lastIndexOf('V', 0) === 0) || (commName.lastIndexOf('W', 0) === 0) || (commName.lastIndexOf('X', 0) === 0)){
        $("#vwx_cont").show();
        var appendTo = "#streamed_vwx";
    }else if((commName.lastIndexOf('Y', 0) === 0) || (commName.lastIndexOf('Z', 0) === 0)){
        $("#yz_cont").show();
        var appendTo = "#streamed_yz";
    }else{
        $("#numchar_cont").show();
        var appendTo = "#streamed_numchar";
    }
    
    var div = '<div class="letterCheckBox col-md-4 fleft dsply_inline_blck">\
    <div class="form-group mt-10">\
        <input id="'+commID+'" class="checkbox-custom" name="'+commID+'" value="'+commID+'" type="checkbox" />\
		<label for="'+commID+'" class="checkbox-custom-label">'+commName+'</label>\
    </div>\
    </div>';
    
    if(where == 'MLS'){
        $('.mls_city_cont '+appendTo).append(div);
    }else{
        $('.modal_comm_list '+appendTo).append(div);
    }

}


function checkCommunities(){
    //$("#MLS_Communities").modal("show"); /** For Testing **/
    
    var spltCom = communities.split(',');
    
    for(var i=0; i<=spltCom.length; i++){
        var thisComm = spltCom[i];
        if(thisComm && thisComm!=''){
            document.getElementById(thisComm).checked=true;
        }
    }
}


/*
	Callback function that is called immediately after JivoChat is loaded
*/
function jivo_onLoadCallback(){
	// Create a DIV element for the label
	window.jivo_cstm_widget = document.createElement('div');
	jivo_cstm_widget.setAttribute('id', 'jivo_custom_widget');
	document.body.appendChild(jivo_cstm_widget);
	
	// Adds handlers click on the icon - to maximize the window when clicked
	jivo_cstm_widget.onclick = function(){
		jivo_api.open();
	}
	
	// Change the CSS class if there are agents online
	if (jivo_config.chat_mode == "online"){
		jivo_cstm_widget.setAttribute("class", "jivo_online");
        jivo_cstm_widget.innerHTML ='<i class="fab fa-facebook-messenger"></i>';
	}else{
        jivo_cstm_widget.innerHTML ='<i class="fa fa-envelope red"></i>';
	}
	
	// Now you can show the user a shortcut
	window.jivo_cstm_widget.style.display='block';
}

/*
	Callback function jivo_onOpen and jivo_onClose called whenever the chat window JivoChat is expanded or collapsed by the user or by the proactive invitations rule.
*/
function jivo_onOpen(){
	// If chat is deployed - hide shortcut
	if (jivo_cstm_widget)
		jivo_cstm_widget.style.display = 'none';
}
function jivo_onClose(){
	// If chat is minimized - show label
	if (jivo_cstm_widget)
		jivo_cstm_widget.style.display = 'block';
}
