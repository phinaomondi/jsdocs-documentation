const { add, area } = require('./functions')

/**
 * Documentaion for a string
 * Article Name
 * @type {string}
 */

const articleName = "Javascript Documentation"

/**
 * Documentaion for a Number
 * Article Number
 * @type {number}
 */

 const articleNumber = 24

 /**
 * Documentaion for an array
 * Array
 * @type {Array<number>}
 */

  const stars = [1,2,3,4,5]

/**
 * Documentaion for an Object
 * Object
 * @type {{id: number, name: string, class: string}}
 */

  var student = {
      id: 23,
      name: "Jane Doe",
      class: "Beginner"
  }

/**
* function to  calculate the area of a rectangle
*
* @param {number} length - The length of the rectangle
*
* @param {number} width - The width of the rectangle
*
* @returns {number} The area of the rectangle
*/
function calculateArea(length, width, area){

    area = length * width;

    return area;
}


/**
 * Custome data type defining a programming language
 * @typedef {Object} ProgrammingLanguage
 * @property {number} id - Language id
 * @property {string} name - Language name
 * @property {string} software - Projects it can build
 * @property {number} year - the year it came to life
 */

/**
 * @type {ProgrammingLanguage}
 */

const programmingLanguage = {
    id: 100,
    name: "Javascript",
    software: "Websites",
    year: 1999
}


/**
 * Class to create a user object
 */
class User{
    /**
     * @param {Object} userInfo  Information about a user
     */
    constructor(userInfo){
        /**
         * @property {string} name - User name
         */
        this.name = userInfo.name

        /**
         * @property {string} password - User's password
         */
        this.password = userInfo.password

        /**
         * @property {string} email - User's email address
         */
        this.email = userInfo.email

        /**
         * @property {number} age - User's age
         */
        this.age = userInfo.age
    }

    /**
     * @property {Function} sayHello - Greet the group stating user's name
     * @returns void
     */
    sayHello(){
        console.log(`Hello section my name is ${this.name}`)
    }
}