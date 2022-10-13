class Chore {
    constructor(name) {
        this.name = name;
    }

}
  
class Day { 
    constructor (name) {
        this.name= name; 
        this.chores= [];   
        }
    
  }

class Menu {
    constructor () {
        this.days = [] ; 
          this.selectedDay = null ;
    }

  start () {  
   let selection = this.showMainMenuOptions (); 
   while( selection != 0) {
    switch (selection ) {
        case '1':
        this.showMenu();
            break;
        case '2':
            this.createDay();
            break;
        case '3':
            this.viewDay();
            break;
        case '4':
            this.deleteDay();
            break;
        case '5':
          this.displayDays();
        default:
            selection = 0 ;
    }
    selection = this.showMainMenuOptions ();
   }

   alert('See you later!');
}

showMainMenuOptions() {
return prompt(`
List for the week
-----------------------
  0)Exit
  1)Show menu
  2)Create day
  3)View day
  4)Delete day
  5)Display all days 
  `);

} 
showDayMenuOptions (dayInfo){
    return prompt (`
   0)Go back
   1)Add chore
   2)Delete chore
   ---------------
   ${dayInfo}

   `);
}

showMenu() {
    alert(`
    Days Of The Week
    -----------------
    Monday:
    Tuesday:
    Wednesday:
    Thursday:
    Friday:
    Saturday:
    Sunday:
    `);
} 

displayDays (){
    let dayString = '';
    for (let i = 0; i < this.days.length; i++){
    dayString += i + ' ) ' + this.days[i].name + '\n';
}
alert(dayString);
}

createDay(){
    let name = prompt ('What day will be added today?');
    this.days.push(new Day(name));
    this.selectedDay= this.days[this.days.length-1];
    this.addChore();
    alert('New chore has been added for the day!');
}

viewDay(){
    let index= prompt ('What day would you like to view?');
    if( index >-1 && index < this.days.length){
        this.selectedDay = this.days[index];

        let description = 'Day' + this.selectedDay.name + '\n';

        for( let i = 0; this.selectedDay.chores.length; i++) {
            description += i + ' ) ' + this.selectedDay.chores[i].name + '\n';
        }

        let selection = showDayMenuOptions(description);
        switch(selection){
            case '1':
                this.addChore();
                break;
            case '2':
                this.deleteChore(); 
        }
    }
}
deleteDay(){
    let index = prompt ('What day would you like to remove?');
    if ( index >-1 && index < this.days.length){
        this.days.splice(index,1);
        alert('The date has been removed.');
    }
}
addChore(){
    let name = prompt('What chores would you like to do for the day?');
    this.selectedDay.chores.push(new Chore(name));
}

deleteChore(){
    let index = prompt ('What chore do you wish to delete?');
    if( index >-1 && index < this.selectedDay.chores.length){
        this.selectedDay.chores.splice(index,1);
    }
}
}

let menu = new Menu();
menu.start();