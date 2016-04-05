/**
 * Data use to calcualate the interpret based on free time. Must start with 
 * the smallest to higher 'greaterThen' value
 * Config Options:
 *      greaterThen - Integer value if free times is greater than or equal to this value and the next option is less than its greaterThen. 
 *      studentImage1 - Student 1 relative url to image
 *      studentQuote1 - Student 1 Quote
 *      studentImage2 - Student 2 relative url to image
 *      studentQuote2 - Student 2 Quote
 *      narratorFeedback - The narrator feedback
 *      
 * @author Paul Schweppe
 */

interpretFeedback = [{
              'greaterThen': 0
              ,'narratorFeedback' : "At this stage you may be better to place your study plans on hold. Explore the resource links on this page and review all of your responses to see where there may be opportunities to enhance your readiness and ability to succeed before taking the next step. Ideally your personal circumstances need to change before you’re in a better position to think about pursuing further study. But don’t give up on the idea and talk to someone at your preferred institution if you want further advice."
            },{
              'greaterThen': 40
              ,'narratorFeedback' : "You have something to think about! In some areas you’re reasonably well placed to take on the challenge of further study but you could do more to enhance your readiness. Explore the resource links on this page and review all of your responses to see where you could enhance your ability to succeed before taking the next step. It may even be better to defer your study plans until your personal circumstances change. But don’t give up on the idea and talk to someone at your preferred institution if you want further advice."
            },{
              'greaterThen': 70
              ,'narratorFeedback' : "<span class='heading-text-big'>Congratulations!</span> You appear to be well placed to take on the challenge of further study. You may like to explore the resource links on this page and review all of your responses to see if there are any opportunities to enhance your readiness and ability to succeed before taking the next step of registering for a specific programme of study. Best wishes for the future."
            }
            
];


