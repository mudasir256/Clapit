// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/pep1.jpg';
import PROJECT1_2 from '../styles/projects/muave1.png';
import PROJECT1_3 from '../styles/projects/muave2.png';
import PROJECT2_2 from '../styles/projects/bored&yachting2.png';
import PROJECT2_3 from '../styles/projects/bored&yachting3.png';
import PROJECT3_1 from '../styles/projects/romingo.png';
import PROJECT3_2 from '../styles/projects/romingo2.png';
import PROJECT3_3 from '../styles/projects/romingo3.png';
import PROJECT4_1 from '../styles/projects/gymApp.png';
import PROJECT5_1 from '../styles/projects/yourmoveai1.png';
import PROJECT5_2 from '../styles/projects/yourmove2.png';
import PROJECT6_1 from '../styles/projects/evershow.png';
// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Peptalk', //project name
        description: "'PepTalk helps moms ease their children's anxiety about doctor visits or sports events by recording and replaying positive memories from these activities. By showing kids moments when they were happy, it encourages positive associations and reduces reluctance.Memory Storage: Moms can record videos of their child's positive experiences at previously resisted places.Video Replay: Replay videos to remind children of happy moments, reducing anxiety and boosting confidence.User-Friendly: Simple design for quick recording, saving, and retrieval of videos.Personalized Categories: Easily find videos under categories like doctor visits or sports events.PepTalk turns anxiety into excitement by replaying happy memories!",
        githubLink: 'https://github.com/mudasir256/peptalk', 
        projectLink: '', //deployed project link
        tech: ['React Native', 'Django',], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1], //list of names of images from above imports.
    },
    {
      name: 'Muave', //project name
      description: 'muave-fe is an innovative platform designed to streamline the process of property division among families. With a focus on clarity and support, the platform integrates an AI chatbot to provide assistance, ensuring that family members can navigate property matters with ease and confidence.', //project description
      githubLink: 'https://github.com/mudasir256/muave', //github repo link
      projectLink: '', //deployed project link
      tech: ['Next.js', 'Django','mongo Db'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
      photo: [PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
  },
    {
        name: 'Bored & Yachting',
        description: "Bored and Yachting is an online platform that makes booking luxury yachts easy and convenient. Whether it's for a peaceful escape, a party on the water, or exploring new destinations, the platform provides a wide variety of yachts to choose from, ensuring a tailored experience for every adventure.",
        githubLink: 'https://github.com/mudasir256/bored-and-yachting',
        projectLink: 'https://boredandyachting.com/',
        tech: ['Next.js', 'Django', 'CSS'],
        photo: [PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Romingo',
        description: "Romingo is an online platform designed to simplify the process of booking care services for your pets. Whether you need a cozy room for your furry friend, professional grooming, or daily walks, Romingo connects pet owners with trusted caregivers to ensure your pets receive the best care while you're away.",
        githubLink: 'https://github.com/mudasir256/romingo',
        projectLink: 'https://www.romingo.com/',
        tech: ['Next.js', 'CSS',],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
    {
      name: 'Gym App', //project name
      description: 'The Gym App is a comprehensive platform designed to enhance the fitness experience for everyone involved—admins, coaches, users, and gymnasts. Each role comes with specific features that cater to their unique needs.', //project description
      githubLink: 'https://github.com/mudasir256/Gym-Dashboard', //github repo link
      projectLink: '', //deployed project link
      tech: ['Next.js', 'Django'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
      photo: [PROJECT4_1], //list of names of images from above imports.
  },
    {
        name: 'YourMove-AI',
        description: "yourmove-ai is a cutting-edge platform that allows users to upload a picture and convert it into stunning AI-generated artwork. Experience the power of artificial intelligence to enhance your images in just a few clicks.",
        githubLink: 'https://github.com/mudasir256/yourmove_ai',
        projectLink: 'https://www.yourmove.ai/',
        tech: ['React.js', 'Django', 'CSS'],
        photo: [PROJECT5_1, PROJECT5_2],
    },
    {
        name: 'SheoEver',
        description: "Evershoe is an e-commerce platform dedicated to providing a vast selection of shoes for every style and occasion. From casual sneakers to elegant heels, we make shopping for footwear easy and enjoyable.",
        githubLink: 'https://github.com/mudasir256/Evershoe',
        projectLink: 'https://www.shoeever.com/shoes/womens-shoes.html?srsltid=AfmBOopuLL6fIyWjy59iTR0Hen2Kxha-wWpung0lt956eHI9nRJ1ovBM',
        tech: ['React.js', 'CSS',],
        photo: [PROJECT6_1],
    },
]
