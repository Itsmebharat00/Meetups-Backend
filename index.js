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
  startTime: new Date("2025-11-10T18:30:00Z"),
  endTime: new Date("2025-11-10T20:00:00Z"),
  location: "Online (Zoom Webinar) & 456 Dev Street, Silicon Valley",
  eventType: "Hybrid",
  description:
    "A deep dive into the latest trends in front-end frameworks, serverless architecture, and AI integration in modern web applications. Join us for insightful talks and a networking session.",
  speakers: [
    "Alex Chen (Senior Full Stack Developer)",
    "Maria Rodriguez (Cloud Architect)",
    "Samir Khan (AI/ML Engineer)",
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
  startTime: new Date("2023-07-13T07:00:00+05:30"),
  endTime: new Date("2023-07-13T10:00:00+05:30"),
  location: "123 Business Center, Mumbai, India",
  eventType: "Offline",
  description:
    "Join top industry leaders and developers to explore the latest advancements in technology, software development, and digital transformation.",
  speakers: [
    "Ravi Mehta (CTO, InnovateX)",
    "Sophia Lin (Tech Strategist)",
    "Daniel Brooks (Software Architect)",
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
  startTime: new Date("2023-07-10T14:00:00+05:30"),
  endTime: new Date("2023-07-10T16:00:00+05:30"),
  location: "456 Design Hub, Pune, India",
  eventType: "Offline",
  description:
    "A hands-on workshop for UX/UI enthusiasts focusing on design thinking, wireframing, and user-centered design techniques.",
  speakers: [
    "Anjali Kapoor (Lead UX Designer)",
    "Michael Tan (Product Designer)",
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
  startTime: new Date("2023-08-15T10:00:00+05:30"),
  endTime: new Date("2023-08-15T12:00:00+05:30"),
  location: "789 Corporate Plaza, Delhi, India",
  eventType: "Offline",
  description:
    "Learn the latest marketing strategies, from social media growth to data-driven branding and storytelling.",
  speakers: [
    "Priya Desai (Marketing Strategist)",
    "John Evans (Brand Consultant)",
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
  startTime: new Date("2023-09-05T11:00:00+05:30"),
  endTime: new Date("2023-09-05T13:00:00+05:30"),
  location: "Online Event",
  eventType: "Online",
  description:
    "An interactive session for aspiring entrepreneurs to network, share ideas, and learn from successful startup founders.",
  speakers: [
    "Karan Malhotra (Startup Mentor)",
    "Lisa Nguyen (Investor & Advisor)",
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
  startTime: new Date("2023-09-20T17:00:00+05:30"),
  endTime: new Date("2023-09-20T18:30:00+05:30"),
  location: "Online (Zoom Webinar)",
  eventType: "Online",
  description:
    "A session covering the essentials of data visualization, predictive analytics, and the future of AI in decision-making.",
  speakers: ["Neha Patel (Data Scientist)", "Robert Hughes (AI Researcher)"],
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
  startTime: new Date("2023-09-25T09:00:00+05:30"),
  endTime: new Date("2023-09-25T12:00:00+05:30"),
  location: "Marine Drive, Mumbai",
  eventType: "Offline",
  description:
    "Join fellow photographers for a city photo walk and sharing session to improve your street photography and composition skills.",
  speakers: [
    "Arjun Menon (Professional Photographer)",
    "Sarah White (Travel Blogger)",
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

async function createMeetups(meetUpData) {
  try {
    const meetUp = new MeetUp(meetUpData);
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
