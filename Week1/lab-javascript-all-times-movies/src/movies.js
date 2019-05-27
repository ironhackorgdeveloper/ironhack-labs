
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
  let newArr = arr.map(a => Object.assign({}, a));
  
  newArr.map((e) => {

    if( e['duration'].indexOf("h") !== -1 && e['duration'].indexOf("m")!== -1){
      let r = e['duration'].split(" ");
      let hours = r[0].split('h');
      let minutes = r[1].split('min');

      newArr['duration'] = parseInt(hours[0])*60 + parseInt(minutes[0]);
      console.log(newArr['duration']);


    }else if (e['duration'].indexOf("h") !== -1){
      let hours = e['duration'].split('h');
      newArr['duration'] = parseInt(hours[0])*60;

    }else{
      let minutes = e['duration'].split('min');
      newArray['duration'] = parseInt(minutes[0]);
    }
  })
  return newArr;
}
//console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
