const show_magicians = (magicians: string[]): void => {
    for (let i of magicians) {
      console.log(i);
    }
    make_grear(magicians);
  };
const make_grear=(name1:string[]):void=>{
    for (let i in name1) {
name1[i]+=" the Great! ";
        console.log(name1[i]);
      }
}
  
  let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  show_magicians(magician_names);
  