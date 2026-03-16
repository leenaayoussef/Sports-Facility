import '../Components/Profile.css';
import profilePic from '../assets/maleProfile.jpg';

function Profile() {
  const userData = {
    name: 'Muhammed Gamal',
    email: 'Muhammed@gmail.com',
    age: 21,
    sex: 'Male',
    memberSince: 'January 2024',
    membershipType: 'PRO',
    profileImage: profilePic
  };

  return (
    <>
      
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-image-wrapper">
                <img 
                  src={userData.profileImage} 
                  alt={`${userData.name}'s profile`} 
                  className="profile-image"
                />
                <div className="profile-status"></div>
              </div>
              <h1 className="profile-name">{userData.name}</h1>
              <span className="profile-member-type">{userData.membershipType} Member</span>
            </div>

            <div className="profile-body">
              <div className="profile-section">
                <h3 className="section-title">Personal Information</h3>
                
                <div className="info-group">
                  <div className="info-item">
                    <div className="info-content">
                      <label>Full Name</label>
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-content">
                      <label>Email Address</label>
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="info-row">
                    <div className="info-item">
                      <div className="info-content">
                        <label>Age</label>
                        <p>{userData.age} years</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-content">
                        <label>Gender</label>
                        <p>{userData.sex}</p>
                      </div>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-content">
                      <label>Member Since</label>
                      <p>{userData.memberSince}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <h3 className="section-title">Membership Details</h3>
                
                <div className="membership-stats">
                  <div className="stat-card">
                    <span className="stat-number">48</span>
                    <span className="stat-label">Sessions</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">12</span>
                    <span className="stat-label">Classes</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">156</span>
                    <span className="stat-label">Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Profile;