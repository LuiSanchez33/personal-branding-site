import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const PersonalBrandingSite = () => {
  const personalInfo = {
    name: "Luis Sanchez",
    title: "AI/Data PM | Marketing Strategies | Product | Strategy | Customer Behaviours | CDP | Foster MBA (STEM)",
    location: "Seattle, Washington, United States",
    contact: {
      phone: "+12068986525",
      email: "lsanchezalzamora@gmail.com",
      linkedin: "www.linkedin.com/in/luissanchez25",
      website: "cryptomania.nz/"
    },
    summary: "I'm Luis Sanchez, a Product & Marketing Leader with a knack for turning insights into $100M+ profits. From Australia/New Zealand to the US, I've led game-changing product launches and omnichannel campaigns, making magic happen across e-commerce, banking, technology, and more. With 13 years of experience, I blend data, AI, and consumer behavior to craft unforgettable customer journeys. Whether it's AI product management, predictive modeling, or personalized recommendations, I thrive on delivering impactful results. My technical savvy and data-driven mindset are my secret weapons for making bold, strategic moves.",
    experience: [
      {
        role: "Marketing/Tech Product Manager",
        company: "SpeakData Ltd",
        duration: "October 2020 - Present",
        location: "Auckland, New Zealand",
        description: "Leading growth and customer engagement strategies for SpeakData's CDP solutions. Spearheaded customer acquisition programs, driving significant daily active user growth. Championed customer experience initiatives, increasing adoption and satisfaction rates."
      },
      {
        role: "Tech/Data Product Manager",
        company: "Vodafone",
        duration: "May 2018 - October 2020",
        location: "Auckland, New Zealand",
        description: "Led tech and data product management initiatives. Implemented omnichannel marketing strategies and launched new products, resulting in significant revenue growth and customer base expansion."
      },
      {
        role: "Digital Project Manager",
        company: "Stefanini Group",
        duration: "August 2016 - January 2017",
        location: "Peru",
        description: "Managed digital projects using Agile and Scrum approaches. Deployed Scrumban methodology for requirements management and improvements."
      }
    ],
    skills: [
      { name: "Problem Solving", value: 90 },
      { name: "Data Analytics", value: 85 },
      { name: "Product Leadership", value: 95 },
      { name: "AI & Enterprise Software", value: 80 },
      { name: "Customer Experience", value: 90 },
      { name: "Agile Methodologies", value: 85 }
    ],
    topSkills: [
      "Presentation Skills",
      "Audience Segmentation",
      "User Experience (UX)",
      "Data Analysis",
      "AI/ML",
      "Product Management"
    ],
    languages: [
      { name: "English", level: "Professional Working" },
      { name: "Italian", level: "Elementary" },
      { name: "Spanish", level: "Native or Bilingual" }
    ],
    education: [
      {
        degree: "Global Executive MBA - STEM",
        institution: "UW Foster School of Business",
        year: "2024 - 2025",
        focus: "GenAI, Marketing Strategies, Innovation and Entrepreneurship"
      },
      {
        degree: "Gerencia de Marketing",
        institution: "CENTRUM Graduate Business School",
        year: "2016",
        focus: "Marketing"
      },
      {
        degree: "Ing. Sistemas e Informática",
        institution: "Universidad de Piura",
        year: "2012",
        focus: "Gestión de proyectos"
      },
      {
        degree: "Ingeniero de Sistemas e Informática",
        institution: "Universidad Nacional Mayor de San Marcos",
        year: "2007 - 2011",
        focus: "Gestión de proyectos"
      }
    ],
    impactMetrics: {
      annualSavings: 26,
      customers: 50,
      monthlyUsers: 25,
      enterprises: 100,
      nps: 95
    }
  };

  const TimelineItem = ({ role, company, duration, location, description, isLast }) => (
    <div className="mb-8 flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        {!isLast && <div className="w-1 bg-blue-300 h-full"></div>}
      </div>
      <div>
        <h3 className="font-bold text-lg">{role}</h3>
        <p className="text-blue-600 font-medium">{company}</p>
        <p className="text-gray-500 text-sm">{duration} | {location}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );

  const EducationItem = ({ degree, institution, year, focus, isLast }) => (
    <div className="mb-8 flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        {!isLast && <div className="w-1 bg-blue-300 h-full"></div>}
      </div>
      <div>
        <h3 className="font-bold text-lg">{degree}</h3>
        <p className="text-blue-600 font-medium">{institution}</p>
        <p className="text-gray-500 text-sm">{year}</p>
        <p className="mt-2">{focus}</p>
      </div>
    </div>
  );

  const SkillsChart = ({ skills }) => (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <Radar name="Skills" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );

  const ImpactMetric = ({ value, description }) => (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-blue-600">{value}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center mb-8">
        <img src="/luis-sanchez-profile.jpg" alt="Luis Sanchez" className="w-32 h-32 rounded-full mr-6" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600">{personalInfo.title}</p>
          <p className="text-md text-gray-500">{personalInfo.location}</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <p>{personalInfo.summary}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {personalInfo.experience.map((job, index) => (
                <TimelineItem
                  key={index}
                  role={job.role}
                  company={job.company}
                  duration={job.duration}
                  location={job.location}
                  description={job.description}
                  isLast={index === personalInfo.experience.length - 1}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillsChart skills={personalInfo.skills} />
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="font-semibold mb-4">Top Skills</h3>
                  <ul className="list-disc pl-5">
                    {personalInfo.topSkills.map((skill, index) => (
                      <li key={index} className="mb-2">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Languages</h3>
                  <ul className="list-disc pl-5">
                    {personalInfo.languages.map((lang, index) => (
                      <li key={index} className="mb-2">{lang.name} ({lang.level})</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              {personalInfo.education.map((edu, index) => (
                <EducationItem
                  key={index}
                  degree={edu.degree}
                  institution={edu.institution}
                  year={edu.year}
                  focus={edu.focus}
                  isLast={index === personalInfo.education.length - 1}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact">
          <Card>
            <CardHeader>
              <CardTitle>Impact Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <ImpactMetric 
                  value={`${personalInfo.impactMetrics.annualSavings}M`}
                  description="Million dollars Annual net productivity savings"
                />
                <ImpactMetric 
                  value={personalInfo.impactMetrics.customers}
                  description="Diverse customers across industries"
                />
                <ImpactMetric 
                  value={`${personalInfo.impactMetrics.monthlyUsers}M`}
                  description="Million Monthly active users"
                />
                <ImpactMetric 
                  value={personalInfo.impactMetrics.enterprises}
                  description="Enterprises using Copilot"
                />
              </div>
              <div className="mt-8 text-center">
                <ImpactMetric 
                  value={`${personalInfo.impactMetrics.nps}%`}
                  description="NPS For customer preview programs at Microsoft and IBM"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonalBrandingSite;
