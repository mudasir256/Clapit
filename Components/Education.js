import React, { useEffect, useState } from 'react';

const statsData = [
  { icon: 'project-management', from: 5, to: 25, description: 'finished projects' },
  { icon: 'content-management', from: 0, to: 30, description: 'Created jobs' },
  { icon: 'user', from: 0, to: 20, description: 'happy customers' },
  { icon: 'aim', from: 0, to: 8, description: 'years of experience' },
];

const Education = () => {
  const styles = {
    stats: {
      position: 'relative',
      padding: '60px 0',
      background: 'linear-gradient(135deg, #f9f9f9 0%, #e3e3e3 100%)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1,
      opacity: 0.4,
      backgroundImage: 'url("/assets/images/sections-bg-images/pattern-bg-3.jpg")',
    },
    statsInner: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
    },
    statBox: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    statBoxInner: {
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      position: 'relative',
    },
    statBoxInnerHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    },
    statIcon: {
      fontSize: '50px',
      color: '#007bff',
      marginBottom: '20px',
      transition: 'color 0.3s',
    },
    statNum: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#333',
      transition: 'color 0.3s',
    },
    statDesc: {
      display: 'block',
      fontSize: '18px',
      color: '#666',
    },
  };

  const [counters, setCounters] = useState(statsData.map(stat => ({ value: stat.from })));
  const duration = 3000; 

  useEffect(() => {
    const animations = statsData.map((stat, index) => {
      const increment = (stat.to - stat.from) / (duration / 50); 
      let currentValue = stat.from;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.to) {
          currentValue = stat.to;
          clearInterval(interval);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = { value: Math.floor(currentValue) };
          return newCounters;
        });
      }, 50);
      return interval;
    });

    return () => animations.forEach(clearInterval); 
  }, []);

  return (
    <section style={styles.stats} className="js-stats-counter mega-section">
      <div style={styles.overlay} />
      <div className="container">
        <div style={styles.statsInner}>
          <div className="row">
            {statsData.map((stat, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3" style={styles.statBox}>
                <div
                  style={styles.statBoxInner}
                  className="stat-box-inner"
                  data-tilt="data-tilt"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = styles.statBoxInnerHover.transform;
                    e.currentTarget.style.boxShadow = styles.statBoxInnerHover.boxShadow;
                    e.currentTarget.querySelector('.stat-icon').style.color = '#0056b3'; 
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.querySelector('.stat-icon').style.color = '#007bff'; 
                  }}
                >
                  <i className={`flaticon-${stat.icon} stat-icon`} style={styles.statIcon} />
                  <p className="stat-num" style={styles.statNum}>
                    <span>{counters[index]?.value}</span>
                    <span className="sign">+</span>
                  </p>
                  <span className="stat-desc" style={styles.statDesc}>{stat.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
