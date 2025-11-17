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
    "Explore the next decade of web development including advanced front-end frameworks, serverless computing, AI-powered development tools, WebAssembly, real-time applications, and how modern engineers can adopt future-proof skills.",
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
    "A premium technology conference bringing together leaders in software, AI, cloud, and cybersecurity. This event features keynote sessions, case studies, innovation showcases, and networking with top industry experts.",
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
    "A hands-on workshop covering user-centered design, Figma prototyping, UI/UX fundamentals, color psychology, typography rules, and practical design sprints suitable for beginners and intermediate designers.",
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
    "Discover cutting-edge marketing strategies, social media storytelling, brand positioning techniques, consumer psychology insights, and growth-hacking formulas used by top marketing professionals worldwide.",
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
    "An interactive networking meetup for aspiring entrepreneurs focusing on startup ideation, funding knowledge, pitch preparation, and real-world growth stories from seasoned founders.",
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
    "A deep explanation of predictive analytics, machine learning workflow, model evaluation, best practices for data visualization, and the future of AI decision-making in industries.",
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
    "A photography walk featuring composition techniques, lighting knowledge, street photography tips, and real-time guidance from professional photographers. Perfect for beginners and intermediate photographers.",
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
