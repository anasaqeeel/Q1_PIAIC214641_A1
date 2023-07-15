const show_magicians = (magicians: string[]): void => {
    for (let magician of magicians) {
      console.log(magician);
    }
  };
  
  const make_great = (magicians: string[]): string[] => {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
      modifiedMagicians.push(`the Great ${magician}`);
    }
    return modifiedMagicians;
  };
  
  let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  let modified_magician_names: string[] = make_great([...magician_names]);
  
  show_magicians(magician_names);
  console.log("------------");
  show_magicians(modified_magician_names);
  