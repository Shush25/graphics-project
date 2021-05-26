const team_members = [
  {
    id: 0,
    name: "Shushant Kumar Singh",
    Job: "React Developer, Weapon & Powerup, Sound Design",
    email: "mailto:shushantkumar.singh2019@vitstudent.ac.in",
    github: "https://github.com/Shush25",
    linkdin: "https://www.linkedin.com/in/shushant-kumar-singh-bb016b1b6/",
    insta: "",
    profile: require("../../assets/Shushant/profile.jpg"),
    imageUrl:
      "https://lh3.googleusercontent.com/-DdxNGQg4hPbEmzbCmR08sUX9cuPu1NPQ1wsXmnWo4mt-yPL-wsP8zVx2S9_xDc_ezYdZpX8RmkYdWmSiJUmOt3ZDjFyLyrF1cduSH14E3LmDal786A5Y6PzUgI7xrn6sv7yv8PWjA",
    description:
      "I am Shushant, currently pursuing my B-Tech in CSE from VIT Chennai. A game enthusiast and procrastinator by nature but a Programmer and workaholic by profession. I have worked and contributed on a wide range of projects ranging from simple projects like snake game to the start-up project like real-time Buss tracking System. I am a full-stack Web-Developer with proficiency in modern frameworks like React and React-native. C/C++ is my strongest programming language followed by JavaScript, Java, Python and C#.",
    contribution: [
      {
        id: 0,
        Mdescription:
          "My role in this project is to develop a <b>Power Up and Weapon System</b> for the Hero (Player) to make the game more <b>diverse</b> by giving the Player freedom to develop their <b>own personal play style</b> while playing the game. With the introduction of <b>weapon points</b> in the game it also provides a new layer to the strategy aspect of the game which in turn makes the game more <b>fun and engaging.</b> I also added the <b>Sound Effects</b> which further enhanced the user experience while playing the game. The <b>Webpage</b> in which you are on right now is also designed by me.",
      },
      {
        id: 1,
        title: "Weapons and PowerUp's",
      },
      {
        id: 3,
        styledDescription: [
          {
            id: 0,
            title: "Basic Weapon 1: Pistol",
            description:
              "It is the 1st basic Weapon with the most basic mecanism out of all. It shoots one bullet at a time which travels in a stright and linear direction.",
            imageUrl: require("../../assets/Shushant/shush1.png"),
          },
          {
            id: 1,
            title: "Basic Weapon 2: Sword",
            description:
              "The 2nd Basic Weapon is our traditional and most reliable weapon of all time sword. When activated an animation of sword cut is played and any enemy witin the hitbox of the sword receives damage. Can damage multiple enemies at once.",
            imageUrl: require("../../assets/Shushant/shush2.PNG"),
          },
          {
            id: 2,
            title: "Power-Up 1: Shotgun",
            description:
              "Shotgun works on the simple concept of shooting multiple bullets at the same time. After activating this powerup the normal gun the Hero has transforms into a shotgun which shoots 3 bullet's at the same time. Which can either be used to annilate any enemy in close range or can be used as a widespread attack.",
            imageUrl: require("../../assets/Shushant/shush3.PNG"),
          },
          {
            id: 3,
            title: "Power-Up 2: Sword Throw",
            description:
              "This Power-up gives Hero the power to throw his sword in the forward direction damaging all the enemies which comes in contact with it. In short it converts the normal sword slash attack to the sword throw attack.",
            imageUrl: require("../../assets/Shushant/shush4.PNG"),
          },
          {
            id: 4,
            title: "Power-Up 3: Machine Gun",
            description:
              "The third power-up is the all-mighty machine gun use this power-up to completely annihilate your enemies. Shoots continues bullets with a very minimal delay.",
            imageUrl: require("../../assets/Shushant/shush5.PNG"),
          },
        ],
      },
      {
        id: 4,
        title: "Balancing Power-Ups",
      },
      {
        id: 5,
        Mdescription:
          "At first glance the power-ups seems too Over powered and game breaking. That's why the concept of Weapon Point was introduced. Activating each of the power-up uses a certain number of weapon point which can only be gained by defeating enemies. Other contraints are also placed to further balance these power-ups <br><br><b>Constraint 1:</b> When a Power-up is active killing enemies dosn't reward any weapon point.<br><b>Constraint 2:</b> Weapon points are capped at 1000 points.",
      },
      {
        id: 6,
        imageUrl: require("../../assets/Shushant/shush6.PNG"),
      },
      {
        id: 7,
        Mdescription:
          "<b>Constraint 3:</b> The Player Cannot activate 2 or more power-up at the same time.",
      },
      {
        id: 8,
        imageUrl: require("../../assets/Shushant/shush7.PNG"),
      },
      {
        id: 9,
        Mdescription:
          "<br><b>Constraint 4:</b> Every Sword attack has a fireDelay of .4sec. and every Bullet attack has a fireDealy of .6sec only exception being Machine Gun. This is done so that the player can't spam his way through the game.",
      },
      {
        id: 10,
        imageUrl: require("../../assets/Shushant/shush8.PNG"),
      },
      {
        id: 11,
        title: "Audio Effects",
      },
      {
        id: 12,
        Mdescription:
          "The backround theme music of the game, basic game sounds like Jump, Shoot, Collision, Sword Slashing, Sword Throwing were added by implementing a very simple and reusable sound script in unity. The sound is made once in the main sound manager script which can then be imported to any other script in the game and a sound effect can be triggered with just 1 line of code.",
      },
      {
        id: 13,
        heading:
          "Initiating sounds in script (All the sound files are placed in Resources folder):",
      },
      {
        id: 14,
        imageUrl: require("../../assets/Shushant/shush9.PNG"),
      },
      {
        id: 15,
        heading:
          "Making a function which is callable from any other scripts in the entire game",
      },
      {
        id: 16,
        imageUrl: require("../../assets/Shushant/shush10.PNG"),
      },
    ],
  },
  {
    id: 1,
    name: "Apoorv Yadav",
    Job: "React Developer, Level Designer, Texture Artist",
    email: "mailto:apoorv.yadav2019@vitstudent.ac.in",
    github: "https://github.com/Apoorv-17",
    linkdin: "https://www.linkedin.com/in/apoorv-yadav-1a54571b7/",
    insta: "",
    imageUrl:
      "https://lh3.googleusercontent.com/ARVj1C0lnGyiwERJZWQXMfzG-gBbQDPm3zzH9qw1RNXvhMVyp31hzFrb1IpLJtBBdouGffMhu2r_6gUeQzwivrwUpdXV0wxgC1cuZmPFB-GQeZwouXJKIMJ8KsL2NmYINwb2yjDufw",
    profile:
      "https://lh3.googleusercontent.com/pw/ACtC-3cfQFLV-FVodvi6EAsCxGnc_zuQ41gqQqVNVfwXwLoEaUw75k6YojIRfgjszqv_KQOi6rguAU-Jb2oBjCy3Z-840vHyoWc4IuK5OPktDDojNh7SqrzhlvK6Z4i82HK_U-4c0EWTJsqd4ndKbAA8CsRYLA=s268-no?authuser=0",
    description:
      "I’m currently pursuing Bachelors of Technology in Computer Science from Vellore Institute of Technology, Chennai. I’m a React Developer and ML enthusiast who loves to learn new skills and technologies. Always willing to innovate new things which can help improve the existing technologies. Proficient in React, React-Native, Firebase, C/C++, Java and MySQL. Have developed various projects on real-life problems using React, React-Native and integrated into Machine Learning it.",
    contribution: [
      {
        id: 0,
        Mdescription:
          "My role in this project is to design the hero and different types of enemies along with the various props and artifacts used in the game using Photoshop. Along with that I did the world building of the game in Unity, where I designed the map for the game and did the graphics and level designing. I also developed the interaction of these props with each other and the game.",
      },
      {
        id: 1,
        title: "Description of my Contribution",
      },
      {
        id: 2,
        Mdescription:
          "1) I have used Photoshop to design the various props. I used the concept of Nearest-Neighbour to get pixelated images. Pixel Art helps store a large amount of detail into the image. Thorough which we can give utmost attention to details without worrying about the distortion. Since in the nearest neighbour we get sharp edges which helps in storing data in very small sizes and then scale them into desired sizes.",
      },
      {
        id: 5,
        heading: "I) Creation of Different Enemies using Pixel Art method: ",
      },
      {
        id: 6,
        description:
          "(i) Crab Enemy: This enemy will move only in x-axis of the plane.",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Apoorv/crab.png"),
      },
      {
        id: 6,
        description:
          "(ii) Jumper Enemy: This enemy will move only in both x-axis and y-axis of the plane.",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Apoorv/jumper.png"),
      },
      {
        id: 6,
        description:
          "(iii) Octopus Enemy: This enemy will move only in a zig-zag way in both x-axis and y-axis of the plane.",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Apoorv/octopus.png"),
      },
      {
        id: 8,
        heading: "II) Creating the level Design for the Ground: ",
      },
      {
        id: 9,
        imageUrl: require("../../assets/Apoorv/platform1.png"),
      },
      {
        id: 10,
        imageUrl: require("../../assets/Apoorv/platform2.png"),
      },
      {
        id: 13,
        heading: "III) Various Props for adding details: ",
      },
      {
        id: 15,
        imageUrl: require("../../assets/Apoorv/props.png"),
      },
      {
        id: 20,
        description: "2) Assembly the props and Setting up the Game World:",
      },
    ],
  },
  {
    id: 2,
    name: "Divyanu Baheti",
    Job: "ML Analyst, Texture Artist",
    github: "https://github.com/Divyanu",
    linkdin: "https://www.linkedin.com/in/divyanu-baheti-23a5a0185",
    insta: "",
    email: "mailto:divyanu.baheti2019@vitstudent.ac.in",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    profile: "https://www.w3schools.com/howto/img_avatar.png",
    description: "Divyanu Discription",
    contribution: [
      {
        id: 0,
        title: "title0",
      },
      {
        id: 1,
        description: "description0",
      },
      {
        id: 2,
        imageUrl: require("../../assets/home-github.jpg"),
      },
      {
        id: 3,
        title: "title1",
      },
      {
        id: 4,
        description: "description1",
      },
      {
        id: 5,
        imageUrl: require("../../assets/home-why.jpg"),
      },
      {
        id: 6,
        imageUrl: require("../../assets/home-why.jpg"),
      },
    ],
  },
  {
    id: 3,
    name: "Rishi Mungia",
    Job: "Player Mechanics, Animation & Post-Processing",
    github: "https://github.com/rishimungia",
    linkdin: "https://www.linkedin.com/in/rishi-mungia-7281051b5",
    insta: "",
    email: "mailto:rishi.mungia2019@vitstudent.ac.in",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3c4cg49DSJfZ5KOYAEuipus930DTLm8eszaUZZc0W7jIC1VWuiQ4wwRpDAIDwSwGMkkXJuwSasnquuNlpRCUMFDIrY0gvELxU1_NKl1500ZmqBwX2J1Cxqckc36BrxZ_8YrtgU9xV-FpNQmSNmPtibM=s657-no?authuser=0",
    profile:
      "https://lh3.googleusercontent.com/pw/ACtC-3c4cg49DSJfZ5KOYAEuipus930DTLm8eszaUZZc0W7jIC1VWuiQ4wwRpDAIDwSwGMkkXJuwSasnquuNlpRCUMFDIrY0gvELxU1_NKl1500ZmqBwX2J1Cxqckc36BrxZ_8YrtgU9xV-FpNQmSNmPtibM=s657-no?authuser=0",
    description:
      "I am currently pursuing B. Tech in Computer Science from Vellore Institute of Technology, Chennai. I am a Unity Game Developer and Front-End Developer who loves to learn new bleeding edge technologies and create jaw-dropping graphics. Always willing to innovate new things which can help improve the existing technologies. Proficient in React JS, SCSS, C#, Adobe Suit and Front-end Design.",
    contribution: [
      {
        id: 0,
        Mdescription:
          "My main role in the project was to design the core Player Mechanics like Running, Jumping, Crouching, Wall-Sliding, etc. Along with that the core Game Scripts like how the Enemy and Player Health System, how different Game Objects will interact with each other and the Enemy Spawning System which is integrated with the Machine Learning Model.",
      },
      {
        id: 1,
        Mdescription:
          "Apart from the Scripting, game’s Rendering and Post-Processing using the Unity’s Universal Render Pipeline was done. Which enabled the volumetrics and bloom in the map’s lights for added realism and immersion.",
      },
      {
        id: 2,
        styledDescription: [
          {
            id: 0,
            title: "Player Mechanics",
            description:
              "The core Player Movement script was written in C# using the Unity Engine Libraries. It includes being able to Run, Jump, Double Jump, Crouching, Wall-Sliding.<br><br>The Movement Script utilizes the Unity Physics to move the player sprite in a realistic manner.<br><br><b>A.	Running:</b> This works by getting the <I>Raw Horizontal Input</I> from the input hardware and add velocity to the Player’s <I>Rigid-Body</I> in the appropriate direction.<br><b>B.	Jumping:</b> To prevent player jumping indefinitely, a <I>Transform Game Object</I> is made to check is the Player is standing on ground called <I>Ground-Check</I> and all the ground sprites need the Ground Tag.",
            imageUrl: require("../../assets/Rishi/rishi1.png"),
          },
          {
            id: 1,
            title: "",
            description:
              "<b>C.	Crouching:</b> Making the Player Crouch was a little bit tricky, since we need to modify the Box Collider to get smaller so the Player can fit through tiny gaps in the map.<br><br>We also need to prevent player from standing if it is under an object so for that another Transform Game Object is made as a Ceiling-Check.<br><br>Along with that, the Weapon-Fire-Point needs to be adjusted according to the new player sprite size.",
            imageUrl: require("../../assets/Rishi/rishi2.png"),
          },
          {
            id: 2,
            title: "",
            description:
              "<b>D.	Wall-Sliding:</b> Adding Wall-Sliding for the game character again required to check collision with walls in the map, so to achieve that yet another two Transform Game Objects were required one for either side of the player.<br><br>Now for the actual wall grabbing to work, the velocity in the y-axis was damped using the Mathf.Clamp(  ) function in C#.<br><br>Also, the character sprite needed to be flipped opposite to the wall so that the player could shoot even while wall-sliding, so for that the   Flip( ) function was reused from the Player Running part of the script.",
            imageUrl: require("../../assets/Rishi/rishi3.png"),
          },
        ],
      },
      {
        id: 3,
        title: "Core-Game Mechanics:",
      },
      {
        id: 4,
        description:
          "<b>A.	Player and Enemy Health System:</b> To implement this, a function takeDamage( ) was made for both the player and the enemy. This function could be called inside the Weapon Script and the Enemy Attack Scripts, respectively.<br><br>For the player, when the health became equal to zero, a respawn( ) function was implemented in the Game Manager Script to reset the game. A Heads Up Display (HUD) is also programmed to show the current health of the Player.",
      },
      {
        id: 5,
        styledDescription: [
          {
            id: 0,
            title: "B. Exploding Barrel",
            description:
              "For this game mechanic I added two states to the barrel, normal and activated. When the enemy or player shoots the barrel, it will switch to active state and start to glow in red color as shown in the picture. And when it is shot again, it will explode.<br><br>For the explosion, the barrel creates an area effect in which all the game objects get pushed away from the explosion and if the Player or any Enemies that are in its range will get damaged using the takeDamage( ) function described above.",
            imageUrl: require("../../assets/Rishi/rishi4.png"),
          },
        ],
      },
      {
        id: 6,
        Mdescription:
          "<b>C.	Lava Script:</b> This once again uses the same takeDamage( ) function, but it is programmed to cause an instant death both for the Player and the Enemies. The Lava will also cause the Explosive Barrel to explode immediately skipping the activation state. This makes Lava an extremely dangerous part of the game!",
      },
      {
        id: 7,
        Mdescription:
          "<b>D.	Spawn Manager:</b> This script is an integral part of the gameplay as it controls all the enemy and Power-Ups spawns in the game.<br>This script takes input from the ML model to set the difficulty of the game, by spawning Enemies / Power-Ups accordingly. This leads to some interesting outcomes based on the player’s play style sometimes resulting huge enemy hoards!",
      },
      {
        id: 8,
        title: "Rendering and Post-Processing:",
      },
      {
        id: 9,
        Mdescription:
          "We have used Unity’s Universal Render Pipeline (URP) as the Rendering Engine of our game. This is because it supports 2D Graphics and Lighting. Whereas the HDRP pipeline is made for 3D Games and Ray-Traced applications that was not optimal in our case.",
      },
      {
        id: 10,
        Mdescription:
          "Also, URP is a more robust and performance friendly solution for rendering in modern consoles and mobile devices.",
      },
      {
        id: 11,
        Mdescription:
          "<b>A.	Post-Processing:</b> For our game’s artistic style, I used the Bloom Shader and Global Volume from the Unity’s URP Renderer. Since all the game textures and sprites were Pixel Art, Point Filter mode was used to prevent it from getting blurred.",
      },
      {
        id: 12,
        imageUrl: require("../../assets/Rishi/rishi5.png"),
      },
      {
        id: 13,
        Mdescription:
          "<b>B.	Lighting:</b> It is an integral part of the game as it can make or break player’s immersion. URP provides various 2D Lights that can be added to the scene to achieve different types of looks. For example, we used Point Light for the Lamps and Ceiling Lights to create a realistic volumetric look, and for some dynamic lights that needed to be scripted or animated I used 2D Sprite Light with the help of custom Emission Maps for each frame.",
      },
      {
        id: 14,
        title: "Animation",
      },
      {
        id: 15,
        Mdescription:
          "Adding animation to player’s movements adds yet another layer of immersion to the game. For controlling what animation plays at what time can be set using Unity’s inbuilt Animator and Animation Controller.",
      },
      {
        id: 16,
        styledDescription: [
          {
            id: 1,
            title: "A. Creating Animations",
            description:
              "First we need to make all animations by inserting the animation frames with a fixed delay that will create a sense of motion. ",
            imageUrl: require("../../assets/Rishi/rishigif.gif"),
          },
        ],
      },
      {
        id: 17,
        imageUrl: require("../../assets/Rishi/rishi6.png"),
      },
      {
        id: 18,
        Mdescription: "Dope Sheet for the animation of Barrel Explosion",
      },
      {
        id: 19,
        Mdescription:
          "<b>B.	Making Animations Play:</b> We cannot just set animations to play randomly, instead we want to play them when something is triggered or when something moves. To achieve that I used Unity’s Animator Controller in which we can define a flow of different animations and set the parameters that will trigger the set animation that we can later modify in the C# Scripts.",
      },
      {
        id: 20,
        imageUrl: require("../../assets/Rishi/rishi7.png"),
      },
      {
        id: 21,
        Mdescription: "Animator Flow for the Player Movement",
      },
    ],
  },
  {
    id: 4,
    name: "Ashish Das",
    Job: "Jumper Mechanics",
    github: "https://github.com/Sugar3201",
    linkdin: "https://www.linkedin.com/in/ashish-das-6a7960200",
    insta: "https://instagram.com/_sugar3201?igshid=18ysviofqst8m",
    email: "mailto:ashish.das2019@vitstudent.ac.in",
    imageUrl: require("../../assets/ashish.jpeg"),
    profile: require("../../assets/ashish.jpeg"),
    description: "Ashish Description",
    contribution: [
      {
        id: 0,
        Mdescription:
          "Scripting of all the enemies in the game using C# language in unity because C#  is a general purpose language that is so versatile that it can reasonably be used as a scripting language in a game engine making the game easier to run on various platforms.",
      },
      {
        id: 1,
        title: "Description of my contribution",
      },
      {
        id: 3,
        Mdescription: "Creation of a enemy using slight hint of AI",
      },
      {
        id: 4,
        imageUrl: require("../../assets/ashish1.png"),
      },
      {
        id: 5,
        imageUrl: require("../../assets/ashish2.png"),
      },
      {
        id: 6,
        Mdescription:
          "My field of work is adding a little hint of Artificial intelligence in this enemy to make the game more challenging. ",
      },
      {
        id: 7,
        title: "Basic Ideology while making this enemy",
      },
      {
        id: 8,
        Mdescription:
          "Along with various difficult platform to increase the challenge for the player this enemy was created to analyse the player position at a particular time and then jump from one its particular location to the position where the player is and then after the attack jump back to a certain distance to avoid any damage from the player. ",
      },
      {
        id: 9,
        imageUrl: require("../../assets/ashish3.png"),
      },
      {
        id: 10,
        Mdescription:
          "The enemy here is able to detect the player’s range i.e if the player is within the range of its jump ",
      },
      {
        id: 11,
        imageUrl: require("../../assets/ashish4.png"),
      },
      {
        id: 12,
        Mdescription: "then the it calculates the position",
      },
      {
        id: 13,
        imageUrl: require("../../assets/ashish5.png"),
      },
      {
        id: 14,
        Mdescription: "and then makees its jump",
      },
      {
        id: 15,
        imageUrl: require("../../assets/ashish6.png"),
      },
      {
        id: 16,
        Mdescription:
          "Along with that I have decided to add a timer of a few sec after which the same process will follow again and again making the player push its limits.",
      },
      {
        id: 17,
        imageUrl: require("../../assets/ashish7.png"),
      },
      {
        id: 18,
        Mdescription:
          "What makes this enemy interesting is the auto position detection ability of the player. So the only way to avid being hit by this enemy would be running away from its range else eliminating the same. ",
      },
    ],
  },
  {
    id: 5,
    name: "Rupak",
    Job: "Crab Mechanics",
    github: "https://github.com/rupak-20",
    linkdin: "http://www.linkedin.com/in/rupak-swami-071468190",
    insta: "",
    email: "mailto:rupak.swami2019@vitstudent.ac.in",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    profile: "https://www.w3schools.com/howto/img_avatar.png",
    description:
      "I’m currently pursuing a Bachelor's degree with a major in Computer Science. I’m a Web Developer and I love working on diverse projects and technologies. I am skilled in C/C++, Python, Web Designing, Cryptography and IoT. I have worked on various projects on real-life problems using blockchain, cryptography and speech recognition. Always seeking new learning experiences and making friends on the way.",
    contribution: [
      {
        id: 0,
        Mdescription:
          "My role in this project was to design the mechanics and different abilities of the Crab (enemy). During this project I created an AI script for the Crab, which includes the ability to find and follow the player, shoot orbs, give and receive damage to and from the player and die or (possibly) kill the hero.",
      },
      {
        id: 1,
        title: "My Contribution",
      },
      {
        id: 2,
        Mdescription:
          "I used <b>C# scripts</b> to create the AI and spawn the orbs. This includes:",
      },
      {
        id: 3,
        Mdescription: "1.	Selecting Detect, Attack and Escape Range.",
      },
      {
        id: 4,
        imageUrl: require("../../assets/Rupak/rupak1.png"),
      },
      {
        id: 5,
        Mdescription:
          "Detect Range: where Crab detects the player<br>Attack Range: where Crabs starts attacking the player<br>Escape Range: where Crabs starts to retreat when the player comes too near",
      },
      {
        id: 6,
        Mdescription: "2.	Following and attacking player when in range",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Rupak/rupak2.png"),
      },
      {
        id: 8,
        imageUrl: require("../../assets/Rupak/rupak3.png"),
      },
      {
        id: 9,
        Mdescription: "3.	Turning the Crab",
      },
      {
        id: 10,
        imageUrl: require("../../assets/Rupak/rupak4.png"),
      },
      {
        id: 11,
        imageUrl: require("../../assets/Rupak/rupak5.png"),
      },
      {
        id: 12,
        Mdescription: "4.	Killing the Crab or the Hero",
      },
      {
        id: 13,
        imageUrl: require("../../assets/Rupak/rupak6.png"),
      },
      {
        id: 14,
        imageUrl: require("../../assets/Rupak/rupak7.png"),
      },
      {
        id: 15,
        imageUrl: require("../../assets/Rupak/rupak8.png"),
      },
    ],
  },
  {
    id: 6,
    name: "Karthikeyan Sugavanan",
    Job: "Octopus Mechanics",
    github: "https://github.com/KarthikeyanSugavanan",
    linkdin: "https://www.linkedin.com/in/karthikeyan-sugavanan-01677718b",
    insta: "",
    email: "mailto:karthikeyan.sugavanan2019@vitstudent.ac.in",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3fCmFsxzjQBMPxEnQQUwz4s7Kikc51BN65R4tt-C2glSys-dzgHSz3_HpupRgFePE7s2cS5uDGda5VgCbejwKxj6u0kObrrNdW7M4I9hweDbGObM4XJ1fQIqOXYy9HIx6kD489GE-LmZzNgiHudlmoB",
    profile:
      "https://lh3.googleusercontent.com/pw/ACtC-3fCmFsxzjQBMPxEnQQUwz4s7Kikc51BN65R4tt-C2glSys-dzgHSz3_HpupRgFePE7s2cS5uDGda5VgCbejwKxj6u0kObrrNdW7M4I9hweDbGObM4XJ1fQIqOXYy9HIx6kD489GE-LmZzNgiHudlmoB",
    description:
      "Hey , my name is Karthikeyan Sugavanan and I am currently a student at VIT Chennai pursing BTech in Computer Science and Engineering . I am an enthusiastic and adventures person who shows interest towards learning new subjects and other topics related to the field of computer science and the Internet and improve my skills. I have developed various frontend and backend projects  using HTML, CSS, and JavaScript for frontend and C/C++, Java, Python for backend respectively. ",
    contribution: [
      {
        id: 0,
        Mdescription:
          "I have been assigned the role of a C# Enemy Script Writer. As an Enemy script writer, my job is to utilize my skills and bring the game to life by creating a powerful enemy which can give an uphill battle for the player.",
      },
      {
        id: 1,
        title: "Description of my Contribution",
      },
      {
        id: 2,
        Mdescription:
          "I have used Unity and Visual Studios C# to create an octopus like alien called the “Octopus” , which can float in space . The Octopus is coded to patrol the given area , and will attack upon the player entering the area .",
      },
      {
        id: 3,
        imageUrl: require("../../assets/Karthik/karthik1.png"),
      },
      {
        id: 4,
        title: "The Features of the Octopus",
      },
      {
        id: 5,
        heading: "1.	Float and attack from air",
      },
      {
        id: 6,
        imageUrl: require("../../assets/Karthik/karthik2.png"),
      },
      {
        id: 7,
        heading:
          "2.	Throw acid balls at the player which will reduce the players health",
      },
      {
        id: 8,
        imageUrl: require("../../assets/Karthik/karthik3.png"),
      },
      {
        id: 9,
        heading: "3.	Maintain safe distance from a player .",
      },
      {
        id: 10,
        imageUrl: require("../../assets/Karthik/karthik4.png"),
      },
      {
        id: 11,
        heading: "4.	Create acid pond which reduces the players health",
      },
      {
        id: 12,
        imageUrl: require("../../assets/Karthik/karthik5.png"),
      },
    ],
  },
];
export default team_members;
