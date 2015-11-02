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

activityItems = [{
            'name' : 'work'
            ,'header' : 'Work'
            ,'tip' : 'Include your commuting time to work along with any community or volunteer work you undertake. '
            ,'clsIcon' : 'fa-briefcase'
            ,'modelValue' : 0
            ,'modelDaysValue' : 0
            ,'sliderMax' : 168
            ,'hexColor' : '084988'
        },{
            'name' : 'family'
            ,'header' : 'Family'
            ,'tip' : 'Include time you spend with your partner, looking after your children and other members of your extended family. Include any commuting time'
            ,'clsIcon' : 'fa-users'
            ,'modelValue' : 0
            ,'modelDaysValue' : 0
            ,'sliderMax' : 168
            ,'hexColor' : '56a0e2'
        },{
            'name' : 'household'
            ,'header' : 'Household'
            ,'tip' : 'Include time you spend preparing meals, cleaning, washing, gardening, grocery shopping and other chores in maintaining your household.'
            ,'clsIcon' : 'fa-home'
            ,'modelValue' : 0
            ,'modelDaysValue' : 0
            ,'sliderMax' : 168
            ,'hexColor' : '4580b6'
        },{
            'name' : 'indoor'
            ,'header' : 'Hobbies'
            ,'tip' : 'Include time you spend at home reading, listening to music, watching television, browsing the Internet, playing games, craft making and other hobbies.'
            ,'clsIcon' : 'fa-futbol-o'
            ,'modelValue' : 0
            ,'modelDaysValue' : 0
            ,'sliderMax' : 168
            ,'hexColor' : '3889d4'
        },{
            'name' : 'outdoor'
            ,'header' : 'Leisure'
            ,'tip' : 'Include time you spend away from home keeping fit, exercising pets, shopping, socialising, visiting friends, travelling, going to shows and attending sports events.'
            ,'clsIcon' : 'fa-desktop'
            ,'modelValue' : 0
            ,'modelDaysValue' : 0
            ,'sliderMax' : 168
            ,'hexColor' : '296ba9'
        },{
            'name' : 'sleep'
            ,'header' : 'Sleep'
            ,'tip' : 'Include time you also spend having naps and longer sleeps over the weekend.'
            ,'clsIcon' : 'fa-bed'
            ,'modelValue' : 0
            ,'modelDaysValue' : 0
            ,'sliderMax' : 168
            ,'hexColor' : '7eb9ed'
        }];
