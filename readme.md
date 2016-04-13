# Student Success Toolbox

The aim of the Student Success Toolbox is to support transitions from thinking about study to the first weeks to increase retention and completion rates particularly for flexible learners (undergraduate adult, part-time and online/distance students) as this is a significant problem in the Irish Higher Education sector.

The project plans to achieve this aim by providing flexible learners with a suite of digital tools. These digital tools will assist flexible learners by helping them assess their own readiness, provide feedback and lay the foundation for successful programme completion. The digital tools will also assist teachers and institutions in providing personalised and strategically targeted feedback to potentially at risk students for learning in the digital world.

The Student Success Toolbox  project is supported by the National Forum for Teaching and Learning Building Digital Capacity fund. It is a collaborative project involving Dublin City University, Sligo Institute of Technology, Maynooth University and Dundalk Institute of Technology.

### What is Student Success Toolbox?
The Student Success Toolbox is a suite of Html5 Widgets build using Angular and Bootstap javascript libraries. 
All applications are built as Single Page Applications and are designed to be stand alone tools.

You can check them out at [http://studentsuccess.ie/the-toolbox/](http://studentsuccess.ie/the-toolbox/)

For more information on angular please refer to...
https://angularjs.org/ and subsequently..
https://docs.angularjs.org/api/ng/directive/ngRepeat etc...

### Prerequisites

IDE with html 5 support is advised, I’d suggest Netbeans [8 or above]
https://nodejs.org
http://rubyinstaller.org/

* Node / npm is used as the package management /build tool for the projects, references to the tools included can bve found in the "package.json" file in the project root. relevant project details are stored in the file and relevant dependencies for both frontend and backend [dev] are referenced.

* Grunt is used to automate the build tasks, including sass compilation, compression etc... 

* Sass is the preferred scripting language for css and the complier for it is installed as part of ruby above.

* The above tools, and others as required, should be referenced within the IDE under the Tools > Options > HTML5 setting tab


### Installation
Download files and place files in a webserver. Open a command line and browse to files.
To install run:
```
    $ npm install (in package directory)
```
Do compile code into dist folder run
```
    $ grunt
```

If you want to just compile the Sass files run
```
    $ grunt sass
```

If you want to just compile the javascript files run
```
    $ grunt js
```

See GruntFile for all tasks


### Tool Folder Structure

All tools share the same CSS fonts and images. These can be found in the assets folder.

* **assets**: Tools CSS Fonts and media assets. All the tools share this folder
* **dist**: This is the distribution folder. This folder is generated after you run grunt and should be the only folder deployed to a live server
* **shared**: Contains shared Angular controller and directives used across all tools.
* **example**: A single page showing the different elements of the theme
* **tool1**: Code for the "Am I Ready for Study" Tool
* **tool2**: Code for the "Do I Have Enough Time" Tool
* **tool3**: Code for the "Who Can I Ask" Tool
* **tool4**: Code for the "My Computer Skills" Tool
* **tool5**: Code for the "My First Assignment" Tool
* **tool8**: Code for the "Online Orientation" Tool

##License

Student Success Toolbox is free software distributed under the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode).