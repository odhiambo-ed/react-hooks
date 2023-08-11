import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(url);
        const profile = await response.json();
        setProfile(profile);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, [profile])
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {profile.map((profile) => {
          const { id, login, avatar_url, html_url } = profile;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;