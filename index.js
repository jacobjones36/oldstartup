
class user{
    constructor(){
        const nameOfUser = document.querySelector('.user-name');
        nameOfUser.textContent = this.getPlayerName();
    }
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Unknown User';
    }
}