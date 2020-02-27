function addWaitingVideo(baseVideo, waitingVideo, baseVideoDuration) {
    setTimeout(function () {
        baseVideo[0].pause();
        baseVideo.hide();
        if (waitingVideo[0].paused) {
            waitingVideo[0].play();
        }
        waitingVideo.show();
    }, baseVideoDuration);
}

function moveToNextStep(previousForm, nextForm, previousVideo, nextVideo) {
    previousVideo[0].pause();

    previousForm.hide();
    nextForm.show();
    nextVideo.show();
    nextVideo[0].play();
    previousVideo.hide();
}

function addVideo(videoId, src) {
    var video = $('<video />', {
        id: videoId,
        src: src,
        type: 'video/mp4',
        controls: true,
        preload: "auto"
    });
    video.addClass("video");
    video.hide();
    $("#video-section").append(video);
}

$(document).ready(function () {
    var video1 = $("#video-step-1");
    var waitingVideo = $("#video-waiting");
    var video2 = $("#video-step-2");
    var video3 = $("#video-step-3");
    var video4 = $("#video-step-4");
    var video5 = $("#video-step-5");
    var video6 = $("#video-step-6");

    var form1 = $('#form-1');
    var form2 = $('#form-2');
    var form3 = $('#form-3');
    var form4 = $('#form-4');
    var form5 = $('#form-5');
    var form6 = $('#form-6');

    $("#play2").on('click', function () {
        video1[0].play();
    });

    video1.on('playing', function () {
        $('.play').remove();
        $('.play2').remove();
        $('#konto-form').show();
        form1.show();
        addWaitingVideo(video1, waitingVideo, 7000);
        waitingVideo.load();
        $("#step-1-submit").on('click', function () {
            var currentVideo = video1[0].paused ? waitingVideo : video1;
            moveToNextStep(form1, form2, currentVideo, video2);
            addWaitingVideo(video2, waitingVideo, 13000);
            // video3[0].load();
            addVideo('video-step-3', './adres.mp4');
            video3 = $("#video-step-3");
        });
        $("#step-2-submit").on('click', function () {
            var currentVideo = video2[0].paused ? waitingVideo : video2;
            moveToNextStep(form2, form3, currentVideo, video3);
            addWaitingVideo(video3, waitingVideo, 10000);
            addVideo('video-step-4', './numer_telefonu.mp4');
            video4 = $("#video-step-4");
            // video4[0].load();
        });
        $("#step-3-submit").on('click', function () {
            var currentVideo = video3[0].paused ? waitingVideo : video3;
            moveToNextStep(form3, form4, currentVideo, video4);
            addWaitingVideo(video4, waitingVideo, 8000);
            addVideo('video-step-5', './newsletter.mp4');
            video5 = $("#video-step-5");
            // video5[0].load();
        });
        $("#step-4-submit").on('click', function () {
            var currentVideo = video4[0].paused ? waitingVideo : video4;
            moveToNextStep(form4, form5, currentVideo, video5);
            addWaitingVideo(video5, waitingVideo, 7000);
            addVideo('video-step-6', './podziekowania.mp4');
            video6 = $("#video-step-6");
            // video6[0].load();
        });
        $("#step-5-submit").on('click', function () {
            var currentVideo = video5[0].paused ? waitingVideo : video5;
            moveToNextStep(form5, form6, currentVideo, video6);
            addWaitingVideo(video6, waitingVideo, 7000);
        });
        // addVideo();

    });

});