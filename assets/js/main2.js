function fixMapHeight(){
    var imageHeight = $('.latest-news img').outerHeight();

    $('#gmap_canvas2').height(imageHeight); 
}

$(document).ready(function(){

    fixMapHeight();

    $(window).resize(function(){
        fixMapHeight();
    });
    
    


});

var slider_img = $('#slider img:first-child');
$(window).load(function(){

    $('#slider').slidesjs({
        width: 1920,
        height: 583,

        pagination: {
            active: false
        },
        navigation : {
            active: false
        },
        play: {
            active: false,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
            effect: "fade",
            // [string] Can be either "slide" or "fade".
            interval: 5000,
            // [number] Time spent on each slide in milliseconds.
            auto: true,
            // [boolean] Start playing the slideshow on load.
            swap: false,
            // [boolean] show/hide stop and play buttons
            pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
            restartDelay: 2500
            // [number] restart delay on inactive slideshow
        },
        effect: {
            // slide: {
            // // Slide effect settings.
            // speed: 1000
            // // [number] Speed in milliseconds of the slide animation.
            // },
            fade: {
                speed: 500,
                // [number] Speed in milliseconds of the fade animation.
                crossfade: true
                // [boolean] Cross-fade the transition.
            }
        },
        callback: {
            loaded: function(number) {
                $(".slider-tags li").removeClass('active');
                $(".slider-tags li:nth-child(1)").addClass('active');
            },
            start: function(number) {
                number = ( number == 10 ) ? 0 : number+1;
                $(".slider-tags li").removeClass('active');
                $(".slider-tags li:nth-child("+ number+")").addClass('active');
            }
        }
    });

    $('#power-slider').slidesjs({
        play: {
            active: false,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
            effect: "slide",
            // [string] Can be either "slide" or "fade".
            interval: 5000,
            // [number] Time spent on each slide in milliseconds.
            auto: false,
            // [boolean] Start playing the slideshow on load.
            swap: false,
            // [boolean] show/hide stop and play buttons
            pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
            restartDelay: 2500
            // [number] restart delay on inactive slideshow
        },
        effect: {
            slide: {
                // Slide effect settings.
                speed: 1000
                // [number] Speed in milliseconds of the slide animation.
            },
            fade: {
                speed: 500,
                // [number] Speed in milliseconds of the fade animation.
                crossfade: true
                // [boolean] Cross-fade the transition.
            }
        },
        callback: {
            loaded: function(number) {
                // Use your browser console to view log
                console.log('SlidesJS: Loaded with slide #' + number);

                // Show start slide in log
                $('.slider-tags li').text(number);
            },
            start: function(number) {
                // Use your browser console to view log
                console.log('SlidesJS: Start Animation on slide #' + number);
            },
            complete: function(number) {
                $('.slider-tags li').addClass('active');
                console.log(number)
            }
        }
    });
});
function sameHeight(domElement, heightAutoFlag){
    var biggestHeight = 0,
    heightAutoFlag = ( heightAutoFlag ) ? 1 : 0;
    $.each(domElement, function(index,element){
        if ( heightAutoFlag )
            $(element).css ({'height':'auto'});

        var height = $(element).outerHeight();

        biggestHeight = ( height > biggestHeight ) ? height : biggestHeight;
    });
    domElement.css( {'height': biggestHeight + 15 + 'px'} );
}

