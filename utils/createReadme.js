function createReadme(data) {
    return `# Test readme for ${data.title}
    
    ## Description
    
    ${data.description}
    
    ## Details
    * GitHub username: ${data.username}
    * Email: ${data.email}`;
}

module.exports = createReadme;