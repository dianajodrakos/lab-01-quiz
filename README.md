## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

quiz app plan:
- make HTML shell
- build JS quiz
- figure out what to actually put in the HTML
- style, baby, style

HTML:
- header - fixed
- content - info for quiz - flex container
- footer - visual anchor

JS: 
- objects:  (validation: console.log object) 
    1. button: start quiz / id + event listener
    1. results: hidden div: id + event listener / change header styling to expand for hidden div

- state: increase score w/ correct answers (validation: test function)

- events: 
    1. button click (validation: console.log string)
        1. launch quiz start alert
        1. launch quiz start confirm
            a. if cancel, return to main page
            b. if start, move forward
        1. launch name prompts
            1. store inputs in variables (validation: console.log input var)
        1. launch quiz prompts
            1. store inputs in variables (validation: console.log input var)
            1. eval input 
                a. if correct, add 1 point to score (validation: console.log score var)
            1. repeat for all questions
        1. output results to hidden div
            1. reveal div
            1. change style based on score
            1. show string with message + score
