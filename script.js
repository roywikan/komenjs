function submitComment() {
    const comment = document.getElementById('comment').value;

    // Use your GitHub username, repository name, and personal access token
    const owner = 'roywikan';
    const repo = 'komenjs';
    const path = 'comments.txt';
    const token = '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';

    // Encode the comment content
    const content = btoa(comment);

    // Make the API request
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: 'Add new comment',
            content: content,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Comment submitted successfully:', data);

        // No need to decode content here as it's a new comment
        // You can handle success here (e.g., update the UI).

    })
    .catch(error => console.error('Error submitting comment:', error));
}
