/**
 * Created by kevin on 05/11/2016.
 */
var btn = document.getElementById("gallery");
var takeCamera = document.getElementById("camera");
btn.addEventListener("click",function () {
    navigator.camera.getPicture(function (imageData) {
        alert(imageData.toString())
        }, function (message) {
        alert(message);
        },
        {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
        });
});

takeCamera.addEventListener("click",function () {
    openCamera();
});

function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    if (selection == "camera-thmb") {
        options.targetHeight = 100;
        options.targetWidth = 100;
    }

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}

function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}
