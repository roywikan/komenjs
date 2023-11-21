function submitComment() {
    const comment = document.getElementById('comment').value;

    // Use your GitHub username, repository name, and personal access token
    const owner = 'roywikan';
    const repo = 'komenjs';
    const path = 'comments.txt';

    const token = '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';

    // Log the token
    console.log('Token:', token);

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
        // You can handle success here (e.g., update the UI).
    })
    .catch(error => console.error('Error submitting comment:', error));
}
