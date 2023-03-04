const URL = 'http://localhost:3005/api/users';

const getUserData = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);
    return data.users;
}

export default getUserData;