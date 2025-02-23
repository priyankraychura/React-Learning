import axios from "axios";
import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "priyankraychura";
const TOKEN = "";

const ApiFetch = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
            headers: {
                Authorization: `token ${TOKEN}`,
                Accept: "application/vnd.github.v3+json"
            }
        })
        .then(response => setRepos(response.data))
        .catch(error => console.error("Error fetching repositories:", error));
    }, []);

    console.log(repos);
    

    return (
        <div>
            <h2>My GitHub Repositories</h2>
            <ol>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ApiFetch;
