"use client";
import React from "react";
import Header from '../Header';
import Image from 'next/image';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "KISHORE KODALI",
      role: "Director",
      image: "/kishore-kodali.png"
    },
    {
      name: "SAMPATH KUMAR GRANDHI",
      role: "Director",
      image: "/sampath-kumar.png"
    }
  ];

  return (
    <>
      <style jsx>{`
        .team-container {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          position: relative;
          margin-top: 6rem;
          overflow-x: hidden;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #0064ff;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #0064ff, #a6a6a6);
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 2rem;
          justify-items: center;
        }
        
        .team-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          text-align: center;
          width: 100%;
          max-width: 400px;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .team-image {
          width: 100%;
          height: 400px;
          position: relative;
          overflow: hidden;
          background: #f8f9fa;
        }
        
        .team-image img {
          transition: transform 0.5s ease;
        }
        
        .team-card:hover .team-image img {
          transform: scale(1.05);
        }
        
        .team-info {
          padding: 2rem;
          background: white;
        }
        
        .team-name {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
          letter-spacing: 0.5px;
        }
        
        .team-role {
          font-size: 1rem;
          color: #0064ff;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .content-wrapper {
            padding: 2rem 1rem;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .team-image {
            height: 350px;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .team-image {
            height: 300px;
          }
          
          .team-info {
            padding: 1.5rem;
          }
          
          .team-name {
            font-size: 1.2rem;
          }
        }
      `}</style>
      
      <Header />
      
      <div className="team-container">
        <div className="content-wrapper">
          <h1 className="section-title">Our Leadership Team</h1>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: index === 0 ? 'center 20%' : 'center'
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;