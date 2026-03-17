import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import '../Components/Profile.css';
import defaultProfile from '../assets/maleProfile.jpg';

function Profile() {
  const { user, updateUser, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    username: user?.username || '',
    profileImage: user?.profileImage || null
  });

  // حماية: إذا لم يكن المستخدم مسجل دخول، أرسله للـ login
  if (!user) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2>Welcome! Please login first.</h2>
        <button 
          onClick={() => navigate('/login')} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#C2FF40',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    updateUser({
      username: editData.username,
      profileImage: editData.profileImage
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-image-wrapper">
                <img 
                  src={editData.profileImage || defaultProfile} 
                  alt={`${user.username}'s profile`} 
                  className="profile-image"
                />
                <div className="profile-status"></div>
                {isEditing && (
                  <label htmlFor="image-upload" className="edit-image-label">
                    📷 Change Image
                  </label>
                )}
              </div>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <h1 className="profile-name">
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.username}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      username: e.target.value
                    }))}
                    style={{
                      border: '2px solid #C2FF40',
                      padding: '8px',
                      borderRadius: '5px',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}
                  />
                ) : (
                  user.username
                )}
              </h1>
              <span className="profile-member-type">PRO Member</span>
            </div>

            <div className="profile-body">
              <div className="profile-section">
                <h3 className="section-title">Personal Information</h3>
                
                <div className="info-group">
                  <div className="info-item">
                    <div className="info-content">
                      <label>Username</label>
                      <p>{user.username}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-content">
                      <label>Email</label>
                      <p>{user.email}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-content">
                      <label>Registration Date</label>
                      <p>{new Date(user.createdAt).toLocaleDateString('ar-EG')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <h3 className="section-title">Statistics</h3>

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

              <div className="profile-actions">
                {isEditing ? (
                  <>
                    <button 
                      onClick={handleSaveChanges}
                      style={{
                        backgroundColor: '#C2FF40',
                        color: '#000',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      Save Changes
                    </button>
                    <button 
                      onClick={() => {
                        setIsEditing(false);
                        setEditData({
                          username: user.username,
                          profileImage: user.profileImage
                        });
                      }}
                      style={{
                        backgroundColor: '#ccc',
                        color: '#000',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setIsEditing(true)}
                    style={{
                      backgroundColor: '#C2FF40',
                      color: '#000',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Edit Profile
                  </button>
                )}
                <button 
                  onClick={handleLogout}
                  style={{
                    backgroundColor: '#ff6b6b',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;