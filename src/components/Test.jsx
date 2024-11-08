useEffect(() => {
  // You can replace this with API fetch for real data
  const initialSkills = [
    {
      name: "Web Developer",
      salary: 60000,
      currency: "USD",
      description: "Builds and maintains websites. Ensures optimal user experience.",
      img: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
      status: "Full-Time",
      location: "Remote",
      pinCode: "12345",
      area: "Downtown",
      city: "New York",
      state: "NY",
      country: "USA"
    },
    {
      name: "Data Scientist",
      salary: 70000,
      currency: "USD",
      description: "Analyzes complex data sets. Provides actionable business insights.",
      img: 'https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
      status: "Contract",
      location: "On-Site",
      pinCode: "67890",
      area: "Uptown",
      city: "Los Angeles",
      state: "CA",
      country: "USA"
    },
    {
      name: "9-to-5 Employee",
      salary: 50000,
      currency: "USD",
      description: "Contributes to company goals. Works regular hours in a team environment.",
      img: 'https://images.unsplash.com/photo-1664575599730-0814817939de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
      status: "Part-Time",
      location: "Hybrid",
      pinCode: "112233",
      area: "Midtown",
      city: "Chicago",
      state: "IL",
      country: "USA"
    },
    {
      name: "Entrepreneur",
      salary: 80000,
      currency: "USD",
      description: "Starts and manages a business. Takes on various leadership roles.",
      img: 'https://plus.unsplash.com/premium_photo-1661277816311-28cced31f998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
      status: "Self-Employed",
      location: "Variable",
      pinCode: "33445",
      area: "Business District",
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    {
      name: "Networker",
      salary: 55000,
      currency: "USD",
      description: "Builds relationships in the industry. Enhances career opportunities.",
      img: 'https://images.unsplash.com/photo-1665686306265-c52ee9054479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fHww',
      status: "Freelance",
      location: "Remote",
      pinCode: "99887",
      area: "Virtual",
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    {
      name: "Digital Marketer",
      salary: 65000,
      currency: "USD",
      description: "Promotes products online. Uses analytics for strategic marketing.",
      img: 'https://media.istockphoto.com/id/2012746933/photo/cyber-security-black-man-and-code-reflection-in-eyewear-hacking-and-software-update-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bJxHjbTcJUx_GqkhBpHfUJuuQ0raaN3dJo1KIP4oaRE=',
      status: "Part-Time",
      location: "Hybrid",
      pinCode: "44556",
      area: "Tech Hub",
      city: "Austin",
      state: "TX",
      country: "USA"
    },
    {
      name: "Software Engineer",
      salary: 95000,
      currency: "USD",
      description: "Develops applications and software systems for various purposes.",
      img: 'https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: "Full-Time",
      location: "Remote",
      pinCode: "77777",
      area: "Tech Park",
      city: "Boston",
      state: "MA",
      country: "USA"
    },
    {
      name: "Project Manager",
      salary: 75000,
      currency: "USD",
      description: "Manages project timelines, resources, and team dynamics.",
      img: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: "Contract",
      location: "On-Site",
      pinCode: "88999",
      area: "Downtown",
      city: "San Diego",
      state: "CA",
      country: "USA"
    },
    {
      name: "Graphic Designer",
      salary: 45000,
      currency: "USD",
      description: "Designs visual content for digital media and marketing.",
      img: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: "Freelance",
      location: "Remote",
      pinCode: "55678",
      area: "Creative Hub",
      city: "Denver",
      state: "CO",
      country: "USA"
    },
   
  ];

  setSkills(initialSkills);
  setFilteredSkills(initialSkills); // Initially set to all skills
}, []);