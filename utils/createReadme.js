function createReadme(responses) {
 
  return `# Test readme for ${responses.title}
    
  ## Description
  
  ${responses.description}
  
  ## Details
  * GitHub username: ${responses.username}
  * Email: ${responses.email}`;
};
  
  module.exports = createReadme;