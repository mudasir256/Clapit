import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
import PROJECT7_1 from '../public/favicon.png';
export const userinfo = {
    logoText: "CLAP IT", //This text is visible on your navbar and footer like your logo.
    fav:PROJECT7_1,
    contact: {
        email: 'mycodecircle302@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '3073346890', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+92' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/company/105115282/admin/dashboard/', icon: faLinkedinIn },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "<CLAP IT/>",
        subtitle: "Welcome to Code Like A Pro Information Technology (CLAP IT). We specialize in custom software, mobile and web app development, UI/UX design, and SEO optimization. Our expert team is dedicated to delivering tailored solutions that empower your business to succeed in the digital landscape!"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Mobile App Development", // eg.frontend, backend, devops etc
            skills: ["React Native", "Swift ui",] //eg. react, html, python etc.
        },
        {
            category: "Web Development",
            skills: [ "Angular.js","React.js", "VUE.js","Next.js"]
        },
        {
            category: "UI/UX",
            skills: ["Figma Design",]
        },
        {
            category: "SEO",
            skills: ["On-Page SEO", "Technical SEO", "Off-Page SEO", "Analytics and Monitoring"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Born from a freelancer's bold leap during the pandemic, CLAP IT (Code Like A Pro Information Tech) is more than just tech. We are a dynamic team of innovators, delivering a wide range of services, including custom software development, mobile app solutions, and digital marketing strategies. We’re not just building applications—we’re crafting a legacy.Integrity and innovation drive us forward on our remarkable journey. Our mission is to empower clients with cutting-edge solutions that make a lasting impact on the tech landscape. With our unwavering commitment and forward-thinking vision, we aim to reshape the future of technology.Join us on this transformative adventure as we code a brighter future, together!",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'May - Oct 2020', //timespan
                title: 'Degree name', //eg. BTech in Compuster Engineering
                organization: 'School Name', //eg. VJTI, Mumbai
                description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Ian sid', //company name eg.Microsoft
                companylogo: "", //companylogo
                position: 'Project Manager', //post you held eg.Senior SDE
                time: 'March 2024 - May 2024', //timespan
                description: "Ian Sid worked with CLAP Information Technology to bring PepTalk to life. We helped deliver a user-friendly app that aligns with Ian's vision, allowing moms to ease their children’s anxiety with recorded memories. Our smooth collaboration resulted in a successful product."
            },
            {
                company: 'Philip',
                companylogo: '',
                position: 'Chief Technical',
                time: 'Jan 2024 - April 2024',
                description: "Philip was impressed by CLAP IT's work on the muave-fe project, particularly the smooth integration of the property division feature and AI chatbot. He valued the team's expertise and clear communication, leaving him highly satisfied with the final product."
            },
            {
                company: 'Andrio',
                companylogo: '',
                position: 'CEO',
                time: 'Feb 2024 - May 2024',
                description: "Andrio praised CLAP IT for the Bored and Yachting project, highlighting the team's professionalism and expertise. He was thrilled with the user-friendly platform and seamless functionality, which exceeded his expectations aligned with his vision, resulting in a successful collaboration."
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Us',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Us',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}