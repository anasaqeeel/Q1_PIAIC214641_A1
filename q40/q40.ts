let make_album = (artistName: string, albumTitle: string, tracks: number): { name: string, title: string, tracks: number } => {
    let obj1: { name: string, title: string, tracks: number } = {
      name: artistName,
      title: albumTitle,
      tracks: tracks || 0,
    };
  
    return obj1;
  };
  
  let album1 = make_album('Artist 1', 'Album 1', 12);
  console.log(album1);
  
  let album2 = make_album('Artist 2', 'Album 2', 8);
  console.log(album2);
  
  let album3 = make_album('Artist 3', 'Album 3', null);
  console.log(album3);
  