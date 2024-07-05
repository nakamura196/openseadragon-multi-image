const images = [
    "https://dl.ndl.go.jp/api/iiif/1301543/R0000001/info.json",
    "https://dl.ndl.go.jp/api/iiif/1301543/R0000002/info.json",
    "https://dl.ndl.go.jp/api/iiif/1301543/R0000003/info.json"
];

var viewer = OpenSeadragon({
    id: "viewer",
    prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
    tileSources: images
});

const direction = "right-to-left";

viewer.addHandler('open', function () {
    var i, tiledImage;
    var count = viewer.world.getItemCount();

    for (i = 0; i < count; i++) {
        tiledImage = viewer.world.getItemAt(i);
        let position;
        if (direction === "right-to-left") {
            position = new OpenSeadragon.Point(count - i - 1, 0);
        } else {
            position = new OpenSeadragon.Point(i, 0);
        }

        tiledImage.setPosition(position, true);
    }
    viewer.viewport.fitBounds(viewer.world.getHomeBounds(), true);
});