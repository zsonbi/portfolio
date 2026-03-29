namespace BlazorPortfolio.Models;

public static class PortfolioData
{
    public const string Name = "Zsombor Zsolt D\u00e9r";
    public const string Title = "Software Developer";
    public const string Email = "zsomborder.dev@gmail.com";
    public const string GitHubUrl = "https://github.com/zsonbi";
    public const string LinkedInUrl = "https://www.linkedin.com/in/zsomborder";
    public const string Location = "Budapest, Hungary";

    public const string About =
        "Recent Computer Science BSc graduate from ELTE with a passion for solving complex, large-scale problems. " +
        "I see challenges as opportunities for growth and actively apply new technologies in my personal and professional projects. " +
        "My home lab, where I experiment with networking and servers, is a testament to my hands-on approach to learning and development.";

    public static readonly Dictionary<string, string[]> Skills = new()
    {
        ["Programming Languages"] = ["C++", "C#", "C", "PHP", "Java", "JavaScript", "Python"],
        ["Frameworks & Technologies"] = ["ASP.NET", "Yii", "CodeIgniter", "Avalonia", "Unity", "HTML/CSS", "React", "Keycloak"],
        ["DevOps & Infrastructure"] = ["Docker", "CI/CD", "Jenkins", "Linux", "Virtualization", "Networking (Cisco, Mikrotik)", "Nginx"],
        ["Databases"] = ["SQL", "PostgreSQL", "MariaDB"],
        ["Testing"] = ["Unit Tests", "Integration Tests", "Load Tests"],
    };

    public static readonly ExperienceItem[] Experience =
    [
        new("Full Stack Engineer", "MPTR Kft.", "Jul 2024 - Present",
        [
            "Designed, developed, and maintained ASP.NET web applications.",
            "Improved system stability and development process efficiency by implementing Docker, Nginx, and Graylog systems.",
            "Ensured software quality by writing unit, integration, and load tests, successfully identifying and fixing performance issues.",
            "Managed software deployment and operation by writing and managing Docker Compose configurations for multi-service integrations.",
            "Planned and engineered an Avalonia application for displaying images based on a K\u00fcbler F5888 encoder position, which will be used in elevators.",
            "Developed an internal ASP.NET MVC portal to manage a custom Android app store, integrating it with a Jenkins pipeline to fully automate the application build and release process.",
            "I independently designed and implemented the backend of a restaurant software using CRUD principles in the ASP.NET framework.",
            "On several occasions, there were need to manage physical hardware, such as setting up a new server, troubleshooting network issues or setting up a complete camera system in a restaurant.",
        ]),
        new("Freelance Project", "I.V.V. 2000 Kft.", "Aug 2024 - Sep 2024",
        [
            "Independently designed and executed the end-to-end installation of a low-voltage network system."
        ]),
        new("IT Intern", "Debrecen International Airport", "Jun 2022 - Jul 2022",
        [
            "Contributed to server management and enhanced IT security by installing and configuring Nagios monitoring servers."
        ]),
    ];

    public static readonly ProjectItem[] Projects =
    [
        new("Habit Tracker With Car Game (Thesis)",
            "A multi-platform application combining daily tasks with gamification (Smashy road inspired car game), built with a client-server architecture.",
            ["Unity", "C#", "API", "Client-Server", "ASP.NET", "Docker"],
            Link: "https://zsonbi.github.io/Thesis/game/",
            Code: "https://github.com/zsonbi/Thesis"),
        new("Bomberman Remake",
            "A reimplementation of the classic Bomberman game in Unity, featuring custom gameplay mechanics. It was written as a group project with my university classmates as an assignment.",
            ["Unity", "C#", "Team Project"],
            Link: "https://zsonbi.github.io/BomberMan/game/",
            Code: "https://github.com/zsonbi/BomberMan"),
        new("Virus Spread Simulation",
            "A simulation modeling the spread of diseases in an urban environment for the Szeged Innovation Competition. It has a configurable on startup for city size, inhabitants behaviour, virus properties and can be interacted during runtime as well.",
            ["Simulation", "C#", "Data Modeling", "Unity"],
            Link: "https://zsonbi.github.io/Virus-Simulation/",
            Code: "https://github.com/zsonbi/Virus-Simulation"),
        new("Docker image for graylog-sidecar",
            "A Docker image for Graylog Sidecar, a lightweight configuration management system for log collectors. It simplifies the deployment and management of log collectors in a Dockerized environment, so it is easily deployed in servers or next to services.",
            ["Docker", "Monitoring", "Agents", "Graylog"],
            Code: "https://github.com/zsonbi/graylog-sidecar"),
        new("Docker image for jenkins agents",
            "A Docker image for Jenkins agents, designed to streamline the setup of build agents in a Jenkins CI/CD environment. This image comes pre-configured with essential tools and dependencies, making it easy to deploy and scale Jenkins agents as needed.",
            ["Docker", "Jenkins", "Agents", "CI/CD"],
            Code: "https://github.com/zsonbi/graylog-sidecar"),
    ];

    public static readonly EducationItem[] Education =
    [
        new("University of Helsinki", "Computer Science BSc (Erasmus)", "2025"),
        new("ELTE Faculty of Informatics", "Computer Science BSc", "2022 - 2025"),
    ];

    public static readonly HomelabItem[] Homelab =
    [
        new("Rack", "images/rack.jpg",
            "My main router(RB5009UG+S+IN) and my main switch(CRS310-8G+2S+) which are the backbone of my home network"),
        new("Mini server", "images/mini-server.jpg",
            "To lower my operating costs, I'm using a Beelink SER8 mini-PC as a server. I've upgraded it to 96GB of RAM so I can run various services using Proxmox."),
    ];
}
