/*jslint unparam: true */
/*global window, document, blueimp, $ */

$(function () {
    'use strict';

    $.ajax({
        url: '/photos.json',
        dataType: 'json'
    }).done(function (result) {
        var linksContainer = $('#links'), baseUrl;
            
        $.each(result, function(index, photo) {
            var photoId = photo.id;
            var likeCount = photo.like;
            var likeUrl;

            baseUrl = photo.image.image.url;
           
        var imgThumbnail = $('<span>')
                    .addClass('col-xs-8 col-sm-4 col-lg-2')
                    .append(
                        $('<a>')
                        .addClass('thumbnail')
                        .prop('href', baseUrl)
                        .prop('title', photo.title)
                        .attr('data-gallery', '')
                        .append($('<img>').prop('src', baseUrl))
                    );

        var thumbsUpIcon = $('<span>')
                            .addClass('glyphicon glyphicon-thumbs-up')
                            .text(likeCount);
        
        var likeButton = $('<button>')
                            .addClass('btn btn-default')
                            .prop('type', 'button')
                            .append(thumbsUpIcon);


                    imgThumbnail
                    .append(likeButton)
                    .appendTo(linksContainer);
        
        likeButton.click(function(){
            likeUrl = "photos/addLike/" + photoId + ".json";
           
            $.ajax({
                dataType:'json', 
                url:likeUrl
            }).done(function(result) {
                thumbsUpIcon.text(result.like);
            });

        });
        
        });
        
    });

    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

    $('#borderless-checkbox').on('change', function () {
        var borderless = $(this).is(':checked');
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
    });

    $('#fullscreen-checkbox').on('change', function () {
        $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
    });

    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
    });

    $('#video-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery([
            {
                title: 'Sintel',
                href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
                type: 'video/mp4',
                poster: 'http://media.w3.org/2010/05/sintel/poster.png'
            },
            {
                title: 'Big Buck Bunny',
                href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/' +
                    'Big_Buck_Bunny_Trailer_400p.ogg',
                type: 'video/ogg',
                poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
                    'Big.Buck.Bunny.-.Opening.Screen.png/' +
                    '800px-Big.Buck.Bunny.-.Opening.Screen.png'
            },
            {
                title: 'Elephants Dream',
                href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
                    'Elephants_Dream_%28high_quality%29.ogv/' +
                    'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
                type: 'video/webm',
                poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
                    'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
            },
            {
                title: 'LES TWINS - An Industry Ahead',
                href: 'http://www.youtube.com/watch?v=zi4CIXpx7Bg',
                type: 'text/html',
                youtube: 'zi4CIXpx7Bg',
                poster: 'http://img.youtube.com/vi/zi4CIXpx7Bg/0.jpg'
            },
            {
                title: 'KN1GHT - Last Moon',
                href: 'http://vimeo.com/73686146',
                type: 'text/html',
                vimeo: '73686146',
                poster: 'http://b.vimeocdn.com/ts/448/835/448835699_960.jpg'
            }
        ], $('#blueimp-gallery').data());
    });

});
