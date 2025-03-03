import '../assets/styles/Certificate.scss';

const certificates = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS",
      date: "July 2024",
      link: "https://www.credly.com/badges/7b22833a-3ecb-4ca0-ab40-ea220aa03b5d/linked_in_profile", // Replace with actual certificate link
    },
    {
      title: "Hashgraph Developer",
      issuer: "The Hashgraph Association",
      date: "September 2024",
      link: "https://certs.hashgraphdev.com/799dead7-e5f1-4a16-8392-6b71b065ff9d.pdf",
    },
    {
      title: "Decision Making For Leaders",
      issuer: "Udemy",
      date: "November 2024",
      link: "https://www.udemy.com/certificate/UC-359e5951-4e46-452b-98d9-367e7a7a26aa/",
    },
    {
        title: "Embracing Humility",
        issuer: "Udemy",
        date: "December 2024",
        link: "https://www.udemy.com/certificate/UC-d3289e93-05a1-4f0d-b77b-f51140fd41c0/"
    }
  ];
  
  const Certificates = () => {
    return (
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-issuer">{cert.issuer}</p>
            <p className="certificate-date">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default Certificates;
  