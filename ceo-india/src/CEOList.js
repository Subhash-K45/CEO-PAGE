import React from 'react';
import CEO from './CEO';

const ceoData = [
    {
        "company": "Google",
        "ceo": "Sundar Pichai",
        "description": `Sundar Pichai is the CEO of Alphabet Inc. and Google LLC. Born in Madurai, India, he holds degrees from IIT Kharagpur, Stanford University, and Wharton School. Pichai joined Google in 2004, led the development of Chrome, and became CEO in 2015. In 2019, he also became CEO of Alphabet Inc. Known for his calm demeanor and strategic vision, he has driven Google's growth in AI, quantum computing, and consumer electronics.`,
        "image": "https://qph.cf2.quoracdn.net/main-qimg-b8d183b04409ccb63b6f5a7761cb56fd-lq",
        "link": "https://en.wikipedia.org/wiki/Sundar_Pichai"
    },
    {
        "company": "Reliance Industries",
        "ceo": "Mukesh Ambani",
        "description": `Mukesh Ambani is the chairman and largest shareholder of Reliance Industries, a conglomerate with interests in petrochemicals, refining, oil, telecommunications, and retail. He holds a degree in Chemical Engineering from the Institute of Chemical Technology, Mumbai, and an MBA from Stanford University. Ambani launched Reliance Jio in 2016, revolutionizing the Indian telecom industry. He is also involved in philanthropy through the Reliance Foundation.`,
        "image": "https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds",
        "link": "https://en.wikipedia.org/wiki/Mukesh_Ambani"
    },
    {
        "company": "Tata Group",
        "ceo": "Natarajan Chandrasekaran",
        "description": `Natarajan Chandrasekaran is the chairman of Tata Sons, the holding company of the Tata Group. He holds degrees from the Coimbatore Institute of Technology and Regional Engineering College, Trichy. Chandrasekaran joined TCS in 1987 and became CEO in 2009. In 2017, he was appointed chairman of Tata Sons. Known for his focus on innovation and digital transformation, he has led the group's growth and global expansion.`,
        "image": "https://thefederal.com/file/2022/03/Natarajan-Chandrasekaran-High-Resolution-IMT.jpg",
        "link": "https://en.wikipedia.org/wiki/Natarajan_Chandrasekaran"
    },
    {
        "company": "Infosys",
        "ceo": "Salil Parekh",
        "description": `Salil Parekh is the CEO and Managing Director of Infosys. He holds degrees in Aeronautical Engineering from IIT Bombay and Engineering from Cornell University. Parekh joined Infosys in 2018 after 25 years at Capgemini. Under his leadership, Infosys has focused on digital transformation and innovation. He is known for his strategic vision and deep industry knowledge.`,
        "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/infosys-ceo-salil-parekh-283430657-1x1_0.png?VersionId=TiShbJIV7JpMCP8ne0CLNFdDxctN29.E",
        "link": "https://en.wikipedia.org/wiki/Salil_Parekh"
    },
    {
        "company": "HDFC Bank",
        "ceo": "Sashidhar Jagdishan",
        "description": `Sashidhar Jagdishan is the Managing Director and CEO of HDFC Bank. He is a Chartered Accountant with a Master's degree in Economics from the University of Mumbai. Jagdishan joined HDFC Bank in 1996 and has held various key positions. As CEO since 2020, he has focused on digital transformation and enhancing customer experience.`,
        "image": "https://qph.cf2.quoracdn.net/main-qimg-9087d218a6bcaa0bdec3281deb4f941f",
        "link": "https://en.wikipedia.org/wiki/Sashidhar_Jagdishan"
    },
    {
        "company": "Wipro",
        "ceo": "Thierry Delaporte",
        "description": `Thierry Delaporte is the CEO and Managing Director of Wipro. He holds an MBA from the Sorbonne University in Paris. Delaporte joined Wipro in 2020 after 25 years at Capgemini. He has driven Wipro's transformation, focusing on growth, operational efficiency, and innovation. Delaporte is known for his strategic vision and customer-centric approach.`,
        "image": "https://res.cloudinary.com/people-matters/image/upload/v1678966367/Untitled_design_4_lamofw.jpg",
        "link": "https://en.wikipedia.org/wiki/Thierry_Delaporte"
    },
    {
        "company": "Bharti Airtel",
        "ceo": "Gopal Vittal",
        "description": `Gopal Vittal is the CEO of Bharti Airtel. He holds a degree in History from Madras Christian College and an MBA from IIM Calcutta. Vittal joined Airtel in 2006 and became CEO in 2013. Under his leadership, Airtel has expanded its 4G network and launched innovative digital services. He is known for his strategic acumen and customer-focused approach.`,
        "image": "https://static.toiimg.com/thumb.cms?msid=59542358&height=600&width=600",
        "link": "https://en.wikipedia.org/wiki/Gopal_Vittal"
    },
    {
        "company": "Aditya Birla Group",
        "ceo": "Kumar Mangalam Birla",
        "description": `Kumar Mangalam Birla is the chairman of Aditya Birla Group. He holds a Bachelor's degree in Commerce from the University of Mumbai and an MBA from London Business School. Birla took over the group in 1995 and has expanded its global operations. Known for his strategic vision, he focuses on innovation and sustainability.`,
        "image": "https://www.adityabirlacapital.com/-/media/ABCL/Board-Of-Directors-300_300/KMB300.ashx",
        "link": "https://en.wikipedia.org/wiki/Kumar_Mangalam_Birla"
    },
    {
        "company": "Mahindra Group",
        "ceo": "Anand Mahindra",
        "description": `Anand Mahindra is the chairman of Mahindra Group. He holds degrees from Harvard University and Harvard Business School. Mahindra joined the group in 1981 and became managing director in 1997. He has diversified the group's operations and focused on technology and digital transformation. Mahindra is also involved in philanthropy and supports various social initiatives.`,
        "image": "https://www.brandhonchos.co.in/brandhonchos/wp-content/uploads/2021/09/Anand-Mahindra.jpg",
        "link": "https://en.wikipedia.org/wiki/Anand_Mahindra"
    },
    {
        "company": "Bajaj Auto",
        "ceo": "Rajiv Bajaj",
        "description": `Rajiv Bajaj is the Managing Director of Bajaj Auto. He holds a degree in Mechanical Engineering from the University of Pune and a Master's degree from the University of Warwick. Bajaj joined Bajaj Auto in 1990 and became Managing Director in 2005. He has focused on innovation, quality, and global expansion, transforming Bajaj Auto into a global brand.`,
        "image": "https://media.licdn.com/dms/image/D4D03AQE8B8ud2nrZTQ/profile-displayphoto-shrink_400_400/0/1680749839277?e=2147483647&v=beta&t=28Y1jf-b0hOWzpPRwtixqfpSK6GrSBA0iSzJa1Mp4sU",
        "link": "https://en.wikipedia.org/wiki/Rajiv_Bajaj"
    },
    {
        "company": "HCL Technologies",
        "ceo": "C Vijayakumar",
        "description": `C Vijayakumar is the CEO and President of HCL Technologies. He holds a Bachelor's degree in Electrical and Electronics Engineering from PSG College of Technology. Vijayakumar joined HCL in 1994 and became CEO in 2016. He has driven HCL's growth and digital transformation, focusing on innovation and customer-centricity.`,
        "image": "https://s3.amazonaws.com/media.mixrank.com/profilepic/f42122f8a0e46903750cd446f83cf596",
        "link": "https://en.wikipedia.org/wiki/C_Vijayakumar"
    }
];


const CEOList = () => {
  return (
    <div className="ceo-list">
      {ceoData.map((ceo, index) => (
        <div key={index} className={index % 2 === 0 ? 'ceo-container' : 'ceo-container-2'}>
          <CEO 
            image={ceo.image} 
            name={ceo.ceo} 
            link={ceo.link} 
            description={ceo.description} 
          />
        </div>
      ))}
    </div>
  );
};

export default CEOList;
