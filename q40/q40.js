var make_album = function (artistName, albumTitle, tracks) {
    var obj1 = {
        name: artistName,
        title: albumTitle,
        tracks: tracks || 0,
    };
    return obj1;
};
var album1 = make_album('Artist 1', 'Album 1', 12);
console.log(album1);
var album2 = make_album('Artist 2', 'Album 2', 8);
console.log(album2);
var album3 = make_album('Artist 3', 'Album 3', null);
console.log(album3);
