// export async function getTrivia() {

//     let question;
// /* API RESPONSE EXAMPLE
// {response_code: 0, results: Array(1)}
// response_code: 0
// results: Array(1)
// 0:
// category: "History"
// correct_answer: "1983"
// difficulty: "medium"
// incorrect_answers: (3) ["1934", "1984", "1822"]
// question: "What year did Skoal, a smokeless Tobacco company, release their first line of Pouches, known as &quot;Skoal Bandits&quot;?"
// type: "multiple"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object */

//     const response = await fetch('https://opentdb.com/api.php?amount=1')
//   .then((res) => res = res.json())        
//   .then(data => {question = data.results[0].question
//     return question;
//   console.log(question)})
 
// }



export async function getTrivia() {
    const response = await fetch('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple');
    const trivia = await response.json();
    return trivia.results[0];
  }


