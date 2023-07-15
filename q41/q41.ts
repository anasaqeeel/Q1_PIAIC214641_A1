const show_magicians = (magicians: string[]): void => {
    for (let i of magicians) {
      console.log(i);
    }
  };
  
  let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  show_magicians(magician_names);
  