import '../Components/Membership.css';
import { Link } from 'react-router-dom';

function Membership() {
  const plans = [
    {
      name: 'BASIC',
      price: '29',
      description: 'Essential access for steady progress.',
      features: [
        { text: 'Standard Gym Access', included: true },
        { text: 'Locker Room Access', included: true },
        { text: 'Basic Equipment usage', included: true },
        { text: 'Group Classes', included: false },
      ],
      buttonText: 'GET STARTED',
      buttonVariant: 'secondary',
    },
    {
      name: 'PRO',
      price: '59',
      description: 'Our most popular plan for athletes.',
      isPopular: true,
      features: [
        { text: '24/7 Premium Access', included: true },
        { text: 'Unlimited Group Classes', included: true },
        { text: 'Peak Hours Priority', included: true },
        { text: '2 Guest Passes Monthly', included: true },
        { text: 'Nutritional Consultation', included: true },
      ],
      buttonText: 'JOIN THE PROS',
      buttonVariant: 'primary',
    },
    {
      name: 'ELITE',
      price: '99',
      description: 'Full access to the total VIP life.',
      features: [
        { text: 'All Pro Features Included', included: true },
        { text: 'Personal Trainer (4 sessions)', included: true },
        { text: 'Spa & Recovery Access', included: true },
        { text: 'Unlimited Guest Passes', included: true },
      ],
      buttonText: 'GO ELITE',
      buttonVariant: 'dark',
    },
  ];

  const comparisonData = [
    { feature: 'Full Gym Access', basic: true, pro: true, elite: true },
    { feature: 'Peak Hours Priority', basic: false, pro: true, elite: true },
    { feature: 'Guest Passes', basic: 'None', pro: '2/mo', elite: 'Unlimited' },
    { feature: 'Personal Trainer', basic: false, pro: 'Discounted', elite: true },
    { feature: 'Spa & Sauna Access', basic: false, pro: false, elite: true },
    { feature: 'Complimentary Towels', basic: false, pro: true, elite: true },
  ];

  return (
    <>
      
      <div className="membership-page">
        {/* Hero Section */}
        <section className="membership-hero">
          <span className="hero-tag">ELEVATE YOUR GAME</span>
          <h1 className="hero-title">THE VIP EXPERIENCE</h1>
          <p className="hero-subtitle">
            Join the elite tier of athletes. Choose a membership plan designed to 
            push your limits and maximize your potential at Champions Arena.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-section">
          <div className="pricing-cards">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.isPopular ? 'popular' : ''} ${plan.name.toLowerCase()}`}
              >
                {plan.isPopular && (
                  <span className="popular-badge">MOST POPULAR</span>
                )}
                
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/mo</span>
                </div>
                <p className="plan-description">{plan.description}</p>
                
                <Link to="/booking" className={`plan-button ${plan.buttonVariant}`}>
                  {plan.buttonText}
                </Link>
                
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={feature.included ? 'included' : 'not-included'}>
                      <span className="check-icon">
                        {feature.included ? '✓' : '○'}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="comparison-section">
          <h2 className="section-title">BENEFITS COMPARISON</h2>
          <p className="section-subtitle">Find the right plan for your fitness journey.</p>
          
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>FEATURES</th>
                  <th>BASIC</th>
                  <th>PRO</th>
                  <th>ELITE</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="feature-name">{row.feature}</td>
                    <td className="feature-value">
                      {row.basic === true ? (
                        <span className="check">✓</span>
                      ) : row.basic === false ? (
                        <span className="cross">✕</span>
                      ) : (
                        <span className="text-value">{row.basic}</span>
                      )}
                    </td>
                    <td className="feature-value">
                      {row.pro === true ? (
                        <span className="check">✓</span>
                      ) : row.pro === false ? (
                        <span className="cross">✕</span>
                      ) : (
                        <span className="text-value">{row.pro}</span>
                      )}
                    </td>
                    <td className="feature-value">
                      {row.elite === true ? (
                        <span className="check">✓</span>
                      ) : row.elite === false ? (
                        <span className="cross">✕</span>
                      ) : (
                        <span className="text-value">{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">TRAIN LIKE A CHAMPION.</h2>
            <p className="cta-description">
              Champions Arena isn't just a gym. It's an ecosystem of high 
              performance, expert coaching, and state-of-the-art recovery 
              tools. Your journey to the top starts here.
            </p>
            <div className="cta-buttons">
              <Link to="/tour" className="btn-primary">BOOK A TOUR</Link>
              <Link to="/signup" className="btn-secondary">TRIAL PASS</Link>
            </div>
          </div>
          <div className="cta-image">
            <img 
              src="\src\assets\gym-interior.jpg" 
              alt="Gym interior" 
            />
          </div>
        </section>
      </div>

    </>
  );
}

export default Membership;