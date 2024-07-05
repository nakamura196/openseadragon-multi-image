const images = [
    "https://dl.ndl.go.jp/api/iiif/1301543/R0000001/info.json",
    "https://dl.ndl.go.jp/api/iiif/1301543/R0000002/info.json",
    "https://dl.ndl.go.jp/api/iiif/1301543/R0000003/info.json"
];

const viewer = OpenSeadragon({
    id: "viewer",
    prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
    tileSources: images
});

const direction = "right-to-left";

viewer.addHandler('open', function () {
    var count = viewer.world.getItemCount();

    for (let i = 0; i < count; i++) {
        const tiledImage = viewer.world.getItemAt(i);
        const positionIndex = direction === "right-to-left" ? count - i - 1 : i;
        const position = new OpenSeadragon.Point(positionIndex, 0);
        tiledImage.setPosition(position, true);
    }

    viewer.viewport.fitBounds(viewer.world.getHomeBounds(), true);
});
