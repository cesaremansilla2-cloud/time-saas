import React, { useState, useEffect } from 'react';

const JokeGenerator = () => {
    const [joke, setJoke] = useState('');
    const [category, setCategory] = useState('Programming');
    const categories = ['Programming', 'Miscellaneous', 'Puns', 'Spooky', 'Christmas'];

    useEffect(() => {
        fetchJoke();
    }, [category]);

    const fetchJoke = async () => {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`);
        const data = await response.json();
        setJoke(data.joke);
    };

    const shareJoke = () => {
        navigator.share({
            title: 'Random Joke',
            text: joke,
            url: 'https://jokeapi.dev/'
        });
    };

    return (
        <div>
            <h1>Random Joke Generator</h1>
            <select onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <p>{joke}</p>
            <button onClick={shareJoke}>Share this joke</button>
        </div>
    );
};

export default JokeGenerator;