// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesArr) => {
  let directorsArr = moviesArr.map((eachMovie) => {
    return eachMovie.director;
  });
  return directorsArr;
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// filter directors spielberg
const howManyMovies = (moviesArr) => {
  let filtered = moviesArr.filter((movies) => {
    return (
      movies.director == "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });
  return filtered.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (moviesArr) => {
  if (moviesArr.length == 0) {
    return 0;
  }
  let sumRate = moviesArr.reduce((sum, elem) => {
    if ("rate" in elem) {
      return sum + elem.rate;
    }
    return sum;
  }, 0);
  let average = sumRate / moviesArr.length;
  return +average.toFixed(2);
};
// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (moviesArr) => {
  let dramaMovies = moviesArr.filter((film) => {
    return film.genre.includes("Drama");
  });

  let sumRate = dramaMovies.reduce((sum, elem) => {
    if ("rate" in elem) {
      return sum + elem.rate;
    }
    return sum;
  }, 0);
  let dramaAvrg = sumRate / dramaMovies.length;
  return +dramaAvrg.toFixed(2);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let cloneArray = JSON.parse(JSON.stringify(movies))
let orderByYear = (moviesArr) => {
    let sortedArr = moviesArr.sort((elem1,elem2)=>{
        if(elem1.year>elem2.year) {
            return 1
        }
        else if(elem1.year < elem2.year) {
            return -1
        }
        else {
            if (elem1.title > elem2.title ) {
                return 1
             }
             else if (elem1.title < elem2.title ) {
                return -1
              }
             else {
               return 0
             }
        }
    }) 
    return sortedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let cloneArray1 = JSON.parse(JSON.stringify(movies))
let orderAlphabetically = (moviesArr) => {
    let titleSorted = moviesArr.sort((elem1 , elem2) => {
        if (elem1.title > elem2.title ) {
            return 1
         }
         else if (elem1.title < elem2.title ) {
            return -1
          }
         else {
           return 0
         }
         return titleSorted
    }) 
    


    }
    console.log(orderAlphabetically(cloneArray1))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
