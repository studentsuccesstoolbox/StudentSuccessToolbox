/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

tool8Questionnaire = {
    'your_online_orientation': {
        'label': 'Your Tools'
        ,'id': 'your-online-orientation'
        ,'quotes': [
        ]
        , 'questions': [{
                'id':'vle',
                'toolCategory': 'Location',
                'question': 'Will you build your online orientation in your institutional Virtual Learning Environment (VLE), e.g. Moodle or Blackboard?',
                'questionSmall': 'Virtual Learning Environment (VLE)'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'id':'website',
                'toolCategory': '',
                'question': 'Will you build your online orientation within your institutional website?',
                'questionSmall': 'Website'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
            , {
                'id':'video',
                'toolCategory': 'Technology',
                'question': 'Do you have access to equipment and software that you can use to produce video content for your online orientation?',
                'questionSmall': 'Video'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
            , {
                'id':'audio',
                'toolCategory': '',
                'question': 'Do you have access to equipment and software that you can use to produce audio content for your online orientation?',
                'questionSmall': 'Audio'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
            , {
                'id':'elearning',
                'toolCategory': '',
                'question': 'Do you have access to e-learning platform software, e.g. Articulate, that you can use to produce content for your online orientation?',
                'questionSmall': 'E-learning platform'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
            , {
                'id':'presentation',
                'toolCategory': '',
                'question': 'Do you have access to presentation tools, e.g. Powerpoint or Prezi, that you can use to produce content for your online orientation?',
                'questionSmall': 'Presentation Tools'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
            , {
                'id':'oer',
                'toolCategory': 'Existing Resources',
                'question': 'Can you locate open educational resources that you can use in your online orientation?',
                'questionSmall': 'Open Educational Resources'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
            , {
                'id':'eir',
                'toolCategory': '',
                'question': 'Are there existing institutional resources that you can use in you online orientation?',
                'questionSmall': 'Existing Institutional Resources'
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
        ]
    },
    'online_orientation_anxiety': {
        'label': 'Anxiety'
        , 'id': 'online-orientation-anxiety'
        , 'quotes': [
        ]
        , 'questions': [{
                'toolCategory': '',
                'question': 'Video/Audio – From institution/Programme Team',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Video/Audio – From graduate/current student',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From institution/Programme Team',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From graduate/current student',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Classroom',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Learning Environment (Discussion Forums)',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
        ]
        ,userOptions: []
    },
    'online_orientation_set_expectations': {
        'label': 'Set Expectations'
        , 'id': 'online-orientation-set-expectations'
        , 'quotes': [
        ]
        , 'questions': [{
                'toolCategory': '',
                'question': 'Video/Audio – From institution/Programme Team',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Video/Audio – From graduate/current student',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From institution/Programme Team',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From graduate/current student',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Open Educational Resources',
                'toolid':['oer'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Classroom',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Learning Environment (Discussion Forums)',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
        ]
        ,userOptions: []
    },
    'online_orientation_positiverolemodel': {
        'label': 'Positive Role Model'
        , 'id': 'online-orientation-positiverolemodel'
        , 'quotes': [
        ]
        , 'questions': [{
                'toolCategory': '',
                'question': 'Video/Audio – From institution/Programme Team',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Video/Audio – From graduate/current student',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From institution/Programme Team',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From graduate/current student',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Website – From current students',
                'toolid':['website'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Classroom',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Learning Environment (Discussion Forums)',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
        ]
        ,userOptions: []
    },
    'online_orientation_socialising': {
        'label': 'Socialising'
        , 'id': 'online-orientation-socialising'
        , 'quotes': [
        ]
        , 'questions': [{
                'toolCategory': '',
                'question': 'Video/Audio – From institution/Programme Team',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From institution/Programme Team',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Social Media',
                'toolid':['website'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Classroom',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Learning Environment (Discussion Forums)',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
        ]
        ,userOptions: []
    },
    'online_orientation_campustour': {
        'label': 'Campus Tour'
        , 'id': 'online-orientation-campustour'
        , 'quotes': [
        ]
        , 'questions': [{
                'toolCategory': '',
                'question': 'Video',
                'questionSmall': '',
                'toolid':['video'],
                'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Audio',
                'questionSmall': '',
                'toolid':['audio'],
                'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Interactive Map',
                'questionSmall': '',
                'toolid':['presentation'],
                'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Classroom',
                'questionSmall': '',
                'toolid':['elearning'],
                'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Learning Environment (Discussion Forums)',
                'questionSmall': '',
                'toolid':['elearning'],
                'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
        ]
        ,userOptions: []
    },
    'online_orientation_studyskills': {
        'label': 'Study Skills'
        , 'id': 'online-orientation-studyskills'
        , 'quotes': [
        ]
        , 'questions': [{
                'toolCategory': '',
                'question': 'Video/Audio – Existing Institutional Resources and/or Open Educational Resources',
                'questionSmall': '',
                'toolid':['video','audio']
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Video/Audio – From graduate/current student',
                'toolid':['video','audio'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Text based communication – From institution/Programme Team',
                'toolid':['presentation'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Open Educational Resource',
                'toolid':['oer'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Open Educational Resource/Social Media',
                'toolid':['oer'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Classroom',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            },
            {
                'toolCategory': '',
                'question': 'Online Activity – Virtual Learning Environment (Discussion Forums)',
                'toolid':['elearning'],
                'questionSmall': ''
                , 'response': ''
                , selected: ''
                , options: [{
                        'label': 'YES'
                        , 'value': 'yes'
                        , 'answer': ''
                        , 'weight': 1
                    }, {
                        'label': 'NO'
                        , 'value': 'no'
                        , 'answer': ''
                        , 'weight': 0
                    }]
            }
        ]
        ,userOptions: []
    }
};