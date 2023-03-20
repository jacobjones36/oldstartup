function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Unknown User';
}