$(document).ready(function(){

    if ( $(".mainpage-text").length ){
        sameHeight( $(".mainpage-text") );
    }
    $(".owl-carousel").owlCarousel({
        pagination: false,
        navigation:true,
        navigationText : ["<",">"],
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        rewindNav : false,
        items: 5,
        itemsScaleUp: true,
        autoHeight : true,
        transitionStyle:"fade"
    });
    // $('.product-sections .subs').on('click',function(){
    // $('.product-sections .subs').css({'font-weight':'normal'});
    // $(this).css({'font-weight':'bold'});
    // });

    $('#timeline').on('click', '.years a', function(e){
        e.preventDefault();

        var year = $(this).find('.year').text();
        var desc = $(this).find('.desc').text();

        $('#year-info .year, #year-info .text').animate({opacity: 0},300,
            function(){
                $('#year-info .year').text(year);
                $('#year-info .text').text(desc);
                $('#year-info .year, #year-info .text').animate({opacity: 1},300);
        });

        /*       $.ajax({
        type: 'GET',
        // url: '',
        dataType: 'html',
        success: function(html){
        $('#year-info .year').text(year);
        $('#year-info .text').text(desc);
        $('#year-info .year, #year-info .text').animate({opacity: 1},300);
        },
        error: function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        }
        });*/
    });

    $('select#year').selectOrDie({
        links: true,
        placeholder: 'browse by year',
        cycle: true,
        customID: "custom-select",
        size: 10
    });

    $('#product-sections li').click(function(){
        // var id = $(this).data('id');
        // $(".sections").hide();
        // $(".owl-carousel").hide();
        // $("#section_"+id).fadeIn();
        // $(".color-box"+id).colorbox({rel:'color-box'+id});
        // $("#owl-example"+id).fadeIn();
    });

    $('#0').click();

    $(".has-color-box").colorbox({
        rel:'has-color-box',
        width: '100%'
    });

    $('select#power-select').selectOrDie({
        placeholder: 'Browse sections ...',
        customID: 'power-custom-select',
        // cycle: true,
        onChange: function(){
            // $('#power-product-details .details').fadeOut();
            var id = $(this).val();
            // var title= $(this).attr('data-title');
            $(".sections").hide();
            $(".owl-carousel").hide();
            $("#info").hide();
            $("#section_"+id).fadeIn();
            $(".color-box"+id).colorbox({rel:'color-box'+id, width: '100%'});
            var path = window.location.pathname;
            var page = path.split("/").pop();
            if(page == "category-details-2.php"){
                $("#owl-example"+id).owlCarousel({
                    autoPlay : 3000,
                    stopOnHover : true,
                    navigation:true,
                    paginationSpeed : 1000,
                    goToFirstSpeed : 2000,
                    items: 5,
                    itemsScaleUp: true,
                    autoHeight : true,
                    transitionStyle:"fade"
                });
            }
            $("#owl-example"+id).fadeIn();
            //$("#section-identifier").html(title);
            //
            //            $.ajax({
            //                type: 'GET',
            //                url: 'power-sections.php',
            //                dataType: 'html',
            //                data: {
            //                    section: $(this).val()
            //                },
            //                success: function(html){
            //                    $('#power-product-details .details').html(html).fadeIn();
            //                },
            //                error: function(jqXHR, textStatus, errorThrown){
            //                    console.log(jqXHR);
            //                    console.log(textStatus);
            //                    console.log(errorThrown);
            //                }
            //            });
        }
    });
    $('select#power-select').change();

    $('select#career-select').selectOrDie({
        placeholder: 'Browse Vacancies...',
        customID: 'career-custom-select',
        tabindex: 1
    });

    $('select#career-select').change(function(){
        var value = $(this).val();
        $('.vacancy').hide();
        $("#vacancy_"+value).show();
    });

    $('select#career-form-select').selectOrDie({
        placeholder: 'I’m applying for...',
        customID: 'job-custom-select'
    });

    function init_map(elementId){
        var stylesOpt = [
            {
                "stylers": [
                    { "hue": "#007fff" },
                    { "saturation": -44 }
                ]
            },{
            }
        ];



        var MY_MAPTYPE_ID = 'powertech_group';

        var myLatlng = new google.maps.LatLng(33.898250, 35.498862);

        var myOptions = {
            zoom:2,
            center:myLatlng,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
            mapTypeId: MY_MAPTYPE_ID
        };
        map = new google.maps.Map(document.getElementById(elementId), myOptions);

        var pinIcon = new google.maps.MarkerImage(
            "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|6666bb",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(17, 27)
        );

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Lebanon',
            icon: pinIcon
        });

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(33.325067,44.3876673),//iraq
            map: map,
            icon: pinIcon
        });

        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(15.5522282,48.5163875),//yemen
            map: map,
            icon: pinIcon
        });
        var marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(24.6334071,46.6823343),//ksa
            map: map,
            icon: pinIcon
        });

        var marker4 = new google.maps.Marker({
            position: new google.maps.LatLng(30.0376475,31.2131402),//egypt
            map: map,
            icon: pinIcon
        });
        /*  var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(12.861131, 30.190728),//sudan
        map: map,
        icon: pinIcon
        });*/
        var marker6 = new google.maps.Marker({
            position: new google.maps.LatLng(27.9416688,2.6334631),//algeria
            map: map,
            icon: pinIcon
        });
        var marker7 = new google.maps.Marker({
            position: new google.maps.LatLng(32.420763,-6.4168639),//morocco
            map: map,
            icon: pinIcon
        });
        var marker8 = new google.maps.Marker({
            position: new google.maps.LatLng(7.9527706,-1.0307118),//ghana
            map: map,
            icon: pinIcon
        });

        var marker9 = new google.maps.Marker({
            position: new google.maps.LatLng(9.077751,8.6774567),//nigeria
            map: map,
            icon: pinIcon
        });
        var marker10 = new google.maps.Marker({
            position: new google.maps.LatLng(33.9340383,67.7034312),//afghanistan
            map: map,
            icon: pinIcon
        });

        var marker11 = new google.maps.Marker({
            position: new google.maps.LatLng(17.5739347,-3.9861092),//mali
            map: map,
            icon: pinIcon
        });

        var marker12 = new google.maps.Marker({
            position: new google.maps.LatLng(45.9419466,25.0094306),//romania
            map: map,
            icon: pinIcon
        });
        var marker13 = new google.maps.Marker({
            position: new google.maps.LatLng(22.3990012,95.0327094),//romania
            map: map,
            icon: pinIcon
        });

        var styledMapOptions = {
            name: 'Powertech Group'
        };
        var customMapType = new google.maps.StyledMapType(stylesOpt, styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


        // marker = new google.maps.Marker({
        //     map: map,
        //     position: new google.maps.LatLng(40.7127837, -74.00594130000002)
        // });
        // infowindow = new google.maps.InfoWindow({
        //     content:"<b></b><br/><br/> "
        // });

        // google.maps.event.addListener(marker, "click", function(){
        //     infowindow.open(map,marker);
        // });
    }
    if($('#gmap_canvas').length)
        google.maps.event.addDomListener(window, 'load', init_map('gmap_canvas'));

    if($('#gmap_canvas2').length)
        google.maps.event.addDomListener(window, 'load', init_map('gmap_canvas2'));

    $(window).load(function(){
        $('#accordion').accordion({
            active: false,
            collapsible: true,
            heightStyle: 'content',
            activate: function( event, ui ) {

                var img = ui.newHeader.data('img');

                if(img == 'milestone'){
                    $('#timeline').fadeIn(400);
                    $('#about-us-img-holder').removeClass('active');
                    $('#about-us-img-holder .visible').removeClass('visible');
                }else if ( typeof img != 'undefined' ) {
                    $('#timeline').fadeOut(400);
                    $('#about-us-img-holder .visible').removeClass('visible');
                    $('#about-us-img-holder').addClass('active').find('.'+img).addClass('visible');
                }

                if ( typeof img == 'undefined' ) {
                    $('#about-us-img-holder').removeClass('active');
                    $('#about-us-img-holder .visible').removeClass('visible');
                    $('#timeline').fadeOut(400);
                }
            }
        });
    });
});
