/* 
 * Activity Items config.This is an array of objects that creates and activity slider 
 * Config Options:
 *      name - Name of activity, lowercase, single word, not displayed to user
 *      header - Title of the activity. 
 *      tip - Activity tip to help in selecting correct value
 *      clsIcon - CSS class name of the icon to use with the activity.
 *      modelValue - The Model value eg slider, changing this value will change the default value
 *      sliderMax - Max value for the slider
 *      hexColor - the color to be associated with the activity
 * @author Paul Schweppe
 * 
 */

questionnaireTool1 = {
    'study-experience' : {
            'label' : 'Study Experience'
            ,'description' : 'Answer the questions below about your previous study experience, then click CONTINUE to receive personal feedback…'
            ,'quotes' : [{
                    'studentImage' : '../assets/images/student1.jpg'
                    ,'studentQuote' : "I found completing a MOOC helped to give me a better idea of what further study might involve"
                    ,'studentName' : "Rachel"
                }
            ]
            ,'questions' :[{
                'question':'Do you have previous successful experience of studying through a higher education institution?'
                ,'response' : ''
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'Your previous experience should be a great help. Having an idea of what further study involves and how to go about it should help to get you off to a good start. '
                  ,'weight': 5
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'Don\'t be put off by your lack of experience at this level but try to talk to other students who have previously undertaken part-time study. They can often give you some useful tips based on their experience'
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Have you had any recent experience of flexible learning, including undertaking a free online short course?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'You should have a reasonable sense of what online and flexible learning involves. Having previous experience of learning through new technologies should be an advantage.'
                  ,'weight': 5
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'You might like to consider registering for a free online short course or MOOC in an area of interest as this may give you a better sense of what it’s like to be a flexible learner. '
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Are you familiar with the requirements of your intended programme of study?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It\'s good that you\'ve already sought information about your intended programme of study. Knowing the requirements is really important before you make any commitment. '
                  ,'weight': 5
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'Make sure you talk with people who can provide more information about the specific programme of study. It\'s really important to understand the course requirements and your ability to meet them before you commit to further study. '
                  ,'weight': 0
                }]
            }]
    }
    ,'work-and-family' : {
            'label' : 'Work & Family'
            ,'description' : 'Answer the questions below about your work and family circumstances, then click CONTINUE to receive your personal feedback…'
            ,'quotes' : [{
                    'studentImage' : '../assets/images/student1.jpg'
                    ,'studentQuote' : "Having the support of my partner and family was essential to my ability to take on further study"
                    ,'studentName' : "Rachel"
                },{
                   'studentImage' : '../assets/images/student2.jpg'
                   ,'studentQuote' : "There were times when I needed a bit of head space away from work and household chores to concentrate on my study" 
                   ,'studentName' : "Michael"
                }
            ]
            ,'questions' :[{
                    'question':'Do you have any dependent children or family members?'
                    ,'response' : ''
                    ,selected : ''
                    ,options: [{
                      'label': 'YES'
                      ,'value': 'yes'
                      ,'answer': 'You will probably need to negotiate with your family some of your household commitments in order to create sufficient time and space for further study.'
                      ,'weight': 5
                    },{
                      'label': 'NO'
                      ,'value': 'no'
                      ,'answer': 'You appear to be well placed given your family circumstances to undertake further study. However, in selecting your course do keep in mind that your situation may change over the period of your study.'
                      ,'weight': 0
                    }]
                }
            ,{
                'question':'Is your partner, family and/or friends supportive of your desire to undertake further study?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                        'label': 'YES'
                        ,'value': 'yes'
                        ,'answer': 'Having the support of your partner, family and friends should be a great help, especially during busy periods. It’s important that they understand why you’re thinking about undertaking further study and how it will assist you in the future.'
                        ,'weight': 5
                      },{
                        'label': 'UNSURE'
                        ,'value': 'unsure'
                        ,'answer': 'You probably need to talk with your close family and friends. It’s really important that they understand why you’re thinking about undertaking further study and how it will assist you in the future. They can be a big help during busy periods, especially when major assignments are due.'
                        ,'weight': 3
                      },{
                        'label': 'NO'
                        ,'value': 'no'
                        ,'answer': 'It sounds like you may need to have a talk with those around you as having the support of your partner, family and close friends can be a big help. It’s really important that they understand why you’re thinking about undertaking further study, what it’s likely to involve and how it will assist you in the future.'
                        ,'weight': 0
                      }]
                  }
                ,{
                    'question':'How would you describe your current employment status?'
                    ,'response' : '' 
                    ,selected : ''
                    ,options: [{
                      'label': 'Full-time'
                      ,'value': 'Full-time'
                      ,'answer': 'You\'ll need to be realistic about the amount of study you can undertake each year whilst juggling other commitments, especially given that you’re working full-time. Make sure you talk with your employer and they support your intention to pursue further study.'
                      ,'weight': 4
                    },{
                      'label': 'Part-time'
                      ,'value': 'Part-time'
                      ,'answer': 'You\'ll need to think carefully about how much study you can undertake each year whilst working part-time. Remember your work circumstances may change in the future. It’s a good idea to ensure that your employer is supportive of your plan to undertake further study.'
                      ,'weight': 3
                    },{
                      'label': 'Not in Paid Work'
                      ,'value': 'not-in-paid-work'
                      ,'answer': 'You will need to allocate block times for study each week and treat this like your work. You may also need to review the amount of time you currently spend on community and volunteer work. They key thing is to develop a regular study routine.'
                      ,'weight': 2
                    },{
                      'label': 'Full-time Caregiver'
                      ,'value': 'full-time-caregiver'
                      ,'answer': 'You\'ll need to find space for your study, which works around your primary caregiver role. Many people in your situation study whilst children attend school or during the evenings instead of watching television. They key thing is to develop a regular study routine that fits around your existing commitments.'
                      ,'weight': 1
                    }]
                }]
    }
    ,'study-intentions' : {
            'label' : 'Study Intentions'
            ,'description' : 'Answer the questions below about your study intentions, then click CONTINUE to receive your personal feedback'
            ,'quotes' : [{
                    'studentImage' : '../assets/images/student1.jpg'
                    ,'studentQuote' : "Having a clear goal in mind is what got me through my study especially when things got difficult"
                    ,'studentName' : "Rachel"
                },{
                   'studentImage' : '../assets/images/student2.jpg'
                   ,'studentQuote' : "It was really helpful calculating just how much free time I had available before committing to further study" 
                   ,'studentName' : "Michael"
                }
            ]
            ,'questions' :[{
                'question':'Do you have a clear goal in mind that study will help you to achieve?'
                ,'response' : ''
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It\'s great that you have a clear goal in mind as this helps to keep you motivated and on track. Make sure your intended programme of study will help you achieve this goal.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'Sometimes your goal will emerge or even change during your study but it helps to have an idea of what you can achieve and where you can go as a result of further study. You might like to investigate the career options associated with your intended programme of study.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'It can be difficult to keep focused and remain motivated without a clear goal in mind. Sometimes your goal will emerge or even change during your study but before you make a commitment you should investigate the career options associated with any intended programme of study.'
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Are you sure that you have enough ‘free time’ in your life to commit to further studies?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It\'s good that you have already been thinking about how to fit study around your busy life. Make sure you leave time for breaks you’re able to allocate extra time during busy periods, such as when assignments fall due.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'Make sure that you don\'t overcommit yourself and that you have sufficient time for further study on top of a busy life. Take a few minutes to calculate the amount of free time you have in a typical week as this will help you estimate the amount of part-time study you might be able to undertake.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'It\'s very important to ensure that you have sufficient time for further study on top of a busy life. You mustn’t overcommit yourself. Take a few minutes to calculate the amount of \'free time\' you have in a typical week as this will help you estimate the amount of part-time study you might be able to undertake. '
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Do you have a quiet, dedicated place to study where you will not be interrupted?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It sounds like you have a suitable environment to undertake your study. It’s really important to have a quiet space away from other distractions where you can dedicate quality time to the demands of further study.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'You may need to explore options in terms of finding a suitable study environment away from other distractions. It’s really important to have a dedicated place where you can do your study. Some people wait until other people have gone to bed, use a spare bedroom or even study on the weekend at the local library. '
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'It may be challenging without a dedicated study space away from other distractions. It’s really important to have a quiet area where you can do your study. You may be able to wait until other people have gone to bed, use a spare bedroom or even study on the weekend at the local library.'
                  ,'weight': 0
                }]
            }]
    }
    ,'study-skills' : {
            'label' : 'Study Skills'
            ,'description' : 'Answer the questions below about your study skills, then click CONTINUE to receive your personal feedback...'
            ,'quotes' : [{
                    'studentImage' : '../assets/images/student1.jpg'
                    ,'studentQuote' : "I was use to reading lots of books which I believe prepared me well for the demands of further study"
                    ,'studentName' : "Rachel"
                },{
                   'studentImage' : '../assets/images/student2.jpg'
                   ,'studentQuote' : "Learning how to successfully navigate myself around the library was one of the most valuable skills I learnt" 
                   ,'studentName' : "Michael"
                }
            ]
            ,'questions' :[{
                'question':'Do you consider yourself to be a capable reader?'
                ,'response' : ''
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'You should be well placed to cope with the demands further study is likely to place on your reading ability. Most study involves quite a lot of reading which often includes academic texts with specialised language. Don’t be put off by this as every field of study requires you to learn the language of the discipline.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'Most study involves quite a lot of reading. It’s quite normal for students returning to study to be a little anxious about having to read academic texts with specialised language relevant to the field of study. Don’t be afraid to ask questions when you don’t understand the work and it will help if you set aside a regular time each day to work your way through the readings.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'The reality is that most study involves quite a lot of reading. Some of the readings are likely to include specialised language relevant to the field of study. You may need to allocate yourself more time to complete the readings and seek the assistance of a tutor. Don’t be put off as most institutions have additional support available and you should ask about this before you make any commitment. The main thing is don\'t be afraid to ask for help. '
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Do you feel confident of your ability to learn how to structure and write an academic assignment?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'While academic writing differs from other forms of writing you appear to be confident of your ability to develop the necessary skills. You get better at writing with practice and it sounds like you the necessary skills in this area to embark on further study.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'You\'re not expected to write perfect assignments in your first year. Academic writing differs from other forms of writing and most courses are designed to help you learn how to structure and write your assignments. Also there are websites and other resources available to help you learn the art of academic writing. Make sure you use a computer so that you can spellcheck your work and you may be able to seek feedback from your family and friends. '
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'Writing academic assignments is a real skill. Don\'t be put as everyone had to start somewhere and you should be able to seek additional assistance from your tutors and dedicated learning support staff. Remember most courses are designed to help you learn how to structure and write your assignments. Also there are websites and other resources available to help you learn the art of academic writing. Make sure you use a computer so that you can spellcheck your work and you may be able to seek feedback from your family and friends.'
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Do you feel confident of your ability to use a calculator and perform basic mathematical equations? '
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It appears you have a good grasp of basic maths. Some subjects require higher levels of mathematical knowledge than others and you may be well suited to pursuing further study in one of these areas. '
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'While not every course requires a high-level of mathematical knowledge most subjects require you to understand the basics. It may be useful to complete a free online course in basic mathematics before you make a commitment to further study. Also make sure you understand what level of maths is expected in your intended area of study.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'The reality is that most subjects require at least a basic level of mathematic knowledge. You may need to employ a tutor or complete a free online course in mathematics before you make a commitment to further study. If mathematics is not a strength, then you would be wise to steer away from subjects that require a high-level of knowledge. Make sure you understand what level of maths is expected in your intended area of study.'
                  ,'weight': 0
                }]
            },{
                'question':'Do you know how to use a library to search for specific information?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'The ability to use a library is crucial to successful study and this does not appear to be a barrier. Most libraries offer training courses on their use and even experienced students usually benefit from taking a refresher course. It pays to familiarise yourself with the library website as soon as you commit to further study.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'The ability to use a library is crucial to successful study. You will need to complete one of the training courses usually available through the library early in your study. Some of these courses and resources are likely to be available online. It also pays to familiarise yourself with the library website as soon as you commit to further study.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'The reality is that the ability to use a library is crucial to successful study. You will need to complete one of the training courses usually available through the library before you commence your study. Some of these courses and resources are likely to be available online but you may benefit from a personal tutorial. Don’t be afraid to ask the library for help.'
                  ,'weight': 0
                }]
            }]
    },
    'computer-skills' : {
            'label' : 'Computer Skills'
            ,'description' : 'Answer the questions below about your computer skills, then click CONTINUE to receive your personal feedback...'
            ,'quotes' : [{
                    'studentImage' : '../assets/images/student1.jpg'
                    ,'studentQuote' : "I found having access to a laptop computer was essential for my study"
                    ,'studentName' : "Rachel"
                },{
                   'studentImage' : '../assets/images/student2.jpg'
                   ,'studentQuote' : "Access to the Internet was crucial in order to successfully complete the course" 
                   ,'studentName' : "Michael"
                }
            ]
            ,'questions' :[{
                'question':'Are you pretty good at using a computer?'
                ,'response' : ''
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'Your computer skills shouldn’t hold you back.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'You may need someone to give you a quick tutorial on how to use your computer or complete some of training courses that are available online. So don’t be put off! To begin with most of your work is likely to involve a word processor for writing and a web browser for accessing the Internet.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'You will need to ask someone to teach you more about using a computer before you begin any further study. The ability to use a computer is essential. But you don’t need to become a computer whizz! To begin with most of your study will simply involve the use of a word processor for writing and a web browser for accessing the Internet.'
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Do you have a computer with a good internet connection?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It’s great that you have access to a computer and a good internet connection as both are crucial to successfully completing further study.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'You may need to look at borrowing or purchasing your own computer and upgrade your internet connection as both are crucial to successfully completing further study.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'You will need to look at borrowing or purchasing your own computer and upgrade your internet connection as both are crucial to successfully completing further study.'
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Do you know how to know how to use the Internet to search for specific information?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'Your ability to use the Internet doesn’t appear to be a barrier. Searching the internet and regularly accessing the Virtual Learning Environment (VLE) for your course are likely to be almost daily activities during your programme of study.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'If you can search for news items on Google and manage to complete this online quiz then you should be fine in terms of your our ability to use the Internet. Searching the internet and regularly accessing the Virtual Learning Environment (VLE) for your course are likely to be almost daily activities during your programme of study.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'You will need to develop your internet skills before making any commitment to further study. Completing this online quiz is a good start. Searching the internet and regularly accessing the Virtual Learning Environment (VLE) for your course are likely to be almost daily activities during your programme of study.'
                  ,'weight': 0
                }]
            },{
                'question':'Do you know someone who can help you if you have computer problems?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It’s good to know you’re OK if you have any unexpected computer glitches.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'It pays to plan ahead when it comes to computer problems as they usually happen at the worst possible time. There may be a family member or close friend you can call for assistance.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'Computer problems usually happen at the worst possible time. You really need a backup plan as you can’t expect immediate help from the institution you are studying through. Try to identify a family member or close friend you could call for assistance in cases of urgency.'
                  ,'weight': 0
                }]
            }]
    }
    ,'work-habits' : {
            'label' : 'Work Habits'
            ,'description' : 'Answer the questions below about your work habits, then click CONTINUE to receive your personal feedback.'
            ,'quotes' : [{
                    'studentImage' : '../assets/images/student1.jpg'
                    ,'studentQuote' : "The key to my success was developing a study plan and working to assignment deadlines"
                    ,'studentName' : "Rachel"
                },{
                   'studentImage' : '../assets/images/student2.jpg'
                   ,'studentQuote' : "You to rise to the challenge of learning new things and sticking with it even the work gets really difficult" 
                   ,'studentName' : "Michael"
                }
            ]
            ,'questions' :[{
                'question':'Are you good at working to deadlines and meeting them?'
                ,'response' : ''
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'A track record of meeting deadlines and carefully planning your work around assignment due dates will help when it comes to pursuing further study. It’s a good idea to mark the assignment due dates in your calendar as early as possible.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'Successful study requires you to carefully plan your work and to meet assignment deadlines. It’s a good idea to mark the assignment due dates in your calendar as early as possible and then make steady progress each week to ensure that you don’t get behind.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'You may need to be more disciplined in the way you approach further study. Successful study requires you to carefully plan your work and to meet assignment deadlines. It’s a good idea to mark the assignment due dates in your calendar as early as possible and then make steady progress each week to ensure that you don’t get behind.'
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Do you persevere on tasks even when the work gets difficult?'
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'Your willingness to persevere at tasks should pay dividends when it comes to further study. The work can be difficult at times and successful students stick at it regardless of the challenges.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'Further study will place more demands on your time and should help you to develop your ability to persevere. Successful students persevere at tasks even when the work gets difficult. Sometimes it’s helpful to take a break and then come back to more challenging tasks when you have renewed energy. Just don’t leave things for too long!'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'To be successful you will need to develop your perseverance skills. Don’t think study will be easy and you will need to stick at tasks even when the work gets difficult. Sometimes it’s helpful to take a break and then come back to more challenging tasks when you have renewed energy. Just don’t leave things for too long!'
                  ,'weight': 0
                }]
            }
            ,{
                'question':'Finally, do you enjoy learning where you need to master new skills and difficult ideas? '
                ,'response' : '' 
                ,selected : ''
                ,options: [{
                  'label': 'YES'
                  ,'value': 'yes'
                  ,'answer': 'It’s good that you enjoy learning and mastering new skills and difficult ideas. A lot of the satisfaction that comes from further study is the reward of being a learner.'
                  ,'weight': 5
                },{
                  'label': 'UNSURE'
                  ,'value': 'unsure'
                  ,'answer': 'It’s important to understand a lot of the satisfaction that comes from further study is the reward of being a learner. Your motivation to continue study depends to a large extent on the enjoyment you get from mastering new skills and difficult ideas.'
                  ,'weight': 3
                },{
                  'label': 'NO'
                  ,'value': 'no'
                  ,'answer': 'Further study will be particularly challenging if you don’t enjoy the experience of being a learner. A large part of the satisfaction that comes from study is your ability to master new skills and difficult ideas. Having the right attitude to learning is just as important as your ability to undertake further study.'
                  ,'weight': 0
                }]
            }]
    }
};
