const API_KEY = "DEDhJrjquxfUusVbVNTTWvLB7Hu1"

export const getmatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log("ERROR", error));

};

//load match details

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error));
};