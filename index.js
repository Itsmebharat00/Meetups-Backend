/** @format */

const { initializingDatabase } = require("./db/db.connect");
initializingDatabase();
const MeetUp = require("./models/meetup.models");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const webDevelopment = {
  title: "Future of Web Development",
  hostedBy: "Tech Innovators Collective",
  startTime: "10 Nov 2025, 6:30 PM",
  endTime: "10 Nov 2025, 8:00 PM",
  location: "Online (Zoom Webinar) & 456 Dev Street, Silicon Valley",
  eventType: "Hybrid",
  description:
    "A deep dive into the latest trends in front-end frameworks, serverless architecture, and AI integration in modern web applications,This session will explore real-world case studies of companies using modern stacks to scale rapidly and efficiently.Attendees will learn best practices for writing maintainable code, optimizing performance, and adopting next-generation tooling. Whether you're a beginner or an experienced developer, this session will provide valuable insights into where the industry is heading in the next five years.",
  speakers: [
    {
      name: "Alex Chen (Senior Full Stack Developer)",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Maria Rodriguez (Cloud Architect)",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      name: "Samir Khan (AI/ML Engineer)",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  ],
  price: 15,
  min: 0,
  dressCode: "Casual",
  ageRestrictions: "Open to all, minors require guardian permission.",
  minimumAge: 16,
  tags: ["webdev", "javascript", "react", "serverless", "ai"],
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHUM8CF8bGY-mlGKsK-csNaVTSLXA4Z5IFw&s",
};

const techConference = {
  title: "Tech Conference",
  hostedBy: "InnovateX Group",
  startTime: "13 Jul 2023, 7:00 AM",
  endTime: "13 Jul 2023, 10:00 AM",
  location: "123 Business Center, Mumbai, India",
  eventType: "Offline",
  description:
    "Join top industry leaders and developers to explore the latest advancements in technology, software development, and digital transformation.This conference brings together innovators from diverse domains to share their expertise on cloud computing, cybersecurity, and scalable architecture Attendees will participate in interactive sessions, hands-on demos, and panel discussions with experts shaping the future of tech. This event offers a unique opportunity to network, learn, and stay ahead in the rapidly evolving digital world.",
  speakers: [
    {
      name: "Ravi Mehta (CTO, InnovateX)",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Lin (Tech Strategist)",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Daniel Brooks (Software Architect)",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
  ],
  price: 30,
  min: 0,
  dressCode: "Formal",
  ageRestrictions: "18+ only",
  minimumAge: 18,
  tags: ["tech", "conference", "innovation", "networking"],
  image:
    "https://www.shutterstock.com/image-photo/blurred-audience-attentively-listening-speaker-260nw-2428819653.jpg",
};

const designWorkshop = {
  title: "Design Workshop",
  hostedBy: "Creative Minds Studio",
  startTime: "10 Jul 2023, 2:00 PM",
  endTime: "10 Jul 2023, 4:00 PM",
  location: "456 Design Hub, Pune, India",
  eventType: "Offline",
  description:
    "A hands-on workshop for UX/UI enthusiasts focusing on design thinking, wireframing, and user-centered design techniques. Participants will learn how to translate user needs into intuitive interfaces through practical exercises and group activities.The workshop covers modern prototyping tools, usability testing methods, and the fundamentals of building consistent design systems.Whether you're a designer, developer, or beginner, this session will help sharpen your creativity and problem-solving skills.",
  speakers: [
    {
      name: "Anjali Kapoor (Lead UX Designer)",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      name: "Michael Tan (Product Designer)",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
    },
  ],
  price: 20,
  min: 0,
  dressCode: "Smart casual",
  ageRestrictions: "Open to all",
  minimumAge: 15,
  tags: ["design", "ux", "ui", "workshop"],
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQQYNDe4YqkcPdM2UEhhIxlTaad8ZvLcvxw&s",
};

const marketingSeminar = {
  title: "Marketing Seminar",
  hostedBy: "Brand Builders Co.",
  startTime: "15 Aug 2023, 10:00 AM",
  endTime: "15 Aug 2023, 12:00 PM",
  location: "789 Corporate Plaza, Delhi, India",
  eventType: "Offline",
  description:
    "Learn the latest marketing strategies, from social media growth to data-driven branding and storytelling.This seminar covers how top brands use consumer psychology, analytics, and creative campaigns to capture attention in competitive markets.Attendees will understand how to plan effective marketing funnels, create powerful brand identities, and execute successful outreach strategies. Perfect for professionals, aspiring marketers, and business owners who want to take their marketing skills to the next level.",
  speakers: [
    {
      name: "Priya Desai (Marketing Strategist)",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "John Evans (Brand Consultant)",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
  ],
  price: 25,
  min: 0,
  dressCode: "Formal",
  ageRestrictions: "Open to professionals and students",
  minimumAge: 16,
  tags: ["marketing", "branding", "seminar"],
  image:
    "https://thumbs.dreamstime.com/b/people-seminar-marketing-strategy-business-45073342.jpg",
};

const entrepreneurshipMeetup = {
  title: "Entrepreneurship Meetup",
  hostedBy: "Startup Connect India",
  startTime: "5 Sep 2023, 11:00 AM",
  endTime: "5 Sep 2023, 1:00 PM",
  location: "Online Event",
  eventType: "Online",
  description:
    "An interactive session for aspiring entrepreneurs to network, share ideas, and learn from successful startup founders.The meetup covers essential topics such as validating business ideas, building MVPs, securing funding, and forming strong teams. Participants will also hear real-world experiences about overcoming failures, scaling startups, and navigating challenges in the Indian startup ecosystem.This event provides a supportive environment for collaboration, inspiration, and meaningful connections.",
  speakers: [
    {
      name: "Karan Malhotra (Startup Mentor)",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      name: "Lisa Nguyen (Investor & Advisor)",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ],
  price: 10,
  min: 0,
  dressCode: "Casual",
  ageRestrictions: "Open to all",
  minimumAge: 14,
  tags: ["entrepreneurship", "startup", "networking", "business"],
  image:
    "https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg",
};

const dataScienceWebinar = {
  title: "Data Science Webinar",
  hostedBy: "AI Analytics Group",
  startTime: "20 Sep 2023, 5:00 PM",
  endTime: "20 Sep 2023, 6:30 PM",
  location: "Online (Zoom Webinar)",
  eventType: "Online",
  description:
    "A session covering the essentials of data visualization, predictive analytics, and the future of AI in decision-making.Experts will walk through techniques used in modern data science workflows, including feature engineering, model training, and evaluation.Attendees will gain clarity on how organizations leverage machine learning to enhance productivity and make smarter decisions. The webinar is suitable for beginners as well as professionals who want to strengthen their understanding of AI-driven insights.",
  speakers: [
    {
      name: "Neha Patel (Data Scientist)",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    {
      name: "Robert Hughes (AI Researcher)",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
  ],
  price: 0,
  min: 0,
  dressCode: "Other",
  ageRestrictions: "Open to all",
  minimumAge: 15,
  tags: ["data", "ai", "machine-learning", "analytics"],
  image:
    "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops.webp",
};

const photographyMeetup = {
  title: "Photography Meetup",
  hostedBy: "Lens Lovers Community",
  startTime: "25 Sep 2023, 9:00 AM",
  endTime: "25 Sep 2023, 12:00 PM",
  location: "Marine Drive, Mumbai",
  eventType: "Offline",
  description:
    "Join fellow photographers for a city photo walk and sharing session to improve your street photography and composition skills.The meetup encourages creativity through guided challenges, live critiques, and hands-on practice with natural lighting.Participants will learn techniques for capturing candid moments, framing visually engaging shots, and editing images for professional results.Whether you're a hobbyist or an experienced photographer, this event promises an inspiring and collaborative experience.",

  speakers: [
    {
      name: "Arjun Menon (Professional Photographer)",
      image: "https://randomuser.me/api/portraits/men/69.jpg",
    },
    {
      name: "Sarah White (Travel Blogger)",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ],
  price: 5,
  min: 0,
  dressCode: "Casual",
  ageRestrictions: "Open to all",
  minimumAge: 13,
  tags: ["photography", "creativity", "outdoor", "meetup"],
  image:
    "https://filmphotographyproject.com/wp-content/uploads/2024/10/BeersCameras_Ohio_770x430_.jpg",
};

async function createMeetups(data) {
  try {
    const meetUp = new MeetUp(data);
    const meetUpSave = await meetUp.save();
    console.log("New Meet up Data:", meetUpSave);
  } catch (error) {
    throw error;
  }
}

// createMeetups(webDevelopment);
// createMeetups(techConference);
// createMeetups(designWorkshop);
// createMeetups(marketingSeminar);
// createMeetups(entrepreneurshipMeetup);
// createMeetups(dataScienceWebinar);
// createMeetups(photographyMeetup);

async function readAllEvents() {
  try {
    const allEvents = await MeetUp.find();
    return allEvents;
  } catch (error) {
    console.log("Error in fetching Events:", error);
    throw error;
  }
}

app.get("/events", async (req, res) => {
  try {
    const meetUps = await readAllEvents();
    if (meetUps.length != 0) {
      res.json(meetUps);
    } else {
      res.status(404).json({ error: "No Event found." });
    }
  } catch (error) {
    console.log("Error in fetching events:", error);
    res.status(500).json({ error: "Failed to fetch Event." });
  }
});

async function readEventById(eventId) {
  try {
    const eventById = await MeetUp.findById(eventId);
    return eventById;
  } catch (error) {
    console.log(error);
  }
}

app.get("/events/:eventId", async (req, res) => {
  try {
    const events = await readEventById(req.params.eventId);
    if (events.length != 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: "No Event found." });
    }
  } catch {
    res.status(500).json({ error: "Failed to fetch Events." });
  }
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
