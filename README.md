# Sprint 7 project
  In this sprint I am working with a local project testing different requests such as GET, POST, PUT, and DELETE. These tests repositories are cloned to my computer and sent to Github in order for my collegues to have access to the project. The software I am using is GitBash, Visual Studio Code, Postman, and the terminal built into my Windows PC. GitBash is a command-line shell for enabling git with the command-line in the system. Visual Studio Code is a code editor to help debug, run tasks, and provide tools for development. Postman was used for building and using APIs. The terminal on my Windows PC was used for typing commands, execute programs, opening documents, and manipulating files.
  
  Starting the project I used GitBash specifically to take the https URL from Github in order to clone the repository "hm07-qa-us", which was provided via Tripleten. The way I successfully completed this task was by copying my URL for the "hm07-qa-us" repository on Github, and pasting it next to the command "git clone". The command was $ git clone https://github.com/mallen356/hm07-qa-us.git. In my next task I had to insall "npm install" using the terminal on my Windows PC. In order to open the correct file, I had to go to my "hm07-qa-us" file in my folder created through Github and Tripleten. To do so I typed in "cmd" in the file search bar to open the terminal through my pc. Next I wrote the "npm install" command and let it run in the terminal. After that was installed properly I was then ready to continue onto the next task. In Tripleten, the project description provided a server to download a personal URL. In order to do this I had to run the server and copy the URL, then pasting it in the config.js file. This config.js file is connected to the request code templates in the "tests" file of my project. 
  
  Now that everything is set up properly I am now ready to run commands. Using the server URL, I go to my Google Chrome browser and paste it in the address bar ending with /docs/. An example of this is https://b74fdfb2-6376-4e3b-a284-c0dc7603637c.serverhub.tripleten-services.com/docs/. This URL is how I was able to access the API endpoints for the Urban Grocers app. I take the individual requests such as GET, and use Postman to test the APIs for each request. After successfully receiving the correct status, such as "200 ok" I am now ready to use Visual Studio Code. In VS Code I take the premade template from my tests file and manipulate the code in order to run the tests.

  Once I manipulate the code regarding my specific requests such as GET, or POST, I am now ready to run the test. I run the test using my termianl on my Windows PC. I had everything I needed installed to it to now run the tests regarding my indiviaul requests. I am checking to see if the code I wrote either passes or fails. To check for a pass/fail I need to use a specific command, for example "npx jest tests/getHandlers.test.js". This specific command is used to test the GET request from the Postman API that successfully ran a successful status code. After that command is written, I then press enter to run it and wait for the results.

  

